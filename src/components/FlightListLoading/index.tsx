import * as React from 'react';

const style = require('./style.scss');

export const FlightListLoading: React.FunctionComponent<{}> = () => (
  <div className={style.container}>
    Loading
  </div>
);
