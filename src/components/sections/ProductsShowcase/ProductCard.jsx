import Button from "../../ui/Button";
import useThemeStore from "../../../store/themeStore";
import useCartStore from "../../../store/cartStore";
import { useEffect, useState } from "react";
import Toast from "../../feedback/Toast";
function ProductCard({ product }) {
  const { isDark } = useThemeStore();
  const addToCart = useCartStore((state) => state.addToCart);

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showToast]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div
      className={`${isDark ? "border border-[var(--border-color)]" : ""} h-full w-full overflow-hidden rounded-2xl bg-[var(--bg-primary)] shadow-md transition-transform duration-300 hover:-translate-y-1`}
    >
      {/* Product Image */}
      <div className="relative w-full overflow-hidden">
        <img
          className="h-56 w-full object-cover sm:h-64 md:h-60 lg:h-64 hover:scale-105 transition-transform duration-300"
          src={product.imageUrl}
          alt={product.name}
        />

        {/* Category Badge */}
        <span className="absolute right-3 top-3 rounded-full bg-[var(--accent)] px-3 py-1 text-sm font-medium text-white shadow-sm">
          {product.category}
        </span>
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex flex-col   h-full">
        <h3 className="text-lg font-bold text-[var(--text-primary)] sm:text-xl">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
          {product.description}
        </p>

        <div className="my-6 flex items-center justify-between gap-3 max-sm:flex-wrap">
          <p className="text-lg font-bold text-[var(--accent)] sm:block">
            <span className="min-sm:hidden text-[22px] ml-1.5 font-bold text-[var(--text-secondary)]">السعر:</span>
            ${product.price} 
          </p>

          <Button
            onClick={() => {
              addToCart(product);
              setShowToast(true);
            }}
            size="sm"
            variant="primary"
            className="w-full sm:w-full sm:block "
          >
            أضف إلى السلة
          </Button>
        </div>
      </div>
      {showToast && <Toast message="تمت إضافة المنتج إلى السلة" />}
    </div>
  );
}

export default ProductCard;
