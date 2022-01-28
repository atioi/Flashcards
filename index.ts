import * as http from 'http';
import {Router} from "./Router";
import root from "./src/root";
import _static from "./src/_static";

Router.get('/', root);
Router.get('public', _static);

Router.listen(8080);
