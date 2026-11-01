import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
 persist(
    (set) => ({
        
  cartItems: [],

  addToCart: (product) =>
  set((state) => {
    const existingItem = state.cartItems.find(
      (item) => item.$id === product.$id
    );

    if(existingItem){
     return {
      cartItems: state.cartItems.map((item) =>
        item.$id === product.$id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    };
    } else {
        return {
          cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        };
    }

    
  }),

  increaseQuantity: (productId) =>
  set((state) => ({
    cartItems: state.cartItems.map((item) =>
      item.$id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ),
  })),

  decreaseQuantity: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.$id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item.$id === productId && item.quantity === 1
          ? null
          : item
      ).filter(Boolean),
      
    })),

  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.$id !== productId),
    })),
    
    clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "bayt-al-taheen-cart",
    }
  )

);

export default useCartStore;