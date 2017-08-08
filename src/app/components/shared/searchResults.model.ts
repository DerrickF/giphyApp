export class Image {
    _: string;
}

export class Artist {
    name: string[];
    listeners: string[];
    mbid: string[];
    url: string[];
    streamable: string[];
    image: Image[];
}

export class Artistmatch {
    artist: Artist[];
}

export class Result {
    totalResults: string[];
    startIndex: string[];
    itemsPerPage: string[];
    artistmatches: Artistmatch[];
}

export class Lfm {
    results: Result[];
}
