interface TransformOptions {
  factor: number;
  blendMode: "overlay" | "screen";
  quantize: boolean | Function;
}


declare module "legofy" {
  export function transform(img: HTMLImageElement, options?: Partial<TransformOptions>): void;
}

