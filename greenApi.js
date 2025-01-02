const apiUrl = "https://7105.api.greenapi.com";

async function getSettings() { // Объявляем асинхронную функцию getSettings для выполнения GET-запроса
  const idInstance = document.getElementById("idInstance").value;
  const apiTokenInstance = document.getElementById("apiTokenInstance").value;
  try {
    const response = await fetch(`${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`); // Отправляем GET-запрос на сервер с использованием fetch
    const data = await response.json(); // Ждём завершения запроса и преобразуем ответ в формат JSON
    document.getElementById("response").textContent = JSON.stringify(data, null, 2); // Отображаем результат запроса в элементе с id="response" в виде текстовой строки
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
    document.getElementById("response").textContent = "Ошибка при выполнении запроса."; // Если ошибка, отображаем сообщение на странице
  }
}
document.getElementById("getSettings").addEventListener("click", getSettings); // Привязываем обработчик события к кнопке с id="getSettings", при нажатии вызывается функция getSettings()

async function getStateInstance() { // Объявляем асинхронную функцию getStateInstance для выполнения GET-запроса
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

async function sendMessage() { // Объявляем асинхронную функцию sendMessage() для выполнения POST-запроса
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const chatId = document.getElementById("phoneNumber").value + "@c.us";
    const message = document.getElementById("message").value;

    if (!idInstance || !apiTokenInstance || !chatId || !message) { // Проверяем заполненность полей
        const emptyFields = []; // Создаем пустой массив, куда будем класть названия незаполненных полей
        // Проверяем каждое поле и добавляем его имя в массив, если оно пустое    
        if (!idInstance) {
            emptyFields.push("ID Instance");
        }
        if (!apiTokenInstance) {
            emptyFields.push("API Token");
        }
        if (!phoneNumber) {
            emptyFields.push("Phone Number");
        }
        if (!message) {
            emptyFields.push("Message");
        }
        document.getElementById("response").textContent = `Пожалуйста, заполните следующие поля: ${emptyFields.join(", ")}`;
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, { // Отправляем POST-запрос на сервер GreenAPI с помощью fetch
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ // Преобразуем объект с данными (chatId и message) в JSON-строку
                chatId: chatId, // Указываем идентификатор чата, куда будет отправлено сообщение
                message: message, // Указываем текст сообщения, который нужно отправить
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

async function sendFileByUrl() { // Объявляем асинхронную функцию sendFileByUrl() для выполнения POST-запроса
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const chatId = document.getElementById("phoneNumber").value + "@c.us";
    const urlFile = document.getElementById("fileUrl").value;

    if (!idInstance || !apiTokenInstance || !chatId || !urlFile) {
        const emptyFields = [];
        if (!idInstance) {
            emptyFields.push("ID Instance");
        }
        if (!apiTokenInstance) {
            emptyFields.push("API Token");
        }
        if (!phoneNumber) {
            emptyFields.push("Phone Number");
        }
        if (!urlFile) {
            emptyFields.push("file URL");
        }
        document.getElementById("response").textContent = `Пожалуйста, заполните следующие поля: ${emptyFields.join(", ")}`;
        return;
    }

    // Извлекаем имя файла из URL
    const fileName = urlFile.split('/').pop(); // Возьмём всё после последнего "/"
    const caption = `Файл: ${fileName}`; // Создаём подпись на основе имени файла

    const payload = { // Создаем объект payload для удобной отправки значений
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
document.getElementById("sendFileByUrl").addEventListener("click", sendFileByUrl);