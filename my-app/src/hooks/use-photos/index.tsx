import { useState, useEffect } from 'react';
import { type IPhoto, type TDisplayedImages } from '../../interfaces/photos';
import Pexels from '../../api/photos';
interface IProps {
  photos: IPhoto[];
  getDisplayedImages: () => TDisplayedImages[];
}

const usePhotos = (): IProps => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const getDisplayedImages = (): TDisplayedImages[] => {
    if (photos.length === 0) return [];
    const images: TDisplayedImages[] = photos.map((photo) => ({
      id: photo.id,
      src: photo.src,
      photographer: photo.photographer,
    }));
    return images;
  };

  useEffect(() => {
    const getPhotos = async (): Promise<void> => {
      const result: IPhoto[] = await Pexels.getPhotos();
      setPhotos(result);
    };
    void getPhotos();
  }, []);

  return { photos, getDisplayedImages };
};

export default usePhotos;
