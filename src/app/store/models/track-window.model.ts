import { Track } from './track.model'

export interface TrackWindow {
    current_track: Track;
    next_tracks: Track[];
    previous_tracks: Track[];
}