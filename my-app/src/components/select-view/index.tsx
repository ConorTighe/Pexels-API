import React from 'react';
import { SegmentedControl } from '@mantine/core';
import { IViews, TView } from '../../interfaces/views';

interface IProps {
    selected: TView;
    handleSelectView: (value: TView) => void;
}

const views: IViews[] = [{
  label: "Cards",
  value: "card"
},
{
  label: "List",
  value: "list"
},
{
  label: "API",
  value: "json"
}]

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