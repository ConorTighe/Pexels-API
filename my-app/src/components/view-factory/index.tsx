import { type TView } from '../../interfaces/views';
import Cards from '../cards-view';
import { type IPhoto } from '../../interfaces/photos';
import AccordionList from '../accordion-view';
import PexelsApiRaw from '../api-view';
import GridView from '../grid-view';
import PhotoList from '../list-view';
import CarouselView from '../carousel-view';

interface IFactoryProps {
  view: TView;
  photos: IPhoto[];
}

const renderView = (view: TView, photos: IPhoto[]): JSX.Element => {
  switch (view) {
    case 'card':
      return <Cards photos={photos} />;
    case 'accordion':
      return <AccordionList photos={photos} />;
    case 'list':
      return <PhotoList photos={photos} />;
    case 'grid':
      return <GridView photos={photos} />;
    case 'carousel':
      return <CarouselView photos={photos} />;
    default:
      return <PexelsApiRaw photos={photos} />;
  }
};

function Views({ view, photos }: IFactoryProps): JSX.Element {
  return <div>{renderView(view, photos)}</div>;
}

export default Views;
