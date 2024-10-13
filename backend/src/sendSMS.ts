import dotenv from "dotenv";

dotenv.config();

type SmsData = {
  from: string;
  to: string;
  message: string;
};

const auth = Buffer.from(`${process.env.API_KEY}`).toString("base64");

const url = process.env.API_URL;
const phoneNumber = process.env.PHONE_NUMBER;

if (!auth || !url || !phoneNumber) {
  throw new Error("Missing required environment variables.");
}

export async function sendSMS() {
  const data: SmsData = {
    from: "ElksWelcome",
    to: phoneNumber as string,
    message: "Skickat från min backend 🚀",
  };

  const params = new URLSearchParams(data).toString();


  try {
    const response = await fetch("url" as string, {
      method: "POST",
      body: params,
      headers: {
        Authorization: "Basic " + auth,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

  } catch (error) {
    if(error instanceof Error) {
      throw new Error(`Something went wrong with the fetch: ${error.message}`);
    }
    throw new Error("An unknown error occurred during the fetch");

  }
}
