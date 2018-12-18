import React from 'react';
import ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';

import Counter from '../components/counter'

class WebCounter extends HTMLElement {

    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        this.mountPoint = document.createElement('div');
        shadowRoot.appendChild(this.mountPoint);
        retargetEvents(shadowRoot);
    }

    static get observedAttributes() {
        return ['count'];
    };

    connectedCallback() {
        this.render();
    };

    attributeChangedCallback() {
        this.render();
    }

    handleChange = (count) => {
        this.setAttribute('count', count);
    };

    render = () => {
        const count = parseInt(this.getAttribute('count'));
        ReactDOM.render(<Counter count={count} onChange={this.handleChange}/>, this.mountPoint);
    }
}

customElements.define('web-counter', WebCounter);
