import { create } from "apisauce";

// define the api
const client = create({
  baseURL: "https://front-test-api.herokuapp.com/api",
});

export const CLIENT_URLS = {
  GET_ITEMS: {
    method: "GET",
    url: "/product",
  },
  GET_SINGLE_ITEM: ({ id }) => ({
    method: "GET",
    url: `/product/${id}`,
  }),
  POST_CART: ({ id, colorCode, storageCode }) => ({
    method: "POST",
    url: "/cart",
    data: {
      id,
      colorCode,
      storageCode,
    },
  }),
};

export default client;
