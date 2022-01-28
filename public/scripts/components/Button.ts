import {Component} from "./Component.js";

class Button extends Component {
    constructor(label?: string) {
        super(document.createElement('button'));
        this.label = label ?? '';
    }

    public set label(label: string) {
        this.html.innerHTML = label;
    }
}

export {Button};