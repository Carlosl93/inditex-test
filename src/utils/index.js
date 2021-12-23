const filterItems = ({ items, value }) =>
  items.filter(
    (item) =>
      item.brand.toLowerCase().includes(value.toLowerCase()) ||
      item.model.toLowerCase().includes(value.toLowerCase())
  );

export default filterItems;
