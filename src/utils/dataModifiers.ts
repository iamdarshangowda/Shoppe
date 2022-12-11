export const debounce = (fn: Function, ms = 500) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const SearchProducts = (productList: any, searchKeyword: string) => {
  return productList.filter((item: any) =>
    item.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );
};

export const FilterProductsByCategory = (
  productList: any,
  selectedCategory: string
) => {
  const products = [...productList];
  return products.filter((item: any) => item.category == selectedCategory);
};

export const PricerWithCommas = (price: any) => {
  return price
    ? price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : price;
};
