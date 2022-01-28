import {Div} from "./../../components/Div.js";
import {Set} from "./Set.js";
import {Card} from "./Card.js";
import {Flashcard} from "./Flashcard.js";
import {Flash} from "./Flash.js";
import {Button} from "./../../components/Button.js";
import {Paragraph} from "./../../components/Paragraph.js";

interface State {
    display(rev: Reviewer): any;
}

class Empty implements State {
    display(rev: Reviewer): any {
        const info = new Div();
        const label = new Paragraph();
        label.text = 'Set is empty';
        info.append(label);
        rev.append(info);
    }
}

class NotEmpty implements State {

    private set: Set;
    private i: number = 0;
    private flash: Flash;

    constructor(set: Set) {
        this.set = set;
        const flashcard = this.set.getFlashcard(this.i);
        this.flash = new Flash(flashcard);

    }


    display(rev: Reviewer): any {


        const nbtn = new Button(">");
        const bbtn = new Button("<");

        nbtn.addEventListener('click', () => this.next());
        nbtn.className = 'Next-Button';
        bbtn.addEventListener('click', () => this.before());
        bbtn.className = 'Before-Button';
        rev.append(this.flash);
        rev.append(nbtn);
        rev.append(bbtn);

    }


    next() {
        if (this.i < this.set.len - 1)
            this.i++;
        this.flash.change(this.set.getFlashcard(this.i));
    }

    before() {
        if (this.i > 0)
            this.i--;
        this.flash.change(this.set.getFlashcard(this.i));
    }
}


class Reviewer extends Div {

    private state: State;

    constructor(set: Set) {
        super();
        this.className = 'Reviewer';

        if (set.len === 0)
            this.state = new Empty();
        else
            this.state = new NotEmpty(set);

        this.state.display(this);
    }


}


export {Reviewer}