import { NavLink } from "react-router-dom";
import navigation from "../../data/navigation";
import Button from "../ui/Button";
import Logo from "./Logo";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useThemeStore from "../../store/themeStore";
import CartButton from "./CartButton";
import useAuthStore from "../../store/authStore";
import { logoutUser } from "../../services/authService";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();
  const logout = useAuthStore((state) => state.logout);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <nav
      className={`fixed h-20 top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/95 backdrop-blur-sm ${isDark ? "border-b border-b-white/10" : "border-b border-b-[var(--accent)]"} `}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <Logo />
        <ul className="hidden items-center gap-8 lg:flex ">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-primary)]/70 hover:text-[var(--accent)]"
                  }`
                }
                to={item.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="action-aria flex items-center gap-3 shrink-0">
          {isAuthenticated ? (
            <Button
              size="sm"
              className="hidden lg:inline-flex"
              onClick={async () => {
                try {
                  await logoutUser();
                  logout();
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              تسجيل الخروج
            </Button>
          ) : (
            <Button to="/login" size="sm" className="hidden lg:inline-flex">
              تسجيل الدخول
            </Button>
          )}
          <CartButton count={0} />
          {/* زر الثيم */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden"
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full mx-auto z-50 border-t border-[var(--border-color)] bg-[var(--bg-primary)] px-6 py-6 shadow-lg lg:hidden"
            >
              <ul className="flex  flex-col gap-5 text-right">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block transition-colors duration-200 ${
                          isActive
                            ? "text-[var(--accent)]"
                            : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
