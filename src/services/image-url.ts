import noImageURL from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImageURL;

  const target = "io/media";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "/crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
