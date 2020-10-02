import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as store from 'store2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private window: Window, private http: HttpClient) { }

  async login () {
    // Create and store a new PKCE code_verifier (the plaintext random secret)
    let code_verifier = this.generateRandomString();
    localStorage.setItem("pkce_code_verifier", code_verifier);

    // Hash and base64-urlencode the secret to use as the challenge
    let code_challenge = await this.pkceChallengeFromVerifier(code_verifier);

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

  // Handle the redirect back from the authorization server and
  // get an access token from the token endpoint
  detectURLAuthCode() {
    let q: any = this.parseQueryString(window.location.search.substring(1));
    if(q.error) {
        alert("Error returned from authorization server: "+q.error);
    }
    
    // If the server returned an authorization code, attempt to exchange it for an access token
    if(q.code) {
      let postData =  new HttpParams() 
        .set('client_id', 'e0c1406ff1da42c7a695a8edc1eac028')
        .set('grant_type', 'authorization_code')
        .set('code', q.code)
        .set('redirect_uri', 'http://localhost:4200')
        .set('code_verifier', localStorage.getItem('pkce_code_verifier'));

      this.http.post('https://accounts.spotify.com/api/token', postData).subscribe(el => console.log(el))

      // Replace the history entry to remove the auth code from the browser address bar
      window.history.replaceState({}, null, "/");
    }
    // Clean this up since we don't need it anymore
    localStorage.removeItem("pkce_code_verifier");
  }

  // Parse a query string into an object
  parseQueryString(string) {
    if(string == "") { return {}; }
    var segments = string.split("&").map(s => s.split("=") );
    var queryString = {};
    segments.forEach(s => queryString[s[0]] = s[1]);
    return queryString;
  }

  generateRandomString() {
    var array = new Uint32Array(28);
    window.crypto.getRandomValues(array);
    return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
  }

  // Returns a promise that resolves to an ArrayBuffer
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
