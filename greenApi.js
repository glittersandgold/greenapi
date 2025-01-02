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

async function sendFileByUrl() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const chatId = document.getElementById("phoneNumber").value + "@c.us";
    const urlFile = document.getElementById("fileUrl").value;

    if (!idInstance || !apiTokenInstance || !chatId || !urlFile) {
        document.getElementById("response").textContent = "Пожалуйста, заполните все поля.";
        return;
    }

    // Извлечение имени файла из URL
    const fileName = urlFile.split('/').pop(); // Возьмёт всё после последнего "/"
    const caption = `Файл: ${fileName}`; // Создаём подпись на основе имени файла

    const payload = {
        chatId: chatId,
        urlFile: urlFile,
        fileName: fileName,
        caption: caption,
    };

    try {
        const response = await fetch(`${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();
        document.getElementById("response").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        document.getElementById("response").textContent = "Ошибка при выполнении запроса.";
    }
}

// Привязка обработчика события
document.getElementById("sendFileByUrl").addEventListener("click", sendFileByUrl);