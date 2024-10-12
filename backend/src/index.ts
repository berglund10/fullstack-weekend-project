import http, { IncomingMessage, ServerResponse } from "node:http";
import { validateNumber } from "./phoneNumberValidator";

const app = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Method Not Allowed" }));
    return;
  }

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:8080",
  });

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    if (validateNumber(JSON.parse(body).MobilePhoneNumber)) {
      res.end(
        JSON.stringify({
          message:
            "Your mobile number has been successfully validated. Please expect a text message shortly",
        }),
      );
      return;
    }
    res.end(
      JSON.stringify({
        message:
          "Mobile number is invalid. Please ensure you have entered a correct number.",
      }),
    );
  });
});

app.listen(3000, () => {
  console.log("app is listen on port 3000");
});
