import { memo } from "react";

type LazyLoadImageProps = {
  className?: string;
  src: string;
  alt: string;
};

const LazyLoadImage = memo(({ className, src, alt, ...props }: LazyLoadImageProps) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={(event: any) => (event.target.src = "/images/sakura.jpg")}
      {...props}
    />
  );
});

export default LazyLoadImage;
