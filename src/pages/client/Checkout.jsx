import CheckoutForm from "../../components/client/checkout/CheckoutForm";
import CartSummary from "../../components/sections/cart/CartSummary";

function Checkout() {
  return (
    <section className="container-custom py-10 md:py-14">
      <h1 className="mb-2 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
        تأكيد الطلب
      </h1>
      <p className="mb-8 text-[var(--text-secondary)]">
        أدخل بيانات التوصيل لإتمام طلبك.
      </p>

      <div className="grid items-start gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <CheckoutForm />
        <CartSummary showButton={false} />
      </div>
    </section>
  );
}

export default Checkout;
