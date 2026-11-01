import { useState } from "react";
import ProductCard from "../../components/sections/ProductsShowcase/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import Button from "../../components/ui/Button";
import EmptyState from "../../components/feedback/EmptyState";
function Menu() {
  const { data: products, isLoading, isError } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const filteredProducts =
    selectedCategory === "الكل"
      ? products
      : products?.filter((product) => product.category === selectedCategory);

  if (isLoading) {
    return (
      <section className="container-custom flex min-h-[60vh] items-center justify-center">
        <p className="text-base text-3xl font-bold text-[var(--text-secondary)]">
          جاري تحميل المنتجات...
        </p>
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

  const categories = [
    ...new Set(products?.map((product) => product.category) || []),
  ];
  const categoriesWithAll = ["الكل", ...categories];
  const categoryList = categoriesWithAll.map((category) => (
    <Button
      key={category}
      variant={selectedCategory === category ? "filterActive" : "filter"}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </Button>
  ));

  return (
    <section className="container-custom flex min-h-[90vh] flex-col items-center py-12">
      <div className="w-full text-center">
        <p className="text-sm font-semibold tracking-widest text-[var(--accent)]">
          المخبوزات التي نحبها
        </p>

        <h1 className="mt-3 text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
          قائمة الطعام
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
          نخبز يوميًا بعناية لتختار من أجمل المخبوزات والحلويات الطازجة.
        </p>
      </div>
      <div className="mt-8 w-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3">
        <div className="mb-3 flex items-center justify-between px-2">
          <span className="text-sm font-semibold text-[var(--text-primary)]">
            تصفية المنتجات
          </span>

          <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-5 py-2 text-sm font-medium text-[var(--text-secondary)]">
            {filteredProducts.length === 1
              ? "منتج واحد"
              : filteredProducts.length === 2
                ? "منتجان"
                : `${filteredProducts.length} منتجات`}
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categoryList}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <EmptyState
          message={
            selectedCategory === "الكل"
              ? "لا توجد منتجات متاحة حاليًا."
              : `لا توجد منتجات في الفئة: ${selectedCategory}`
          }
        />
      ) : (
        <div className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.$id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Menu;
