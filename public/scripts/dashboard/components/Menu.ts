import {Div} from "./../../components/Div.js";
import {Button} from "./../../components/Button.js"
import {Dashboard} from "../index.js";

class Menu extends Div {
    constructor(dashboard: Dashboard) {
        super();
        this.className = 'Menu';

        const header = document.createElement('h1');
        header.innerHTML = 'Flashcards';


        const createSetButton: Button = new Button("Create set");
        createSetButton.addEventListener('click', dashboard.create.bind(dashboard));
        createSetButton.className = 'Button Create';

        const logout: Button = new Button("Logout");
        logout.className = 'Button Logout';

        this.html.append(header);
        this.append(createSetButton);
        this.append(logout);

    }


}

export {Menu};