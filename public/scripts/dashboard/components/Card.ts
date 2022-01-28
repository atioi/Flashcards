import {Div} from "../../components/Div.js";
import {Paragraph} from "../../components/Paragraph.js";

class Card extends Div {


    constructor(title: string, count: string) {
        super();
        this.className = 'Card'

        const titleParagraph: Paragraph = new Paragraph(title);
        titleParagraph.className = 'Card-Title';
        const countParagraph: Paragraph = new Paragraph(`Terms: ${count}`);
        countParagraph.className = 'Card-Count';

        this.append(titleParagraph);
        this.append(countParagraph);

    }

}

export {Card}
