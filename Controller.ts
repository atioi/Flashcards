import * as http from "http";

class Controller {
    get url(): string {
        return this._url;
    }

    private readonly _url: string;
    private readonly callback: any;

    constructor(url: string, callback: any) {
        this._url = url;
        this.callback = callback;
    }

    public run(req: http.IncomingMessage, res: http.ServerResponse) {
        this.callback(req, res);
    }
}

export {Controller};