import {Div} from "../components/Div.js";

class Dashboard extends Div {
    constructor() {
        super();
        this.className = 'Dashboard'

    }

}


const dashboard: Dashboard = new Dashboard();
const root = document.getElementById('root');
root?.append(dashboard.html);