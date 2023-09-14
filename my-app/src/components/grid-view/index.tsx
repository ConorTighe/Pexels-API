import { Image } from '@mantine/core';
import { type IPhoto } from '../../interfaces/photos';
import './grid-view.css';

interface IGridViewProps {
  photos: IPhoto[];
}

function GridView({ photos }: IGridViewProps): JSX.Element {
  return (
    <div className='Grid-container'>
      {photos.map((photo) => (
        <Image
          key={photo.id.toString()}
          width={300}
          height={300}
          src={photo.src.original}
          alt={photo.alt}
          placeholder={photo.alt}
        />
      ))}
    </div>
  );
}

export default GridView;
