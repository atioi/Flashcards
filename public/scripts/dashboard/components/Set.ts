import {Flashcard} from "./Flashcard.js";

class Set {
    get flashcards(): Flashcard[] {
        return this._flashcards;
    }

    set flashcards(value: Flashcard[]) {
        this._flashcards = value;
    }

    private _name: string;
    private _flashcards: Flashcard[] = [];

    constructor(name: string) {
        this._name = name;
    }

    public append(flashcard: Flashcard) {
        this._flashcards.push(flashcard);
    }

    public getFlashcard(i: number) {
        return this._flashcards[i];
    }

    get len() {
        return this._flashcards.length;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

}


export {Set};