import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import FormError from "../../components/ui/FormError";
import { getCurrentUser, loginUser } from "../../services/authService";
import useAuthStore from "../../store/authStore";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

    const location = useLocation();

  const setUser = useAuthStore((state) => state.setUser);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await loginUser(formData);
      const user = await getCurrentUser();
      setUser(user);
      navigate(location.state?.from || "/");
    } catch (error) {
      console.log("ERROR TYPE:", error.type);
      if (error.type === "user_invalid_credentials") {
        setServerError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function validateForm() {
    const errors = {
      email: "",
      password: "",
    };

    if (!formData.email.trim()) {
      errors.email = "البريد الإلكتروني مطلوب";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.password.trim()) {
      errors.password = "كلمة المرور مطلوبة";
    } else if (formData.password.length < 8) {
      errors.password = "كلمة المرور يجب أن تكون على الأقل 8 أحرف";
    }

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error !== "");
  }

  return (
    <section className="container-custom py-10 md:py-14">
      <div className="mx-auto max-w-md rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 md:p-8">
        <h1 className="mb-2 text-center text-3xl font-bold text-[var(--text-primary)]">
          تسجيل الدخول
        </h1>
        <p className="mb-8 text-center text-[var(--text-secondary)]">
          سجل الدخول لاستخدام خدماتنا.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="البريد الإلكتروني"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormError message={formErrors.email} />

          <Input
            label="كلمة المرور"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <FormError message={formErrors.password} />
          <FormError message={serverError} />
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Login;
