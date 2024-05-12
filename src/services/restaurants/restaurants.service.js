import { mockImages, mocks } from "./mock";
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
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restraurant) => {
    restraurant.photos = restraurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restraurant,
      isOpenNow:
        restraurant.opening_hours && restraurant.opening_hours.open_now,
      isClosedTemporary: restraurant.businessStatus === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
