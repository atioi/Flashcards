import * as http from "http";
import * as fs from "fs";

export = function (req: http.IncomingMessage, res: http.ServerResponse) {
    const path = './' + req.url;
    const file = fs.readFileSync(path, "utf8")
    res.write(file);
    res.end();
}