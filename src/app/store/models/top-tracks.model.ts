import { Track } from './track.model'

export interface TopTracks {
    href: string;
    items: Track[];
    limit: number;
    next: string;
    offset: number;
    previous: any;
    total: number
}