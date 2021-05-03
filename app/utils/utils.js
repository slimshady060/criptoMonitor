const sortAsc = (field) => (a, b) => {
  if (a.prices[field] < b.prices[field]) {
    return -1;
  }
  if (a.prices[field] > b.prices[field]) {
    return 1;
  }
  return 0;
};

const sortDesc = (field) => (a, b) => {
  if (a.prices[field] > b.prices[field]) {
    return -1;
  }
  if (a.prices[field] < b.prices[field]) {
    return 1;
  }
  return 0;
};

module.exports = {
  sortAsc,
  sortDesc,
};
