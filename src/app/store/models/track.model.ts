import { Album } from './album.model'
import { Artist } from './artist.model';
import { ExternalURLs } from './external-urls.model';

export interface Track {
    album?: Album;
    artists?: Artist[];
    available_markets?: string[];
    disc_number?: number;
    duration_ms?: number;
    explicit?: boolean;
    external_ids?: any;
    external_urls?: ExternalURLs;
    href?: string;
    id?: string;
    is_local?: boolean;
    name?: string;
    popularity?: number;
    preview_url?: string;
    track_number?: number;
    type?: string;
    uri?: string;
    is_playable?: boolean;
    linked_from?: any;
    linked_from_uri?: string;
}