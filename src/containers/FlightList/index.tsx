import * as React from 'react';
import { IStore } from "../../redux/store";
import { connect } from 'react-redux';
import { IFlightState } from "../../redux/flight/reducer";
import { ISearchState } from 'jtb.search';
import { FlightListLoading } from "../../components/FlightListLoading";
import { FlightListItem } from "../../components/FlightListItem";

const style = require('./style.scss');

export interface IFlightListProps extends IFlightState{
  query: ISearchState['query'],
}

export const FlightList: React.FunctionComponent<IFlightListProps> = ({
  query,
  is_loading,
  list,
}) => (
  <div className={style.wrapper}>
    <div className={style.container}>
      <div className={style.badge}>This part is rendered by <u>jtb.flights</u> package</div>
      <div>Also, it includes some style variables like paddings and border radius from jtb.search</div>
      <div>Search query from jtb.search component is: {query || `- empty -`}</div>
      <div>
        {
          is_loading && <FlightListLoading />
        }
        {
          !is_loading &&
          list.map(({ title }) => (
            <FlightListItem
              title={title}
              key={title}
            />
          ))
        }
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ flight, search: { query } }: IStore) => ({
  ...flight,
  query,
});

export default connect(mapStateToProps)(FlightList);
