import { mockse } from "./mock";

export const restraurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mock[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

restraurantsRequest().then((result) => {
  console.log(result);
});
