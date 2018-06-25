const currentDocument = document.currentScript.ownerDocument;

class UserRepo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = currentDocument.querySelector('#user-repo-template');
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);
    this.username = this.getAttribute('username');
  }

  static get observedAttributes() {
    return ['username'];
  }

  set username(value) {
    this._username = value;
  }

  get username() {
    return this._username;
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    const attribute = attr.toLowerCase()
    this.username = newVal != '' ? newVal : ""
    if (this.username != ''){
      fetch(`https://api.github.com/users/${this.username}/repos`)
        .then((response) => response.text())
        .then((responseText) => {
            this.render(JSON.parse(responseText));
        })
        .catch((error) => {
            console.error(error);
        });
    }
  }

  render(userData) {
    const elemento = this.shadowRoot.querySelector('.user-repos');
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    }
    userData.map((el) => {
      const a = document.createElement('a');
      a.href = el.html_url;
      a.innerHTML = `<p class="itemText">${el.name}</p>`;
      elemento.appendChild(a);
    });
  }
}

customElements.define('user-repo', UserRepo);
