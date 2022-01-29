import {Menu} from "./Menu.js";
import {deflateRawSync} from "zlib";

class Column {


    render(id: string, className: string, placeholder: string, type: string, required: boolean) {
        const div = document.createElement('div')

        const input = document.createElement('input');
        input.required = required;
        input.className = className;
        input.type = type;
        input.placeholder = placeholder;
        input.name = id;

        const label = document.createElement('label');
        label.setAttribute('for', id);

        div.append(label);
        div.append(input);

        return div
    }


}


class Login {

    render() {

        const div = document.createElement('div');
        div.className = 'Login-Form-Container';

        const header = document.createElement('h2');
        header.innerHTML = 'Login';

        div.append(header);

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = '/login';


        const email = new Column();
        const password = new Column();

        const submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.value = 'Login';


        form.append(email.render('email', 'Email', 'Email', 'email', true));
        form.append(password.render('password', 'Password', 'Password', 'password', true));
        form.append(submit);

        div.append(form);
        return div;
    }

}


const root = document.getElementById('root');
root?.append(new Menu().nav);
root?.append(new Login().render());
