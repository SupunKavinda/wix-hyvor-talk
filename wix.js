class HyvorTalkElement extends HTMLElement {
  constructor() {
    super();
    console.log("Hyvor Talk Loading");
  }

  connectedCallback() {
    this.innerHTML = '<br/><br/><br/>Hello World!';
  }
}
customElements.define('wix-hyvor-talk', HyvorTalkElement);
