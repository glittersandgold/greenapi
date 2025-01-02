const apiUrl = "https://7105.api.greenapi.com";

async function getSettings() {
  const idInstance = document.getElementById("idInstance").value;
  const apiTokenInstance = document.getElementById("apiTokenInstance").value;
  try {
    const response = await fetch(`${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`);
    const data = await response.json();
    document.getElementById("response").textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
    document.getElementById("response").textContent = "Ошибка при выполнении запроса.";
  }
}
document.getElementById("getSettings").addEventListener("click", getSettings);

async function getStateInstance() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    try {
      const response = await fetch(`${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
      const data = await response.json();
      document.getElementById("response").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
      document.getElementById("response").textContent = "Ошибка при выполнении запроса.";
    }
  }
document.getElementById("getStateInstance").addEventListener("click", getStateInstance);

async function sendMessage() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const chatId = document.getElementById("phoneNumber").value + "@c.us";
    const message = document.getElementById("message").value;

    try {
        const response = await fetch(`${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chatId: chatId,
                message: message,
            }),
        });

        const data = await response.json();
        document.getElementById("response").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        document.getElementById("response").textContent = "Ошибка при выполнении запроса.";
    }
}
document.getElementById("sendMessage").addEventListener("click", sendMessage);