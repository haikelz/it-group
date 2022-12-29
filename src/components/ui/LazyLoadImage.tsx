import { SyntheticEvent } from "react";

type LazyLoadImageProps = {
  className?: string;
  src: string;
  alt: string;
};

const LazyLoadImage = ({ className, src, alt, ...props }: LazyLoadImageProps) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={(event: SyntheticEvent<HTMLImageElement, Event>) =>
        (event.currentTarget.src = "/images/sakura.jpg")
      }
      {...props}
    />
  );
};

export default LazyLoadImage;
