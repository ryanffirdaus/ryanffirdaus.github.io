(function () {
  "use strict";

  // Determine if we are on a sub-page (e.g. /projects/...)
  const isSubPage = window.location.pathname.split("/").filter(Boolean).length > 1;
  const home = isSubPage ? "../index.html" : "";

  function navAnchor(hash, label) {
    return `<a class="text-slate-text hover:text-primary transition-colors font-body text-body" href="${home}${hash}">${label}</a>`;
  }

  const navHTML = `
    <header class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-cloud-gray/20">
      <nav class="max-w-[1200px] mx-auto px-6 md:px-12 flex justify-between items-center h-20" aria-label="Main navigation">
        <a class="font-display text-heading font-extrabold text-primary" href="${home || "./"}"
          >Ryan Faatih Firdaus</a
        >
        <div class="hidden md:flex items-center gap-8">
          ${navAnchor("#about", "About")}
          ${navAnchor("#skills", "Skills")}
          ${navAnchor("#projects", "Projects")}
          ${navAnchor("#experience", "Experience")}
          <a
            class="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label text-label hover:opacity-90 transition-all elevated-shadow"
            href="${home}#contact"
            >Let's Chat</a
          >
        </div>
        <button class="md:hidden text-primary p-2" aria-label="Open menu">
          <i class="ri-menu-line"></i>
        </button>
      </nav>
    </header>`;

  const footerHTML = `
    <footer class="bg-surface py-16 border-t border-cloud-gray/20">
      <div
        class="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 pt-8"
      >
        <div class="flex flex-col items-center md:items-start gap-4">
          <a
            class="font-display text-subheading font-bold text-on-surface"
            href="${home || "./"}"
            >Ryan Faatih Firdaus</a
          >
        </div>
        <nav aria-label="Footer links">
          <ul class="flex items-center gap-8 list-none p-0 m-0">
            <li>
              <a class="text-muted-stone hover:text-primary transition-colors" href="https://github.com/ryanffirdaus" aria-label="GitHub">
                <i class="ri-github-fill w-5 h-5"></i>
              </a>
            </li>
            <li>
              <a class="text-muted-stone hover:text-primary transition-colors" href="https://www.linkedin.com/in/ryanffirdaus/" aria-label="LinkedIn">
                <i class="ri-linkedin-box-fill w-5 h-5"></i>
              </a>
            </li>
            <li>
              <a class="text-muted-stone hover:text-primary transition-colors" href="https://www.instagram.com/ryanffirdaus/" aria-label="Instagram">
                <i class="ri-instagram-line w-5 h-5"></i>
              </a>
            </li>
            <li>
              <a class="text-muted-stone hover:text-primary transition-colors" href="https://www.linkedin.com/in/ryanffirdaus/" aria-label="Resume">
                <i class="ri-file-text-fill w-5 h-5"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>`;

  const siteHeader = document.getElementById("site-header");
  const siteFooter = document.getElementById("site-footer");
  if (siteHeader) siteHeader.outerHTML = navHTML;
  if (siteFooter) siteFooter.outerHTML = footerHTML;
})();
