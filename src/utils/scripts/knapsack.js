export function knapsack(priceLimit, products) {
  const n = products.length;
  const memo = {}; // Objeto para armazenar os resultados já calculados

  function knapsackHelper(limit, index) {
    if (limit === 0 || index === 0) {
      return [];
    }

    const memoKey = limit + "-" + index; // Chave para acessar o resultado da memoização
    if (memo[memoKey]) {
      return memo[memoKey]; // Retorna o resultado memoizado se estiver disponível
    }

    if (products[index - 1].price > limit) {
      return knapsackHelper(limit, index - 1);
    }

    const includeProduct = [
      products[index - 1],
      ...knapsackHelper(limit - products[index - 1].price, index - 1),
    ];
    const excludeProduct = knapsackHelper(limit, index - 1);

    const result =
      calculateTotalPrice(includeProduct) > calculateTotalPrice(excludeProduct)
        ? includeProduct
        : excludeProduct;

    memo[memoKey] = result; // Armazena o resultado na memória antes de retorná-lo
    return result;
  }

  function calculateTotalPrice(selectedProducts) {
    return selectedProducts.reduce((total, product) => total + product.price, 0);
  }

  return knapsackHelper(priceLimit, n);
}

  