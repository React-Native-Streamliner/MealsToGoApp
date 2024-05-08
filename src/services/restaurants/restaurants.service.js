import { mocks } from "./mock";
import camelize from "camelize";

export const restraurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restraurant) => {
    return {
      ...restraurant,
      isOpenNow:
        restraurant.opening_hours && restraurant.opening_hours.open_now,
      isClosedTemporary: restraurant.businessStatus === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
