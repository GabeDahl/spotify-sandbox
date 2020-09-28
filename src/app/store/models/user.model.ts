import { ExternalURLs } from "./external-urls.model";
import { Followers } from "./followers.model";
import { Image } from "./image.model";

export interface User {
    display_name: string;
    external_urls: ExternalURLs;
    user_id: string;
    followers: Followers;
    href: string;
    images: Image[];
    type: string;
    uri: string;
}