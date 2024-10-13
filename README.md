![mobilephonevalidator](https://github.com/user-attachments/assets/9892a9f4-d690-42d6-98d0-8a2fe2d09607)
# Mobile Number Validator

This project is a app for checking whether a mobile phone number is valid according to the guidelines set by The Swedish Post and Telecom Authority(https://pts.se/). If the number passes validation, a message is sent to the number via the 46elks API.

### The validation is based on the following guidelines:
* Only numbers starting with +46, 0046, or 07 are allowed.
* Valid prefixes for mobile numbers are 070, 072, 073, 076, and 079. (If its starts with +46 its +4672/+4673 etc)
* The number must be exactly 10 digits long (excluding country code).
* These rules were established at the beginning of the project and can be found in src/phoneNumberValidator.test.ts file.

### Running the app
- Start backend - npm run dev (localhost:3000)
- Start client - npm run build, npm run start (localhost:8080)

The new technology used in this project is the 46elks API. I utilized Basic Auth for authentication and tested sending SMS messages to mobile phones via my HTTP server.

Documentation: https://46elks.se/docs/send-sms
