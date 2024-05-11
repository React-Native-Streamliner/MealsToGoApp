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
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restraurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((e) => {
          setIsLoading(false);
          setError(e);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  console.log(restaurants);

  return (
    <RestraurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestraurantContext.Provider>
  );
};
