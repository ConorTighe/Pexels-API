import { createContext, type PropsWithChildren, useContext } from 'react';
import { type IPhoto, type TDisplayedImages } from '../../interfaces/photos';
import usePhotos from '../../hooks/use-photos';
interface IPhotosContextState {
  photos: IPhoto[];
  getDisplayedImages: () => TDisplayedImages[];
}

const initialPhotosState: IPhotosContextState = {
  photos: [],
  getDisplayedImages: () => [],
};

const PhotosContext = createContext(initialPhotosState);

export const usePhotosContext = (): IPhotosContextState => useContext(PhotosContext);

export const PhotosProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { photos, getDisplayedImages } = usePhotos();

  return (
    <PhotosContext.Provider value={{ photos, getDisplayedImages }}>
      {children}
    </PhotosContext.Provider>
  );
};

export default usePhotosContext;
