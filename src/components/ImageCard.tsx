import { ImageCardProps } from "../types";
export default function ImageCard({
  imageTop,
  imageBottom,
  borderClass,
}: ImageCardProps) {
  return (
    <div className={`border border-5 ${borderClass} p-1`}>
      <img
        src={imageTop}
        className="img-fluid img1-pos mb-2"
        alt="Description"
      />
      <img src={imageBottom} className="img-fluid img1-pos" alt="Description" />
    </div>
  );
}
