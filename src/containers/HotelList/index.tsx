import * as React from 'react';
import { connect } from 'react-redux';
import { IHotelState } from "$types";
import { HotelListLoading } from "$components/HotelListLoading";
import { HotelListItem } from "$components/HotelListItem";

const style = require('./style.scss');

export interface IHotelListProps extends IHotelState {
  query: string,
}

export const HotelList: React.FunctionComponent<IHotelListProps> = ({
  query,
  is_loading,
  list,
}) => (
  <div className={style.wrapper}>
    <div className={style.container}>
      <div className={style.badge}>This part is rendered by <u>jtb.hotels</u> package</div>
      <div className={style.badge}>Search query from jtb.search component is: {query || `- empty -`}</div>
      <div>Also, it includes some style variables like paddings and border radius from jtb.search <u>variables.scss</u></div>
      <div>It calls its own async action when you press 'Search' and also has access to the search part of the data storage.</div>
      <div>You can clone it and run as standalone app with search box for development purposes, but search form is listed as dev-dependencies and
      will not be installed when you use jtb.hotels as dependency on other projects.</div>
      <div>Api call uses fake promise with <u>1500ms</u> delay</div>
      {
        is_loading && <HotelListLoading />
      }
      {
        !is_loading && list && list.length > 0 &&
        <div className={style.list}>
          {
            list.map(({ title }) => (
              <HotelListItem
                title={title}
                key={title}
              />
            ))
          }
        </div>
      }
    </div>
  </div>
);

const mapStateToProps = ({ hotel, search: { query } }) => ({
  ...hotel,
  query,
});

export default connect(mapStateToProps)(HotelList);
