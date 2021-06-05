import { html } from 'lit-html';
import './button';

export default {
  title: 'Atom/Button',
  component: 'ui-demo',
  argTypes: {

  },
};

export const Regular = () => html`<ui-button>Button</ui-button>`;
