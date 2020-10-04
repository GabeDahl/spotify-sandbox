import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken: Subject<string>;
  refreshToken: Subject<string>;
  accessTokenValue: string;
  refreshTokenValue: string;

  constructor(private window: Window, private http: HttpClient, private cookieService: CookieService) {
    this.accessToken = new Subject<string>();
    this.refreshToken = new Subject<string>();
    this.accessToken.subscribe(val => {
      this.accessTokenValue = val;
    })
    this.refreshToken.subscribe(val => {
      this.refreshTokenValue = val;
    })

    this.refreshToken.next(this.cookieService.get('refreshToken'))
  }

  async login() {
    // Create and store a new PKCE code_verifier (the plaintext random secret)
    let code_verifier = this.generateRandomString();
    localStorage.setItem("pkce_code_verifier", code_verifier);

    // Hash and base64-urlencode the secret to use as the challenge
    let code_challenge = await this.pkceChallengeFromVerifier(code_verifier);

    console.log(code_challenge, code_verifier)
    // Build the authorization URL
    let url = `https://accounts.spotify.com/authorize/`
        + "?response_type=code"
        + "&client_id="+encodeURIComponent('e0c1406ff1da42c7a695a8edc1eac028')
        + "&scope="+encodeURIComponent('user-library-read user-top-read streaming')
        + "&redirect_uri="+encodeURIComponent('http://localhost:4200')
        + "&code_challenge="+encodeURIComponent(code_challenge)
        + "&code_challenge_method=S256"
        ;

    // Redirect to the authorization server
    this.window.location.href = url;
  }

  // send the refresh token and receive a new access token and refresh token
  refresh() {
    let postData =  new HttpParams() 
      .set('client_id', 'e0c1406ff1da42c7a695a8edc1eac028')
      .set('grant_type', 'refresh_token')
      .set('refresh_token', this.refreshTokenValue);
    this.http.post('https://accounts.spotify.com/api/token', postData).subscribe((data: any) => {
      this.accessToken.next(data.access_token)
      this.accessToken.next(data.refresh_token)
      this.cookieService.set('refreshToken', data.refresh_token)
      setTimeout(() => {
        this.refresh()
      }, 1000 * 60 * 59);
    })
  }

  // Handle the redirect back from the authorization server and
  // get an access token from the token endpoint
  exchangeCode(code: string) {
    console.log('exchanging')
    let v = localStorage.getItem('pkce_code_verifier')
    let postData =  new HttpParams() 
      .set('client_id', 'e0c1406ff1da42c7a695a8edc1eac028')
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', 'http://localhost:4200')
      .set('code_verifier', v);
    
    // Replace the history entry to remove the auth code from the browser address bar
    window.history.replaceState({}, null, "/");
    
    // Clean this up since we don't need it anymore
    localStorage.removeItem("pkce_code_verifier");
    this.http.post('https://accounts.spotify.com/api/token', postData).subscribe((data: any) => {
      this.accessToken.next(data.access_token)
      this.accessToken.next(data.refresh_token)
      this.cookieService.set('refreshToken', data.refresh_token)
      setTimeout(() => {
        this.refresh()
      }, 1000 * 60 * 59);
    })
  }

  generateRandomString() {
    var array = new Uint32Array(28);
    window.crypto.getRandomValues(array);
    return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
  }

  sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data);
  }

  // Base64-urlencodes the input string
  base64urlencode(str) {
    // Convert the ArrayBuffer to string using Uint8 array to conver to what btoa accepts.
    // btoa accepts chars only within ascii 0-255 and base64 encodes them.
    // Then convert the base64 encoded to base64url encoded
    //   (replace + with -, replace / with _, trim trailing =)
    return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  async pkceChallengeFromVerifier(v) {
    let hashed = await this.sha256(v);
    return this.base64urlencode(hashed);
  }

}
