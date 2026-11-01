import { CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();

  const { orderId, total } = location.state || {};

  return (
    <section className="container-custom flex min-h-[70vh] items-center justify-center py-12">
      <div className="w-full max-w-2xl rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 text-center md:p-12">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
            <CheckCircle
              size={44}
              className="text-green-600 dark:text-green-400"
            />
          </div>
        </div>

        <h1 className="mb-3 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
          تم إنشاء طلبك بنجاح 🎉
        </h1>

        <p className="mb-8 text-[var(--text-secondary)]">
          شكرًا لطلبك من بيت الطحين. سيتم تجهيز طلبك قريبًا.
        </p>

        <div className="mb-8 space-y-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-5">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[var(--text-secondary)]">
              رقم الطلب
            </span>

            <span className="break-all font-semibold text-[var(--text-primary)]">
              {orderId || "غير متوفر"}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-[var(--border-color)] pt-4">
            <span className="text-[var(--text-secondary)]">
              إجمالي الطلب
            </span>

            <span className="font-bold text-[var(--accent)]">
              {total ?? "--"} $
            </span>
          </div>
        </div>

        <Link
          to="/menu"
          className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--accent-hover)]"
        >
          العودة إلى القائمة
        </Link>
      </div>
    </section>
  );
}

export default OrderSuccess;