import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isAuthLoading: true, // Add isAuthLoading state to track loading status

  setUser: (user) =>
    set({
      user,
      isAuthenticated: true,
      isAuthLoading: false, // Set isAuthenticated to true when user is set
    }),
    finishAuthLoading: () =>
    set({
      isAuthLoading: false, // Set isAuthLoading to false when auth loading is finished
    }),
    logout: () =>
    set({
      user: null,
      isAuthenticated: false,
      isAuthLoading: false, // Set isAuthenticated to false when user logs out
    }),
}));

export default useAuthStore;