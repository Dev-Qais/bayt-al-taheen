import useCartStore from "../../store/cartStore";
import CartItem from "../../components/sections/cart/CartItem";
import CartSummary from "../../components/sections/cart/CartSummary";
import { FaCartShopping } from "react-icons/fa6";


function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <section className="container-custom min-h-[90vh] py-12 flex  flex-col">
      <h1 className=" col-span-full flex items-center py-5 justify-center text-2xl font-bold  border rounded-2xl border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] mb-6">
          سلة المشتريات <FaCartShopping size="35" className="mr-6 shrink-0" />
      </h1>
      <div className="col-span-full my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cartItems.map((item) => (
          <CartItem key={item.$id} item={item} />
        ))}
      </div>
      <div className="col-span-full mt-6 mb-10  ">
        <CartSummary cartItems={cartItems} />
      </div>
    </section>
  );
}

export default Cart;
