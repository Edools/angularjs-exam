class LatestRepos extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.currentScript.ownerDocument.querySelector('#latest-repos-template');
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);
    fetch(`https://api.github.com/repositories?since=0`)
      .then((response) => response.text())
      .then((responseText) => {
        this.render(JSON.parse(responseText));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(userData) {
    const elemento = this.shadowRoot.querySelector('.latest-repos');
    userData.map((el) => {
      const a = document.createElement('a');
      a.href = el.html_url;
      a.innerHTML = `<p class="itemText">${el.name}</p>`;
      elemento.appendChild(a);
    });
  }
};
customElements.define('latest-repos', LatestRepos);
