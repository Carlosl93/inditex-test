const filterItems = ({ items, value }) =>
  items.filter(
    (item) =>
      item.brand.toLowerCase().includes(value) ||
      item.model.toLowerCase().includes(value)
  );

export default filterItems;
