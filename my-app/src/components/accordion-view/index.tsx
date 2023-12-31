import React from 'react';
import { Accordion, Image } from '@mantine/core';
import { type IPhoto } from '../../interfaces/photos';

interface IAccordionListProps {
  photos: IPhoto[];
}

function AccordionList({ photos }: IAccordionListProps): JSX.Element {
  return (
    <Accordion>
      {photos.map((photo) => (
        <Accordion.Item key={photo.id} value={photo.id.toString()}>
          <Accordion.Control>
            {(photo?.alt).length > 0 ? photo.alt : 'Picture'} by {photo.photographer}
          </Accordion.Control>
          <Accordion.Panel>
            <Image src={photo.src.original} height={200} alt={photo.alt} />
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AccordionList;
