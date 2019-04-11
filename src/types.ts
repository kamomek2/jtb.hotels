export interface IHotelItem {
  title: string,
}

export interface IHotelState {
  is_loading: boolean,
  list: IHotelItem[],
}
