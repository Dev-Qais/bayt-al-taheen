import useCartStore from "../../../store/cartStore";
import Button from "../../ui/Button";
import useAuthStore from "../../../store/authStore";
function CartSummary({ showButton = true }) {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <section className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6">
      <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
        ملخص الطلب
      </h2>

      <div>
        <div className="grid grid-cols-[1fr_auto_auto] gap-6 border-b border-[var(--border-color)] pb-3 text-sm font-bold text-[var(--text-secondary)]">
          <span>المنتج</span>
          <span>الكمية</span>
          <span>السعر</span>
        </div>

        {cartItems.map((item) => (
          <div
            key={item.$id}
            className="grid grid-cols-[1fr_auto_auto] gap-6 border-b border-[var(--border-color)] py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.imageUrl}
                className="h-[60px] w-[60px] rounded-full object-cover"
                alt={item.name}
              />

              <span>{item.name}</span>
            </div>

            <span>{item.quantity}</span>

            <span>{item.price * item.quantity}$</span>
          </div>
        ))}

        <div className="mt-4 flex items-center justify-between pt-4 text-xl font-bold text-[var(--text-primary)]">
          <span>المجموع</span>
          <span className="text-[var(--accent)]">{totalPrice}$</span>
        </div>
        {showButton && (
          <div className="mt-6">
            {isAuthenticated && (
            <Button to='\checkout' size="lg" className="w-full" onClick={() => {}}>
              تأكيد الطلب
            </Button>
            )}
            {!isAuthenticated && (
            <Button size="lg" className="w-full" onClick={() => {}}>
              تسجيل الدخول للطلب
            </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default CartSummary;
