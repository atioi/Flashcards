import {Div} from "../../components/Div.js";
import {Input} from "../../components/Input.js";
import {Button} from "../../components/Button.js";
import {Flashcard} from "./Flashcard.js";
import {Set} from "./Set.js";
import {Dashboard} from "../index.js";


class TitleInput extends Input {
    constructor() {
        super();
        this.appendClass('Title-Input');
        this.id = 'title';
        this.placeholder = 'Set title';
    }

    public cannotBeEmpty() {
        if (this.value === '') {
            window.location.replace('#title');
            this.appendClass('Cannot-Be-Empty');
            throw new Error('Title cannot be empty.');
        }
    }

    public getValue() {
        this.cannotBeEmpty();
        return this.value;
    }
}

class FlashcardInput extends Input {
    constructor(placeholder: string, id: string) {
        super();
        this.id = id;
        this.className = 'Flashcard-Input';
        this.placeholder = placeholder;
    }

    public cannotBeEmpty() {
        if (this.value === '') {
            window.location.replace(`#${this.id}`);
            this.appendClass('Cannot-Be-Empty');
            throw new Error('Input cannot be empty.');
        }
    }

    public getValue() {
        this.cannotBeEmpty();
        return this.value;
    }

}


class FlashcardCreator extends Div {
    private term: any;
    private definition: any;

    constructor(creator: Creator) {
        super();

        this.className = 'Flashcard-Creator';

        const remove = new Button('X');
        remove.className = 'Remove-Button';
        remove.addEventListener('click', () => creator.remove_flashcard.bind(creator)(this));

        this.term = new FlashcardInput('Term', 'term-input');
        this.definition = new FlashcardInput('Definition', 'definition-input');

        this.definition.addEventListener('keydown', (event: any) => {
            if (event.key === 'Tab')
                creator.add_flashcard();
        })

        this.append(this.term);
        this.append(this.definition);
        this.append(remove);

    }


    public getResult() {
        let term;
        let definition;

        try {

            term = this.term.getValue();
            definition = this.definition.getValue()

        } catch (error) {
            throw new Error('Not every flashcard is fulfiled.');
        }

        return new Flashcard(term, definition);
    }


}


class Creator extends Div {

    private flashcardCreators: FlashcardCreator[] = [];
    private btn_add: any;
    private create_btn: any;
    private titleInput: any;
    private dashboard: Dashboard;

    constructor(dashboard: Dashboard) {
        super();

        this.dashboard = dashboard;
        this.className = 'Set-Creator';

        this.btn_add = new Button('+ Add new one');
        this.append(this.btn_add);

        this.create_btn = new Button('Create');
        this.create_btn.className = 'Create-Set-Btn';
        this.create_btn.addEventListener('click', this.create.bind(this));

        this.btn_add.addEventListener('click', this.add_flashcard.bind(this));
        this.btn_add.className = 'Flashcard-Add-Button';

        // Input for set title.
        this.titleInput = new TitleInput();
        this.append(this.titleInput);

        this.add_flashcard();
        this.append(this.create_btn);


    }

    public add_flashcard() {
        // Create new FlashcardCreator which extends Div and appends it to the DOM.
        const flashcardCreator = new FlashcardCreator(this);
        // console.log(this.btn_add);
        this.btn_add.remove();
        this.create_btn.remove();
        this.append(flashcardCreator);
        this.append(this.btn_add);
        this.append(this.create_btn);
        // this.append(this.btn_add);
        // Saves reference inside flashcardCreators array.
        this.flashcardCreators.push(flashcardCreator);
    }

    public remove_flashcard(flashcardCreator: FlashcardCreator) {
        const index = this.flashcardCreators.indexOf(flashcardCreator);
        this.flashcardCreators.splice(index, 1);
        flashcardCreator.remove();
    }

    private create() {
        try {
            const title = this.titleInput.getValue();
            const flashcards = this.flashcardCreators.map(flashcard => flashcard.getResult());
            const set = new Set(title);
            set.flashcards = flashcards;
            this.dashboard.addset(set);
        } catch (error) {

        }
    }

}

export {Creator};