import { IHotelItem } from "index";
import { searchDispatchQueryAction } from "..";

export const FAKE_HOTEL_LIST: IHotelItem[] = [
  { title: 'First hotel from fake api'},
  { title: 'Second hotel from fake api'},
  { title: 'Third hotel from fake api'},
];

export const fakeFetchHotels = ({ query, arrival_date, departure_date }: searchDispatchQueryAction) => (
  new Promise(resolve => setTimeout(() => resolve(FAKE_HOTEL_LIST), 1500))
);
