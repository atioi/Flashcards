import {Div} from "../../components/Div.js";
import {Input} from "../../components/Input.js";
import {Button} from "../../components/Button.js";

class Creator extends Div {

    constructor() {
        super();
        this.className = 'Creator';

        const input = new Input('Title');
        input.className = 'Input';


        const button = new Button('Create');
        button.className = 'Button';

        this.append(input);
        this.append(button);
    }

}

export {Creator};