import {Div} from "./../../components/Div.js";
import {Button} from "./../../components/Button.js"

class Menu extends Div {
    constructor() {
        super();
        this.className = 'Menu';

        const header = document.createElement('h1');
        header.innerHTML = 'Flashcards';


        const createSetButton: Button = new Button("Create set");
        createSetButton.addEventListener('click', this.createSet.bind(this));
        createSetButton.className = 'Button Create';

        const logout: Button = new Button("Logout");
        logout.className = 'Button Logout';

        this.html.append(header);
        this.append(createSetButton);
        this.append(logout);

    }

    protected createSet() {
        alert('hello');
    }

}

export {Menu};