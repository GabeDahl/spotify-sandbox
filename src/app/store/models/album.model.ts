import { Artist } from "./artist.model";
import { Image } from './image.model'
import { ExternalURLs } from './external-urls.model'

export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalURLs;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}