import { createContext } from "react";
import { Venue } from "../redux/reducers/venues/types";

export const VenuesContext = createContext<Venue[] | []>([])