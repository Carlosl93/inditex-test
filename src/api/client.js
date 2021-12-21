import { create } from "apisauce";

// define the api
const client = create({
  baseURL: "https://front-test-api.herokuapp.com",
});

export const CLIENT_URLS = {
  GET_ITEMS: {
    method: "GET",
    url: "/api/product",
  },
  GET_SINGLE_ITEM: ({ id }) => ({
    method: "GET",
    url: `/api/product/${id}`,
  }),
  POST_CART: ({ id, colorCode, storageCode }) => ({
    method: "POST",
    url: "/api/cart",
    data: {
      id,
      colorCode,
      storageCode,
    },
  }),
};

export default client;
