import {Set} from "./Set.js";
import {Flashcard} from "./Flashcard.js";

const remote = {
    "Biology": {
        "0": {
            "term": "Bilogia",
            "definition": "super"
        },
        "1": {
            "term": "dasdsa",
            "definition": "dasdas"
        },
        "2": {
            "term": "dasda",
            "definition": "dasdsa"
        },
        "3": {
            "term": "dasdas",
            "definition": "dasdsa"
        }, "4": {
            "term": "dasdas",
            "definition": "dasdsa"
        }
    },
    "Chemistry": {},
    "Cloth": {},
    "dsadsasa": {}

}


class Provider {


    public fetch() {

        let parsed = JSON.parse(JSON.stringify(remote))
        const sets: Set[] = [];

        for (let title in parsed) {
            const set = new Set(title);
            const _flashcards = parsed[title];
            for (let _flashcard in _flashcards) {
                const term = _flashcards[_flashcard].term;
                const definition = _flashcards[_flashcard].definition;
                const flashcard = new Flashcard(term, definition);
                set.append(flashcard);
            }

            sets.push(set);
        }

        return sets;
    }

}


export {Provider}