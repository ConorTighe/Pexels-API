import { Image } from '@mantine/core';
import { type IPhoto } from '../../interfaces/photos';
import { Carousel } from '@mantine/carousel';

interface IGridViewProps {
  photos: IPhoto[];
}

function CarouselView({ photos = [] }: IGridViewProps): JSX.Element {
  return (
    <Carousel
      withIndicators
      slideSize='33.333333%'
      slideGap='md'
      loop
      align='start'
      slidesToScroll={3}
    >
      {photos.map((photo) => (
        <Carousel.Slide key={photo.id}>
          <Image height={'90vh'} src={photo.src.original} alt={photo.alt} placeholder={photo.alt} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default CarouselView;
