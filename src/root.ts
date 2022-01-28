import * as http from "http";
import * as fs from "fs";

export = function root(req: http.IncomingMessage, res: http.ServerResponse) {

    const path = "./public/views/dashboard.html";
    const file = fs.readFileSync(path, "utf8");
    res.write(file);
    res.end();
};


