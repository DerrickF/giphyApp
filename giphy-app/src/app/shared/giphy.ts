export class Giphy {
    id: string;
    url: string;
    rating: string;
    images: Image[];
}

export class Image {
    preview: Preview;
    fixed_height_small: FixedHeightSmall;
}

export class Preview {
    width: string;
    height: string;
    mp4: string;
}

export class FixedHeightSmall{
    url: string;
    height: string;
    width: string;
}
