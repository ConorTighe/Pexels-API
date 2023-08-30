import React from 'react';
import { TView } from '../../interfaces/views';
import Cards from '../cards-view';
import { IPhoto } from '../../interfaces/photos';
import AccordionList from '../accordion';
import PexelsApiRaw from '../api-view';

interface IFactoryProps {
    view: TView;
    photos: IPhoto[];
}

const renderView = (view: TView, photos: IPhoto[]): JSX.Element => {
    switch(view) {
      case "card":
        return <Cards photos={photos} />;
      case "list":
        return <AccordionList photos={photos} />;
      default:
        return <PexelsApiRaw photos={photos} />;
    }
  }

function Views({ view, photos }: IFactoryProps) {
  return (
    <div>
       {renderView(view, photos)}
    </div>
  )
}

export default Views