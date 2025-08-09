function cambiarEstilo() {
    const select = document.getElementById("tema");
    const hojaEstilo = document.getElementById("hojaEstilo");

    if (select.value === "ninguno") {
        hojaEstilo.href = "";
    } else {
        hojaEstilo.href = select.value;
    }
}

// Capturar evento del formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recargar la página

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (usuario === "umg" && password === "admin") {
        alert("✅ Login exitoso. Bienvenido, " + usuario + "!");
    } else {
        alert("❌ Usuario o contraseña incorrectos");
    }
});
