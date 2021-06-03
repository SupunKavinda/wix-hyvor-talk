class HyvorTalkElement extends HTMLElement {
  constructor() {
    super();
    console.log("Hyvor Talk Loading");
  }

  connectedCallback() {
    
  }
}
customElements.define('wix-hyvor-talk', HyvorTalkElement);
