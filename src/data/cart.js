const CART_KEY = "gharChiChavCart";

export const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
};

export const addToCart = (product) => {
  const cart = getCart();

  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  let updatedCart;

  if (existingProduct) {
    updatedCart = cart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  } else {
    updatedCart = [
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ];
  }

  localStorage.setItem(
    CART_KEY,
    JSON.stringify(updatedCart)
  );

  window.dispatchEvent(new Event("cartUpdated"));
};

export const updateCartQuantity = (id, quantity) => {
  if (quantity <= 0) {
    removeFromCart(id);
    return;
  }

  const cart = getCart();

  const updatedCart = cart.map((item) =>
    item.id === id
      ? {
          ...item,
          quantity,
        }
      : item
  );

  localStorage.setItem(
    CART_KEY,
    JSON.stringify(updatedCart)
  );

  window.dispatchEvent(new Event("cartUpdated"));
};

export const removeFromCart = (id) => {
  const cart = getCart();

  const updatedCart = cart.filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    CART_KEY,
    JSON.stringify(updatedCart)
  );

  window.dispatchEvent(new Event("cartUpdated"));
};

export const getCartCount = () => {
  return getCart().reduce(
    (total, item) => total + item.quantity,
    0
  );
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event("cartUpdated"));
};