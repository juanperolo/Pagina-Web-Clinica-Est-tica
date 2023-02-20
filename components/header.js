class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
          <div class="page-header">
            <header>
              <nav>
                  <ul>
                      <li><a href="main.html">Inicio</a></li>
                      <li><a href="tratamientos.html">Tratamientos</a></li>
                      <li><a href="nosotros.html">Nosotros</a></li>
                      <li><a href="contacto.html">Contacto</a></li>
                  </ul>
              </nav>
          </header>
        </div>
        `;
      }
  }

customElements.define('header-component', Header);