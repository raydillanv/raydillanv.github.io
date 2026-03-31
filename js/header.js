let headerContent = `
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>      
    <div
        class="collapse navbar-collapse text-dark bg-transparent justify-content-center"
        id="navbarSupportedContent1"
      >
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <a class="nav-link text-dark section-link" href="#" data-section="about">
              <img
                src="apple-icon.png"
                alt="Home"
                style="height: 20px; width: auto; margin-right: 5px"
              />
              Home
              <span class="visually-hidden"></span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-dark section-link" href="#" data-section="projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark section-link" href="#" data-section="Resume">Résumé</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark section-link" href="#" data-section="Contact">Contact Me</a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-dark"
              href="#"
              id="navbarDropdown1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li>
                <a class="dropdown-item" href="https://www.paypal.com/donate/?business=B6GXXULAEPFF2&no_recurring=0&currency_code=USD">Support My Projects</a>
              </li>
              <li>
                <a class="dropdown-item" href="https://tools.tastethecode.com/youtube-latest/r/raydillanv">My Latest Video</a>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <a class="dropdown-item" href="https://github.com/raydillanv">Dillan's GitHub</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
`;

document.querySelector('#NavContainer').insertAdjacentHTML('beforeend', headerContent);

// All section IDs managed by the nav
const sectionIds = ['about', 'projects', 'Resume', 'Contact'];

function showSection(targetId) {
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const container = el.closest('.container');
      if (container) {
        if (id === targetId) {
          container.style.display = '';
          // Remove then re-add the class to re-trigger the animation
          el.classList.remove('animate-in');
          void el.offsetWidth; // force reflow so the browser resets the animation
          el.classList.add('animate-in');
        } else {
          container.style.display = 'none';
        }
      }
    }
  });

  // Update active state on nav links
  document.querySelectorAll('.section-link').forEach(link => {
    const parentLi = link.closest('li');
    if (link.dataset.section === targetId) {
      parentLi.classList.add('active');
    } else {
      parentLi.classList.remove('active');
    }
  });

  // Collapse navbar on mobile after clicking (Bootstrap 5 way)
  const navbarCollapse = document.getElementById('navbarSupportedContent1');
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) bsCollapse.hide();
  }
}

// Attach click listeners after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Show only the 'about' section by default
  showSection('about');

  document.querySelectorAll('.section-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.section;
      showSection(target);
    });
  });
});