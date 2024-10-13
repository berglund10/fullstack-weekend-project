import http, { IncomingMessage, ServerResponse } from "node:http";
import { validateMobileNumber } from "./phoneNumberValidator";
import { sendSMS } from "./sendSMS";
import { readRequestBody, sendResponse } from "./http.helpers";

const app = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

    if (req.method !== "POST") {
      sendResponse(res, 405, "Method Not Allowed");
      return;
    }

    try {
      const body = await readRequestBody(req);
      const mobileNumber = JSON.parse(body).MobilePhoneNumber;

      if (typeof mobileNumber !== "string") {
        throw new Error("Invalid input: Mobile phone number must be a string.");
      }
      if (validateMobileNumber(mobileNumber)) {
        sendResponse(
          res,
          200,
          "Your mobile number has been successfully validated. Please expect a text message shortly",
        );
        return;
      }

      sendResponse(
        res,
        400,
        "Mobile number is invalid. Please ensure you have entered a correct number.",
      );

    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        sendResponse(
          res,
          400,
          "Invalid request format. Please ensure the data is correct.",
        );
        return;
      }
      console.error("Non-standard error:", error);
      sendResponse(res, 500, "An unexpected error occurred.");
    }
  },
);

app.listen(3000, () => {
  console.log("app is listen on port 3000");
});
