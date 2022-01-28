import {Div} from "../../components/Div.js";
import {Card} from "./Card.js";
import {Set} from "./Set.js";

class List extends Div {

    private cards: Card[] = []
    private readonly callback: any;

    constructor(sets: Set[], callback: any) {
        super();
        this.className = 'Sets-List';
        this.callback = callback;

        this.cards = sets.map((set, index) => new Card(set.name, index.toString()));
        this.cards.forEach((card, index) => card.addEventListener('click', () => this.learn(index)));
        this.list();

    }

    private list() {
        this.cards.forEach(card => this.append(card));
    }


    public learn(i: number) {
        this.callback(i);
    }


}

export {List};