import { Award, Heart, Leaf, Users } from "lucide-react";
import { Link } from "react-router-dom";
import aboutData from "../../data/about";

const iconMap = {
  leaf: Leaf,
  heart: Heart,
  award: Award,
  users: Users,
};

function About() {
  const { hero, story, values, cta } = aboutData;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--bg-secondary)] py-20 md:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent)]">
              {hero.badge}
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-6xl">
              {hero.title}{" "}
              <span className="text-[var(--accent)]">
                {hero.highlightedTitle}
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container-custom py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-3 block text-sm font-semibold text-[var(--accent)]">
              {story.badge}
            </span>

            <h2 className="mb-5 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              {story.title}
            </h2>

            <div className="space-y-4 leading-8 text-[var(--text-secondary)]">
              {story.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src={story.image}
              alt={story.imageAlt}
              className="aspect-[4/3] h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--bg-secondary)] py-16 md:py-24">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 block text-sm font-semibold text-[var(--accent)]">
              {values.badge}
            </span>

            <h2 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              {values.title}
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-6 text-center"
                >
                  <Icon
                    size={34}
                    className="mx-auto mb-4 text-[var(--accent)]"
                  />

                  <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom py-16 md:py-24">
        <div className="overflow-hidden rounded-3xl bg-[var(--accent)] px-6 py-12 text-center text-white md:px-12 md:py-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {cta.title}
          </h2>

          <p className="mx-auto mb-7 max-w-xl leading-7 text-white/85">
            {cta.description}
          </p>

          <Link
            to={cta.buttonLink}
            className="inline-flex rounded-xl bg-white px-7 py-3 font-bold text-[var(--accent)] transition hover:bg-white/90"
          >
            {cta.buttonText}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;