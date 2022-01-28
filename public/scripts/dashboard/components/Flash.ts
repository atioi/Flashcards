import {Card} from "./Card.js";
import {Div} from "../../components/Div.js";
import {Paragraph} from "../../components/Paragraph.js";
import {Flashcard} from "./Flashcard.js";

interface State {
    click(flash: Flash): any

    ini(flash: Flash): any;

}

class Definition implements State {
    click(flash: Flash): any {
        flash.setState(new Term());
        flash.showTerm();
    }

    ini(flash: Flash): any {
        flash.showDefinition();
    }
}

class Term implements State {

    click(flash: Flash): any {
        flash.setState(new Definition());
        flash.showDefinition();
    }

    ini(flash: Flash): any {
        flash.showTerm();
    }
}

class Empty implements State {
    click(flash: Flash): any {

    }

    ini(flash: Flash): any {

    }
}

class Flash extends Div {

    private readonly _paragraph: Paragraph;
    private _flashcard: Flashcard;
    private _state: State;

    constructor(flashcard: Flashcard) {
        super();
        this.className = 'Flash';

        this._flashcard = flashcard;

        this._paragraph = new Paragraph();
        this._state = new Term();

        this.addEventListener('click', () => this._state.click(this));

        this.showTerm();
        this.append(this._paragraph);
    }

    public change(flashcard: Flashcard) {
        this._flashcard = flashcard;
        this._state.ini(this);
    }

    public setState(state: State) {
        this._state = state;
    }

    public showDefinition() {
        this._paragraph.text = this._flashcard.definition;
    }

    public showTerm() {
        this._paragraph.text = this._flashcard.term;
    }

}


export {Flash};