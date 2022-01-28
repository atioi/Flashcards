import {Flashcard} from "./Flashcard.js";

class Set {

    private _name: string;
    private flashcards: Flashcard[] = [];

    constructor(name: string) {
        this._name = name;
    }

    public append(flashcard: Flashcard) {
        this.flashcards.push(flashcard);
    }

    public getFlashcard(i: number) {
        return this.flashcards[i];
    }

    get len() {
        return this.flashcards.length;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

}


export {Set};