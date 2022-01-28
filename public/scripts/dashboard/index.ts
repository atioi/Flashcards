import {Div} from "../components/Div.js";
import {Menu} from "./components/Menu.js"
import {List} from "./components/List.js";
import {Creator} from "./components/Creator.js";
import {Provider} from "./components/Provider.js";
import {Set} from "./components/Set.js";
import {Reviewer} from "./components/Reviewer.js";

class Dashboard extends Div {
    private readonly sets: Set[] = [];
    private readonly creator: Creator;
    private readonly menu: Menu;
    private readonly list: List;
    private revw: Reviewer | undefined;

    constructor() {
        super();

        this.className = 'Dashboard'

        const remote = new Provider();
        this.sets = remote.fetch();


        this.menu = new Menu();
        this.list = new List(this.sets, this.learn.bind(this));
        this.creator = new Creator();

        this.append(this.menu);
        this.append(this.list);
        this.append(this.creator);

    }

    private learn(i: number) {
        this.revw?.remove();
        this.creator.remove();
        this.revw = new Reviewer(this.sets[i]);
        this.append(this.revw);
    }

}


const dashboard: Dashboard = new Dashboard();
const root = document.getElementById('root');
root?.append(dashboard.html);