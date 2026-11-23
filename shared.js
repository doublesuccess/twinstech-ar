// shared.js — injects navbar and footer, handles hamburger
(function () {
  const NAV_HTML = `
<nav id="navbar">
  <a href="index.html" class="nav-logo">
    <img src="assets/logo.png" alt="TwinsTech" style="height:36px;width:36px;object-fit:contain;border-radius:6px;" draggable="false">
    <span style="color:#F8FFF9;user-select:none;">Twins<span style="color:#1DB954;">Tech</span></span>
  </a>
  <ul class="nav-links" id="navLinks">
    <li class="nav-dropdown">
      <a href="index.html#servicios" class="nav-dropdown-toggle">Servicios <span class="nav-chevron">▾</span></a>
      <ul class="nav-dropdown-menu">
        <div class="nav-dropdown-inner">
        <li><a href="soporte.html"><img src="assets/icon_support.png" alt="" style="width:16px;height:16px;object-fit:contain;vertical-align:middle;margin-right:8px;opacity:.8;">Soporte Técnico</a></li>
        <li><a href="abono.html"><img src="assets/icon_refresh_2.png" alt="" style="width:16px;height:16px;object-fit:contain;vertical-align:middle;margin-right:8px;opacity:.8;">Soporte con abono mensual</a></li>
        <li><a href="web.html"><img src="assets/icon_website.png" alt="" style="width:16px;height:16px;object-fit:contain;vertical-align:middle;margin-right:8px;opacity:.8;">Diseño y Desarrollo Web</a></li>
        </div>
      </ul>
    </li>
    <li><a href="index.html#portfolio">Portfolio</a></li>
    <li><a href="index.html#proceso">Cómo trabajamos</a></li>
    <li><a href="nosotros.html">Sobre nosotros</a></li>
    <li><a href="contacto.html" class="nav-cta">Contacto</a></li>
  </ul>
  <button class="nav-hamburger" id="hamburger" aria-label="Menú">
    <span></span><span></span><span></span>
  </button>
</nav>`;

  const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
          <img src="assets/logo.png" alt="TwinsTech" style="height:40px;width:40px;object-fit:contain;border-radius:7px;">
          <div class="footer-brand-name" style="margin-bottom:0;">Twins<span>Tech</span></div>
        </div>
        <p class="footer-slogan">"Precisión que transforma."</p>
        <p class="footer-brand-desc">Soporte técnico y desarrollo web para particulares, emprendedores y empresas en Argentina.</p>
      </div>
      <div>
        <div class="footer-col-title">Servicios</div>
        <ul class="footer-links">
          <li><a href="soporte.html">Soporte técnico</a></li>
          <li><a href="abono.html">Asistencia técnica mensual</a></li>
          <li><a href="web.html">Diseño y desarrollo web</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Enlaces</div>
        <ul class="footer-links">
          <li><a href="nosotros.html">Sobre nosotros</a></li>
          <li><a href="index.html#portfolio">Portfolio</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy" style="color:#888;">© 2026 TwinsTech. Todos los derechos reservados.</span>
      <span style="display:flex;gap:20px;flex-wrap:wrap;">
        <a href="privacidad.html" style="font-size:0.78rem;color:#444;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--green-main)'" onmouseout="this.style.color='#444'">Política de Privacidad</a>
        <a href="terminos.html" style="font-size:0.78rem;color:#444;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--green-main)'" onmouseout="this.style.color='#444'">Términos y Condiciones</a>
      </span>
      <span class="footer-badge">Hecho en Argentina</span>
    </div>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // Dropdown toggle on mobile tap / desktop hover handled via CSS
  document.querySelectorAll('.nav-dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        toggle.closest('.nav-dropdown').classList.toggle('open');
      }
    });
  });

  // highlight active page link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.style.color = 'var(--green-main)';
    }
  });
})();
