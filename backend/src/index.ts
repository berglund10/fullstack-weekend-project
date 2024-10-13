import http, { IncomingMessage, ServerResponse } from "node:http";
import { validateNumber } from "./phoneNumberValidator";
import { sendSMS } from "./sendSMS";

const app = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Method Not Allowed" }));
    return;
  }

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080")

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    try {
      const number = JSON.parse(body).MobilePhoneNumber;
      if (validateNumber(number)) {
        if (number === "0734001337") {
          await sendSMS();
        }
        res.statusCode = 200;
        res.end(
          JSON.stringify({
            message:
              "Your mobile number has been successfully validated. Please expect a text message shortly",
          }),
        );
        return;
      }
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          message:
            "Mobile number is invalid. Please ensure you have entered a correct number.",
        }),
      );

    } catch (error) {
      if(error instanceof Error) {
        console.log(error.message);
        res.statusCode = 400;
        res.end(
          JSON.stringify({ 
            message: "Invalid request format. Please ensure the data is correct.",
          })
        )
        return;
      }
      console.error("Non-standard error:", error);
      res.statusCode = 500;
      res.end(
        JSON.stringify({
          message: "An unexpected error occurred."
        })
      );
    }
  });
});

app.listen(3000, () => {
  console.log("app is listen on port 3000");
});
