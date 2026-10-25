export interface OptimizedImage {
  src: string;
  srcset: string;
  width: number;
  height: number;
}

export interface VenueFacility {
  title: string;
  description: string;
  icon: string;
  image?: OptimizedImage;
}

export function responsiveImage(
  pathWithoutExtension: string,
  variants: readonly { width: number; height: number }[],
): OptimizedImage {
  const ordered = [...variants].sort((left, right) => left.width - right.width);
  const largest = ordered[ordered.length - 1];

  return {
    src: `${pathWithoutExtension}-${largest.width}.webp`,
    srcset: ordered
      .map((variant) => `${pathWithoutExtension}-${variant.width}.webp ${variant.width}w`)
      .join(', '),
    width: largest.width,
    height: largest.height,
  };
}
