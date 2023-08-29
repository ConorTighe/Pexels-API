import {useState, useEffect } from 'react';
import { IPhoto, TDisplayedImages } from '../../interfaces/photos';
import Pexels from '../../api/photos';

const usePhotos = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const getDisplayedImages = (): TDisplayedImages[] => {
    if(!photos) return [];
    const images: TDisplayedImages[] = photos.map(photo => ({ id: photo.id, src: photo.src, photographer: photo.photographer }));
    return images;
  }

  useEffect(() => {
    const getPhotos = async () => {
        const result: IPhoto[] = await Pexels.getPhotos();
        setPhotos(result)
      };
    getPhotos()
  }, []);

  return { photos, getDisplayedImages }
}

export default usePhotos