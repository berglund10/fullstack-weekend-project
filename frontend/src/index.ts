const text = document.getElementById("fromJS") as HTMLParagraphElement;

if (text) {
  callBackend(text);
}

async function callBackend(text: HTMLParagraphElement) {
  try {
    const result = await window.fetch("http://localhost:3000");
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
