import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import useThemeStore from "./store/themeStore";
import useAuthStore from "./store/authStore";
import { getCurrentUser } from "./services/authService";

function App() {
  const { isDark } = useThemeStore();
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const finishAuthLoading = useAuthStore((state) => state.finishAuthLoading);
  useEffect(() => {
    async function checkCurrentUser() {
      try {
        const user = await getCurrentUser();

        setUser(user);
      } catch (error) {
        // Handle error if needed
      } finally {
        finishAuthLoading();
      }
    }

    checkCurrentUser();
  }, [setUser]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="App ">
      <AppRoutes />
    </div>
  );
}

export default App;
