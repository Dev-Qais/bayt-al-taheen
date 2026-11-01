import { useState } from "react";
import { registerUser } from "../../services/authService";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import FormError from "../../components/ui/FormError";

function Register() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await registerUser(formData);
      navigate("/login");
    } catch (error) {
      if (error.type === "user_already_exists") {
        setServerError("البريد الإلكتروني مستخدم بالفعل");
      } else {
        setServerError("حدث خطأ أثناء إنشاء الحساب");
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
    setServerError("");
  };

  function validateForm() {
    const errors = {
      name: "",
      email: "",
      password: "",
    };
    if (!formData.name.trim()) {
      errors.name = "الاسم مطلوب";
    }
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
    return Object.values(errors).every((error) => error === "");
  }

  return (
    <section className="container-custom py-10 md:py-14">
      <div className="mx-auto max-w-md rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 md:p-8">
        <h1 className="mb-2 text-center text-3xl font-bold text-[var(--text-primary)]">
          إنشاء حساب
        </h1>

        <p className="mb-8 text-center text-[var(--text-secondary)]">
          أنشئ حسابك لإتمام طلباتك بسهولة.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="الاسم"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="أدخل اسمك"
          />
          <FormError message={formErrors.name} />
          <Input
            label="البريد الإلكتروني"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="أدخل بريدك الإلكتروني"
          />
          <FormError message={formErrors.email} />
          <Input
            label="كلمة المرور"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="أدخل كلمة المرور"
          />
          <FormError message={formErrors.password} />
          {serverError && <FormError message={serverError} />}

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "جاري إنشاء الحساب..." : "إنشاء الحساب"}
          </Button>
          <p className="pt-2 text-center text-sm text-[var(--text-secondary)]">
            لديك حساب بالفعل؟{" "}
            <Link
              to="/login"
              className="font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
            >
              تسجيل الدخول
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
