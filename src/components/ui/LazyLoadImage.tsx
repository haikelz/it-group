import { memo } from "react";

type LazyLoadImageProps = {
  className: string;
  src: string;
  alt: string;
};

const LazyLoadImage = memo(({ className, src, alt }: LazyLoadImageProps) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={(event: any) => (event.target.src = "/images/sakura.jpg")}
    />
  );
});

export default LazyLoadImage;
