class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
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
        `;
      }
  }

customElements.define('header-component', Header);