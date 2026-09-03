const CART_KEY = "gharChiChavCart";

export const getCart = () => {
  try {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Cart read error:", error);
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
            quantity: Number(item.quantity || 0) + 1,
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
  const newQuantity = Number(quantity);

  if (newQuantity <= 0) {
    removeFromCart(id);
    return;
  }

  const cart = getCart();

  const updatedCart = cart.map((item) =>
    item.id === id
      ? {
          ...item,
          quantity: newQuantity,
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
  const cart = getCart();

  return cart.reduce(
    (total, item) =>
      total + Number(item.quantity || 0),
    0
  );
};

export const getCartTotal = () => {
  const cart = getCart();

  return cart.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
        Number(item.quantity || 0),
    0
  );
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);

  window.dispatchEvent(new Event("cartUpdated"));
};