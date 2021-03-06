import * as React from 'react';
import { IHotelItem } from "$types";

const style = require('./style.scss');

export interface IHotelListItemProps {
  title: IHotelItem['title'],
}

export const HotelListItem: React.FunctionComponent<IHotelListItemProps> = ({ title }) => (
  <div className={style.row}>
    {title}
  </div>
);
