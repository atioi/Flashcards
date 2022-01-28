import {Component} from "./Component.js";


class Paragraph extends Component {
    constructor(text?: string) {
        super(document.createElement('p'));
        this.text = text ?? '';
    }

    public set text(text: string) {
        this.html.innerHTML = text;
    }
}

export {Paragraph};