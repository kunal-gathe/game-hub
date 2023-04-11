const  noImage = 'https://blendcolours.com/wp-content/uploads/2021/02/placeholder-image-750x465.png'

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;