import { useProducts } from "../../../hooks/useProducts";
import Button from "../../ui/Button";
import EmptyState from "../../feedback/EmptyState";
import breakfastData from "../../../data/breakfast";

function Breakfast() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <section className="container-custom flex min-h-[60vh] items-center justify-center">
        <p className="text-3xl text-[var(--text-secondary)]">
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


  const breakfastItems = data?.filter(
    (product) => product.category === "الفطور",
  );
  const breakfastCards = breakfastItems?.map((item) => (
    <div
      key={item.$id}
      className="group flex gap-4 border-b border-[#d9cec5] py-5 first:pt-0 last:border-b-0 last:pb-0"
    >
      <span className="pt-0 flex items-center justify-center font-serif text-xs tracking-widest text-[#b97a57]/60">
        {item.imageUrl && (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-20 w-20 rounded-full hover:scale-105 hover:rotate-5 transition-transform duration-300 object-cover"
          />
        )}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3">
          <h4 className="font-['Amiri'] text-xl font-bold text-[#2d1e18] transition-colors duration-300 group-hover:text-[#b97a57] sm:text-2xl">
            {item.name}
          </h4>

          <div className="hidden h-px flex-1 bg-[#d9cec5] sm:block" />

          <span className="shrink-0 text-base font-semibold text-[#b97a57]">
            ${item.price}
          </span>
        </div>

        <p className="mt-1 text-xs leading-6 text-[#6e5d55] sm:text-sm">
          {item.description}
        </p>
      </div>
    </div>
  ));
  return (
    <section className="relative  overflow-hidden bg-[#1b120f] py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:55px_55px]" />

        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#b97a57]/10 blur-[100px]" />

        <div className="absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#b97a57]/10 blur-[100px]" />
      </div>

      {/* Decorative circles */}
      <div className="pointer-events-none absolute left-8 top-12 hidden h-40 w-40 rounded-full border border-[#b97a57]/20 lg:block" />
      <div className="pointer-events-none absolute left-16 top-20 hidden h-24 w-24 rounded-full border border-[#b97a57]/10 lg:block" />

      <div className="container-custom relative">
        {/* Section intro */}
        <div className="mb-14 text-center text-white md:mb-20">
          <span className="mb-4 block text-sm font-medium tracking-[0.4em] text-[#d49673]">
            صباحٌ يبدأ من الفرن
          </span>

          <h2 className="font-['Amiri'] text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            فطور شهي
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#b97a57]/50" />
            <span className="h-2 w-2 rotate-45 bg-[#b97a57]" />
            <span className="h-px w-12 bg-[#b97a57]/50" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            من رائحة الخبز الخارج من الفرن إلى أول لقمة في صباحكم، نصنع فطورًا
            يحمل روح بيت الطحين.
          </p>
        </div>

        {/* Main composition */}
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center lg:grid-cols-[1.15fr_0.85fr]">
            {/* Image — LEFT */}
            <div className="relative z-10">
              <div className="relative h-[430px] overflow-hidden sm:h-[520px] lg:h-[570px]">
                <img
                  src={breakfastData.heroImage.src}
                  alt={breakfastData.heroImage.alt}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1b120f]/70 via-transparent to-[#1b120f]/10" />

                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

                <div className="absolute bottom-7 left-7 border border-white/20 bg-black/20 px-5 py-3 backdrop-blur-md">
                  <p className="text-[10px] tracking-[0.35em] text-white/60">
                    BAKED WITH LOVE
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    طازج من الفرن
                  </p>
                </div>
              </div>
            </div>

            {/* Menu — RIGHT */}
            <div className="relative z-20  min-sm:-ml-6  lg:ml-10">
              <div className="relative bg-[#f8f2eb] px-6 py-9 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12 md:px-12 md:py-14">
                {/* Inner border */}
                <div className="pointer-events-none absolute inset-4 border border-[#b97a57]/20 sm:inset-6" />

                {/* Corner ornaments */}
                <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-[#b97a57]/50 sm:right-6 sm:top-6" />

                <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-[#b97a57]/50 sm:bottom-6 sm:left-6" />

                <div className="relative px-3 sm:px-5">
                  {/* Heading */}
                  <div className="mb-9 text-right">
                    <span className="text-xs font-semibold tracking-[0.3em] text-[#b97a57]">
                      BREAKFAST MENU
                    </span>

                    <h3 className="mt-2 font-['Amiri'] text-3xl font-bold text-[#2d1e18] sm:text-4xl">
                      من مخبزنا إلى مائدتكم
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-[#6e5d55]">
                      اختيارات صباحية محضّرة بعناية، لتمنح يومكم بداية دافئة
                      ولذيذة.
                    </p>
                  </div>

                  {/* Items */}
                  {breakfastItems.length === 0 ? (
                    <EmptyState message="لا توجد منتجات فطور متاحة حاليًا." />
                  ) : (
                    <div className="grid grid-cols-1 gap-4">
                      {breakfastCards}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[#d9cec5] pt-7">
                    <div>
                      <span className="block text-[10px] tracking-[0.25em] text-[#8c7b72]">
                        EVERY MORNING
                      </span>

                      <span className="mt-1 block text-sm font-semibold text-[#2d1e18]">
                        نخبز لكم كل يوم
                      </span>
                    </div>

                    <Button to="/menu" size="lg">
                      اكتشف القائمة
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex items-center justify-center gap-4 text-[#b97a57]/50">
          <span className="h-px w-16 bg-[#b97a57]/30" />
          <span className="font-['Amiri'] text-sm">بيت الطحين</span>
          <span className="h-px w-16 bg-[#b97a57]/30" />
        </div>
      </div>
    </section>
  );
}

export default Breakfast;
