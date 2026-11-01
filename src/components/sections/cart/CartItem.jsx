import Button from "../../ui/Button";
import useCartStore from "../../../store/cartStore";

function CartItem({ item }) {
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  return (
    <article className="overflow-hidden  rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="h-56 w-full object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-5">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">
          {item.name}
        </h2>

        <p className="mt-2 text-lg font-bold text-[var(--accent)]"> 
          ${item.price}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              type="button"
              onClick={() => decreaseQuantity(item.$id)}
              className="text-sm text-[var(--text-secondary)]  bg-gray-400 hover:bg-gray-600 transition-colors duration-300"
            >
              −
            </Button>

            <span className="font-semibold text-[var(--text-primary)]">
              {item.quantity}
            </span>

            <Button
              type="button"
              onClick={() => increaseQuantity(item.$id)}
              className="text-sm text-[var(--text-secondary)]  bg-gray-400 hover:bg-gray-600 transition-colors duration-300"
            >
              +
            </Button>
          </div>

          <Button
            type="button"
            onClick={() => removeFromCart(item.$id)}
            className="text-sm text-[var(--text-secondary)]  bg-red-400 hover:bg-red-600 transition-colors duration-300"
          >
            إزالة
          </Button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;