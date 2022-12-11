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

export const CapitalizeFirstLetter = (str: string) => {
  const words = str.split(" ");

  let ans = words
    .map((word: any) => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(" ");

  return ans;
};

export const getUniqueValuesFromArrayOfObjects = (tempArr: any) => {
  var resArr: any = [];
  tempArr.filter(function (item: any) {
    var i = resArr.findIndex(
      (x: any) =>
        x.name == item.name && x.date == item.date && x.amt == item.amt
    );
    if (i <= -1) {
      resArr.push(item);
    }
    return null;
  });
};
