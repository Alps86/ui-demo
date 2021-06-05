import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-button')
export class Button extends LitElement {
  static styles = css`
    button{
        display:inline-block;
        margin:0;
        padding:8px 16px;
        overflow:visible;
        overflow:hidden;
        vertical-align:middle;
        text-transform:none;
        text-decoration:none;
        text-align:center;
        cursor:pointer;
        white-space:nowrap;
        border:none;
    }
    button:hover{
        box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)
    }
    `;

  @property()
  primary = '';

  render() {
    return html`<button><slot></slot></button>`;
  }
}
