import client, { CLIENT_URLS } from "./client";

export const fetchItems = () => client(CLIENT_URLS.GET_ITEMS);

export const fetchSingleItem = ({ id }) =>
  client(CLIENT_URLS.GET_SINGLE_ITEM({ id }));

export const fetchPostCart = ({ id, colorCode, storageCode }) =>
  client(CLIENT_URLS.POST_CART({ id, colorCode, storageCode }));
