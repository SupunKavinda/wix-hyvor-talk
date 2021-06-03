function createHtDiv() {
  const div = document.createElement("div");
  div.id = "hyvor-talk-view";
  return div;
}

function createScript() {
  const script = document.createElement("script");
  script.src = "https://talk.hyvor.com/web-api/embed";
  script.async = true;
  return script;
}

class HyvorTalkElement extends HTMLElement {
  constructor() {
    super();
    console.log("Hyvor Talk Loading");
  }

  connectedCallback() {
    window.HYVOR_TALK_WEBSITE = 4232;
    window.HYVOR_TALK_CONFIG = {
      id: window.location.path,
      url: false
    };
    this.appendChild(createHtDiv());
    this.appendChild(createScript());
  }
}
customElements.define('wix-hyvor-talk', HyvorTalkElement);
