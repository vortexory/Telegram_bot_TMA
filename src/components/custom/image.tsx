import * as React from "react";
import { cn } from "@/lib/utils";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  width?: number | string;
  height?: number | string;
  alt: string;
  className?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, width, height, alt, ...props }, ref) => {
    return (
      <img
        className={cn(className)}
        ref={ref}
        src={src}
        width={width}
        height={height}
        alt={alt}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export { Image };
