import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import Button from "../../ui/Button";
import FormError from "../../ui/FormError";
import useCartStore from "../../../store/cartStore";
import { createOrder } from "../../../services/orderService";

function CheckoutForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState({
    customerName: "",
    phone: "",
    address: "",
    notes: "",
  });

  const cartItems = useCartStore((state) => state.cartItems);
  const clearCart = useCartStore((state) => state.clearCart);

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = {
      customerName: !formData.customerName.trim() ? "الاسم مطلوب" : "",
      phone: !formData.phone.trim() ? "رقم الهاتف مطلوب" : "",
      address: !formData.address.trim() ? "عنوان التوصيل مطلوب" : "",
    };

    setFormErrors(validationErrors);

    if (Object.values(validationErrors).some((error) => error)) {
      return;
    }

    const orderItems = cartItems.map((item) => ({
      productId: item.$id,
      quantity: item.quantity,
    }));

    const orderData = {
      ...formData,
      orderItems,
    };

    const result = await createOrder(orderData);

    console.log("Function result:", result);

    const response = JSON.parse(result.responseBody);

    if (response.success) {
      clearCart();

      navigate("/order-success", {
        state: {
          orderId: response.orderId,
          total: response.total,
        },
      });
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6"
    >
      <Input
        label="الاسم"
        placeholder="أدخل اسمك"
        name="customerName"
        value={formData.customerName}
        onChange={handleChange}
      />

      <FormError message={formErrors.customerName} />

      <Input
        label="رقم الهاتف"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="أدخل رقم هاتفك"
      />

      <FormError message={formErrors.phone} />

      <Input
        label="عنوان التوصيل"
        placeholder="أدخل عنوان التوصيل"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />

      <FormError message={formErrors.address} />

      <Textarea
        label="ملاحظات إضافية"
        placeholder="أدخل أي ملاحظات على الطلب (اختياري)"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
      />

      <Button type="submit" size="lg" className="mt-2 w-full">
        إرسال الطلب
      </Button>
    </form>
  );
}

export default CheckoutForm;