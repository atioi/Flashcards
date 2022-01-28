class Flashcard {

    get definition(): string {
        return this._definition;
    }

    get term(): string {
        return this._term;
    }

    private readonly _term: string;
    private readonly _definition: string;

    constructor(term: string, definition: string) {
        this._term = term;
        this._definition = definition;
    }


}

export {Flashcard};