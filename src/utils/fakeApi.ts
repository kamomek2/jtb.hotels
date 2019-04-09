import { IFlightItem } from "../redux/flight/reducer";
import { searchDispatchQueryAction } from "..";

export const FAKE_FLIGHT_LIST: IFlightItem[] = [
  { title: 'First flight from fake api'},
  { title: 'Second flight from fake api'},
  { title: 'Third flight from fake api'},
];

export const fakeFetchFlights = ({ query, arrival_date, departure_date }: searchDispatchQueryAction) => (
  new Promise(resolve => setTimeout(() => resolve(FAKE_FLIGHT_LIST), 1000))
);
