document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("mobilePhoneNumber") as HTMLInputElement;
    const form = document.getElementById("mobilePhoneNumberForm") as HTMLFormElement;
    const paragraph = document.getElementById("messageFromBackend") as HTMLParagraphElement;

    if(form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            await callBackend(paragraph, input);
        })
    } else {
        console.error("form not found");
    }
})

async function callBackend(text: HTMLParagraphElement, input: HTMLInputElement) {

    const inputData = {
        MobilePhoneNumber: input.value
    }
    try {
      const result = await window.fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(inputData),
      });
      const message = await result.json();
      text.innerText = message.message;

    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.stack);
        return;
      }
      console.log("Unknown error:", JSON.stringify(error));
    }
  }
