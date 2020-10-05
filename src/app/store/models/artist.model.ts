import { ExternalURLs } from './external-urls.model'

export interface Artist {
    external_urls: ExternalURLs;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}