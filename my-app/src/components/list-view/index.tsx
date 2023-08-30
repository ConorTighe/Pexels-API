import { Image, List } from '@mantine/core';
import { IPhoto } from '../../interfaces/photos';
import "./list-view.css"

interface IAccordionListProps {
    photos: IPhoto[]
}

function PhotoList({ photos }: IAccordionListProps) {
  return (
    <div className='List-container'>
        <List type="ordered">
            {photos.map((photo, i) => (
                <List.Item key={photo.id} value={i + 1}>
                    <div className='List-item'>
                        <Image
                            src={photo.src.original}
                            height={200}
                            alt={photo.alt}
                        />
                        <p className='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </List.Item>
            ))}
        </List>
    </div>
  );
}

export default PhotoList