export function knapsack(priceLimit, products) {
    const n = products.length;
  
    function knapsackHelper(limit, index) {
      if (limit === 0 || index === 0) {
        return [];
      }
  
      if (products[index - 1].price > limit) {
        return knapsackHelper(limit, index - 1);
      }
  
      const includeProduct = [products[index - 1], ...knapsackHelper(limit - products[index - 1].price, index - 1)];
      const excludeProduct = knapsackHelper(limit, index - 1);
  
      if (calculateTotalPrice(includeProduct) > calculateTotalPrice(excludeProduct)) {
        return includeProduct;
      } else {
        return excludeProduct;
      }
    }
  
    function calculateTotalPrice(selectedProducts) {
      return selectedProducts.reduce((total, product) => total + product.price, 0);
    }
  
    return knapsackHelper(priceLimit, n);
  }
  