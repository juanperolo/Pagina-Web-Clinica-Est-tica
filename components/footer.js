class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
          <footer>
            <nav>
                <ul>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="valoraciones.html">Valoraciones</a></li>
                </ul>
            </nav>
        </footer>
        `;
      }
  }

customElements.define('footer-component', Footer);