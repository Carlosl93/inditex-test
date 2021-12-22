import client, { CLIENT_URLS } from "./client";

export const fetchItems = () => client.any(CLIENT_URLS.GET_ITEMS);

export const fetchSingleItem = ({ id }) =>
  client.any(CLIENT_URLS.GET_SINGLE_ITEM({ id }));

export const fetchPostCart = ({ id, colorCode, storageCode }) =>
  client.any(CLIENT_URLS.POST_CART({ id, colorCode, storageCode }));
