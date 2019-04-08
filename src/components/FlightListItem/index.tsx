import * as React from 'react';
import { IFlightItem } from "../../redux/flight/reducer";

const style = require('./style.scss');

export interface IFlightListItemProps {
  title: IFlightItem['title'],
}

export const FlightListItem: React.FunctionComponent<IFlightListItemProps> = ({ title }) => (
  <div className={style.row}>
    {title}
  </div>
);
