import {Controller} from "./Controller";
import * as http from "http";


class Router {

    private static GET: Controller[] = [];
    private static POST: Controller[] = [];
    private static server: http.Server;

    public static get(url: string, callback: any) {
        Router.GET.push(new Controller(url, callback));
    }

    public static post(url: string, callback: any) {
        Router.POST.push(new Controller(url, callback));
    }

    public static listen(port: number) {
        Router.server = http.createServer(Router.serve);
        Router.server.listen(port);
    }

    private static serve(req: http.IncomingMessage, res: http.ServerResponse) {
        const _url = req.url;
        const split = _url?.split('/')[1].trim();
        const url = split === '' ? '/' : split;
        console.log(url);

        const method = req.method;

        if (method === 'GET' && url !== undefined) {
            const controller = Router.GET.find(controller => controller.url === url);
            controller?.run(req, res);
        }

        if (method === 'POST' && url !== undefined) {
            const controller = Router.POST.find(controller => controller.url === url);
            controller?.run(req, res);
        }

    }

}


export {Router};

