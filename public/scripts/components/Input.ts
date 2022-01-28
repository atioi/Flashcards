import {Component} from "./Component.js";

class Input extends Component {

    constructor(placeholder?: string) {
        super(document.createElement('input'));
        this.placeholder = placeholder ?? '';
    }

    public set placeholder(placeholder: string) {
        this.html.placeholder = placeholder;
    }

}

export {Input};