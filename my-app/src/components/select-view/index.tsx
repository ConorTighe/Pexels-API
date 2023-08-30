import React from 'react';
import { SegmentedControl } from '@mantine/core';
import { IViews, TView } from '../../interfaces/views';

interface IProps {
    selected: TView;
    handleSelectView: (value: TView) => void;
}

const views: IViews[] = [
  {
    label: "List",
    value: "list"
  },
  {
    label: "Accord",
    value: "accordion"
  },
  {
    label: "Grid",
    value: "grid"
  },
  {
    label: "API",
    value: "json"
  },
  {
    label: "Cards",
    value: "card"
  },
  {
    label: "Carousel",
    value: "carousel"
  }
]

function SelectView({ selected, handleSelectView }: IProps) {
  return (
    <SegmentedControl
      value={selected}
      onChange={handleSelectView}
      data={views}
    />
  );
}

export default SelectView