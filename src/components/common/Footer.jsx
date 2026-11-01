import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import siteInfo from "../../data/siteInfo";
import { Link } from "react-router-dom";

function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#1a120f] text-[#f5f0eb]">
      <div className="container-custom py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 md:text-right lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--accent)] sm:text-4xl">
              {siteInfo.name}
            </h2>

            <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-[#c7bbb3] md:mx-0">
              {siteInfo.description}
              <br />
              {siteInfo.secondaryDescription}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold">روابط الموقع</h3>

            <nav className="mt-4 flex flex-col items-center gap-3 text-sm md:items-start">
              <Link
                to="/"
                className="text-[#c7bbb3] transition-colors hover:text-[var(--accent)]"
              >
                الرئيسية
              </Link>


              <Link
                to="/about"
                className="text-[#c7bbb3] transition-colors hover:text-[var(--accent)]"
              >
                من نحن
              </Link>

              <Link
                to="/menu"
                className="text-[#c7bbb3] transition-colors hover:text-[var(--accent)]"
              >
                القائمة
              </Link>

              <Link
                to="/contact"
                className="text-[#c7bbb3] transition-colors hover:text-[var(--accent)]"
              >
                تواصل معنا
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">تواصل معنا</h3>

            <div className="mt-4 flex flex-col items-center gap-4 text-sm md:items-start">
              <a
                href={`tel:${siteInfo.contact.phone}`}
                className="flex items-center gap-3 text-[#c7bbb3] transition-colors hover:text-[var(--accent)]"
              >
                <Phone size={18} />
                <span dir="ltr">{siteInfo.contact.phone}</span>
              </a>

              <a
                href={`mailto:${siteInfo.contact.email}`}
                className="flex items-center gap-3 text-[#c7bbb3] transition-colors hover:text-[var(--accent)]"
              >
                <Mail size={18} />
                <span>{siteInfo.contact.email}</span>
              </a>

              <div className="flex items-start gap-3 text-[#c7bbb3]">
                <MapPin className="mt-1 shrink-0" size={18} />

                <span>
                  {siteInfo.contact.address}
                  <br />
                  {siteInfo.name}
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold">تابعنا</h3>

            <div className="mt-5 flex justify-center gap-3 md:justify-start">
              <a
                href={siteInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href={siteInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={17} />
              </a>
            </div>

            <p className="mt-5 text-sm leading-6 text-[#8f817a]">
              تابعوا جديدنا واكتشفوا كل ما نخبزه لكم.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#3a2b26]" />

          <span className="text-lg text-[var(--accent)]">✦</span>

          <div className="h-px flex-1 bg-[#3a2b26]" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-right">
          <div className="text-sm text-[#8f817a]">
            <p>© {new Date().getFullYear()} {siteInfo.name}</p>
            <p className="mt-1">جميع الحقوق محفوظة.</p>
          </div>

          <button
            type="button"
            onClick={handleScrollTop}
            aria-label="العودة إلى أعلى الصفحة"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3a2b26] text-[#c7bbb3] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
          >
            <ArrowUp size={19} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
