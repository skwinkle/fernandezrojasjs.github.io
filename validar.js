function validar(form) {
    // Validar name

    let nombre = form.nombre.value.trim()

    if (nombre=="") {
        alert("Por favor, ingrese su nombre");
        return false;
    }

    let edad = form.edad.value.trim()

    if(edad==="" || isNaN(edad) || edad<0) {
        alert("Por favor, ingrese una edad válida")
        return false;
    }
}