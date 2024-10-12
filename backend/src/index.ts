import http, { IncomingMessage, ServerResponse } from 'node:http';

const app = http.createServer((req: IncomingMessage, res: ServerResponse) => {
        res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:8080"
        });
        res.end(JSON.stringify({ message: "ok" }));
})

app.listen(3000, () => {
    console.log("app is listen on port 3000");
});