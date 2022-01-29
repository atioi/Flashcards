class Menu {
    get nav(): any {
        return this._nav;
    }

    private readonly _nav: any;

    constructor() {

        const nav = document.createElement('nav');
        nav.className =  'Navigation';

        const header = document.createElement('h1');
        header.innerHTML = 'Flashcards';

        const register = document.createElement('button');
        register.innerHTML = 'Register';
        register.addEventListener('click', this.redirect.bind(this));
        register.className = 'Register-Button';


        nav.append(header);
        nav.append(register);

        this._nav = nav;

    }

    redirect() {
        window.location.replace('/register');
    }


}

export {Menu};