import { Link } from "react-router-dom";
import { Package, ShoppingBag } from "lucide-react";
import useOrders from "../../hooks/useOrders";

function getStatusLabel(status) {
  const statuses = {
    Pending: "قيد الانتظار",
    Confirmed: "تم تأكيد الطلب",
    Preparing: "قيد التجهيز",
    Ready: "جاهز للاستلام",
    "Assigned to Delivery": "تم إسناده للتوصيل",
    "Out for Delivery": "خرج للتوصيل",
    Delivered: "تم التوصيل",
    Cancelled: "ملغي",
  };

  return statuses[status] || status;
}

function getStatusClasses(status) {
  const styles = {
    Pending:
      "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    Confirmed:
      "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
    Preparing:
      "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
    Ready:
      "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
    "Assigned to Delivery":
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
    "Out for Delivery":
      "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
    Delivered:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    Cancelled:
      "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
  };

  return (
    styles[status] ||
    "bg-[var(--accent)]/10 text-[var(--accent)]"
  );
}

function Orders() {
  const {
    data: orders = [],
    isLoading,
    isError,
    error,
  } = useOrders();

  if (isLoading) {
    return (
      <section className="container-custom py-12">
        <div className="flex min-h-[50vh] items-center justify-center">
          <p className="text-lg text-[var(--text-secondary)]">
            جاري تحميل طلباتك...
          </p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="container-custom py-12">
        <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
            <Package
              className="text-red-600 dark:text-red-400"
              size={32}
            />
          </div>

          <h1 className="mb-2 text-2xl font-bold text-[var(--text-primary)]">
            تعذر تحميل الطلبات
          </h1>

          <p className="mb-6 text-[var(--text-secondary)]">
            {error?.message || "حدث خطأ أثناء جلب طلباتك."}
          </p>

          <Link
            to="/menu"
            className="rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--accent-hover)]"
          >
            العودة إلى القائمة
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container-custom py-10 md:py-14">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
          طلباتي
        </h1>

        <p className="text-[var(--text-secondary)]">
          تابع طلباتك السابقة وتفاصيلها وحالتها.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="flex min-h-[45vh] flex-col items-center justify-center rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-6 py-12 text-center">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--bg-primary)]">
            <ShoppingBag
              size={40}
              className="text-[var(--accent)]"
            />
          </div>

          <h2 className="mb-2 text-2xl font-bold text-[var(--text-primary)]">
            لا توجد طلبات حتى الآن
          </h2>

          <p className="mb-6 max-w-md text-[var(--text-secondary)]">
            عندما تقوم بإنشاء طلب، ستظهر تفاصيله هنا.
          </p>

          <Link
            to="/menu"
            className="rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--accent-hover)]"
          >
            تصفح القائمة
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {orders.map((order) => (
            <article
              key={order.$id}
              className="overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
            >
              {/* Header */}
              <div className="border-b border-[var(--border-color)] p-5 md:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="mb-1 text-sm text-[var(--text-secondary)]">
                      رقم الطلب
                    </p>

                    <p className="break-all font-semibold text-[var(--text-primary)]">
                      #{order.$id}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-4 py-2 text-sm font-semibold ${getStatusClasses(
                      order.status
                    )}`}
                  >
                    {getStatusLabel(order.status)}
                  </span>
                </div>
              </div>

              {/* Order information */}
              <div className="grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-4 md:p-6">
                <div>
                  <p className="mb-1 text-sm text-[var(--text-secondary)]">
                    الاسم
                  </p>

                  <p className="font-semibold text-[var(--text-primary)]">
                    {order.customerName}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-sm text-[var(--text-secondary)]">
                    رقم الهاتف
                  </p>

                  <p className="font-semibold text-[var(--text-primary)]">
                    {order.phone}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-sm text-[var(--text-secondary)]">
                    تاريخ الطلب
                  </p>

                  <p className="font-semibold text-[var(--text-primary)]">
                    {new Date(order.$createdAt).toLocaleDateString(
                      "ar-SY"
                    )}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-sm text-[var(--text-secondary)]">
                    الإجمالي
                  </p>

                  <p className="text-xl font-bold text-[var(--accent)]">
                    ${order.total} 
                  </p>
                </div>
              </div>

              {/* Products */}
              <div className="border-t border-[var(--border-color)] p-5 md:p-6">
                <h2 className="mb-4 text-lg font-bold text-[var(--text-primary)]">
                  المنتجات
                </h2>

                <div className="overflow-hidden rounded-2xl border border-[var(--border-color)]">
                  {order.items?.length > 0 ? (
                    <div className="divide-y divide-[var(--border-color)]">
                      {order.items.map((item) => (
                        <div
                          key={item.$id}
                          className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div>
                            <p className="font-semibold text-[var(--text-primary)]">
                              {item.productName}
                            </p>

                            <p className="mt-1 text-sm text-[var(--text-secondary)]">
                              الكمية: {item.quantity}
                            </p>
                          </div>

                          <div className="text-right sm:text-left">
                            <p className="font-bold text-[var(--accent)]">
                              ${item.price * item.quantity}
                            </p>

                            <p className="mt-1 text-xs text-[var(--text-secondary)]">
                              ${item.price} × {item.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-5 text-center text-sm text-[var(--text-secondary)]">
                      لا توجد تفاصيل للمنتجات.
                    </div>
                  )}
                </div>
              </div>

              {/* Delivery */}
              <div className="grid gap-5 border-t border-[var(--border-color)] p-5 md:grid-cols-2 md:p-6">
                <div>
                  <p className="mb-1 text-sm text-[var(--text-secondary)]">
                    عنوان التوصيل
                  </p>

                  <p className="font-medium text-[var(--text-primary)]">
                    {order.address}
                  </p>
                </div>

                {order.notes && (
                  <div>
                    <p className="mb-1 text-sm text-[var(--text-secondary)]">
                      ملاحظات
                    </p>

                    <p className="font-medium text-[var(--text-primary)]">
                      {order.notes}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Orders;