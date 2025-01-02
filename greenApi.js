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