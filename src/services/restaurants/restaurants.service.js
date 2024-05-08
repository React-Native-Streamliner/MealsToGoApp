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

const restaurantsTransform = (result) => {
  return camelize(result);
};

restraurantsRequest()
  .then(restaurantsTransform)
  .then((result) => {
    console.log(result);
  });
