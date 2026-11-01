import { ShoppingCart } from "lucide-react";
import Button from "../ui/Button";
import useCartStore from "../../store/cartStore";

function CartButton() {
  const cartCount = useCartStore((state) =>
  state.cartItems.reduce((total, item) => total + item.quantity, 0)
);

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      to="/cart"
      aria-label="السلة"
      
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      <ShoppingCart size={20} />

      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-xs text-white">
        {cartCount}
      </span>
    </Button>
  );
}

export default CartButton;