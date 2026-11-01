import { useState } from "react";
import { useProducts } from "../../../hooks/useProducts";
import Button from "../../ui/Button";
import ProductCard from "./ProductCard";
import EmptyState from "../../feedback/EmptyState";
import { useCategories } from "../../../hooks/useCategories";
import { Link } from "react-router-dom";

function ProductsShowcase() {
  const { data, isLoading, isError } = useProducts();
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const {
    data: categoriesData,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useCategories();

  if (isLoading) {
    return (
      <section className="container-custom flex min-h-[60vh] items-center justify-center">
        <p className="text-[var(--text-secondary)]">جاري تحميل المنتجات...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="container-custom flex min-h-[60vh] items-center justify-center">
        <EmptyState message="حدث خطأ أثناء تحميل المنتجات. حاول مرة أخرى." />
      </section>
    );
  }

  const categories = [{ $id: "all", name: "الكل" }, ...(categoriesData ?? [])];

  const categoryButtons = categories.map((category) => (
    <Button
      key={category.$id}
      variant={activeCategory === category.$id ? "filterActive" : "filter"}
      size="lg"
      onClick={() => {
        setActiveCategory(category.$id);
        setShowAll(false);
      }}
    >
      {category.name}
    </Button>
  ));

  const filteredProducts =
    activeCategory === "all"
      ? data
      : data?.filter((product) => product.categoryRef === activeCategory);

  const productCards = filteredProducts?.map((product, index) => (
    <div
      key={product.$id}
      className={`w-full ${
        showAll
          ? "block"
          : index >= 8
            ? "hidden"
            : index >= 4
              ? "hidden md:block"
              : "block"
      }`}
    >
      <ProductCard product={product} />
    </div>
  ));

  return (
    <section>
      <div className="container-custom py-20">
        <div className="section-heading flex flex-col items-center justify-center gap-6 text-center mb-5 py-10 pt-0">
          <span className="text-lg font-semibold  text-[var(--accent)] tracking-widest">
            مذاقٌ يُحكى
          </span>
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            من مخبزنا إلى مائدتكم
          </h2>
          <p className="text-[#666]/70">
            اختيارات طازجة تُحضّر بعناية، لترافق أجمل لحظاتكم.
          </p>
        </div>
        <div className="categories flex flex-wrap gap-3 mb-10">
          <div className="categories-list w-full flex flex-wrap justify-between items-center gap-3">
            <div className="flex flex-wrap max-sm:justify-center max-sm:gap-6 items-center gap-3">
              {categoryButtons}
            </div>
            <span className="text-lg flex place-items-center text-[var(--text-secondary)] bg-[var(--bg-primary)] border-2 border-[var(--border-color)]  px-8 py-2 rounded-full">
              {filteredProducts.length === 1
                ? "منتج واحد"
                : filteredProducts.length === 2
                  ? "منتجان"
                  : `${filteredProducts.length} منتجات`}
            </span>
            <Link to="/cart" className="text-lg text-[var(--accent)] hover:underline">
               سلة المشتريات
            </Link>
          </div>
        </div>
        {filteredProducts.length === 0 ? (
          <EmptyState message="لا توجد منتجات في هذه الفئة." />
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {productCards}
          </div>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {productCards.length <= 4 ? null : (
            <Button onClick={() => setShowAll((prev) => !prev)}>
              {showAll ? "إخفاء المنتجات" : "عرض الكل"}
            </Button>
          )}

          {!showAll && <Button to="/menu">عرض القائمة</Button>}
        </div>
      </div>
    </section>
  );
}

export default ProductsShowcase;
