import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  Children,
} from "react";
import {
  restraurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestraurantContext = createContext();

export const RestraurantContextProvider = ({ children }) => {
  return (
    <RestraurantContext.Provider value={{ restraurants: [1, 2, 3] }}>
      {children}
    </RestraurantContext.Provider>
  );
};
