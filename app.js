// En el archivo JavaScript (app.js)
const registerForm = document.getElementById("registerForm");
const leaderboardBody = document.querySelector("#leaderboard tbody");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener el valor del campo de nombre de usuario
  const usernameInput = document.getElementById("username");
  const username = usernameInput.value.trim();

  // Validar que el campo de nombre de usuario no esté vacío
  if (username === "") {
    alert("Por favor, ingresa un nombre de usuario válido.");
    return;
  }

  // Crear una nueva fila en la tabla de usuarios
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${username}</td>
    <td>0</td>
  `;

  // Agregar la nueva fila a la tabla
  leaderboardBody.appendChild(newRow);

  // Limpiar el campo de nombre de usuario después del registro exitoso
  usernameInput.value = "";

  // Notificar al usuario que se ha registrado exitosamente
  alert("¡Registro exitoso!");
});
