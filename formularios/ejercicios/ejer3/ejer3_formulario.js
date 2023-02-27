function validarNombre() {
    let f=document.formulario;
    if(f.nombre.value=="") f.nombre.setCustomValidity("Error\nEl nombre no puede estar vacío.");
    else if(f.nombre.value.length<=5) f.nombre.setCustomValidity("Error\nLa longitud del nombre debe ser mayor que 5.");
    else f.nombre.setCustomValidity("");
}

function validarApellidos() {
    let f=document.formulario;
    if(f.apellidos.value=="") f.apellidos.setCustomValidity("Error\nEl apellido no puede estar vacío.");
    else if(f.apellidos.value.length<=10) f.apellidos.setCustomValidity("Error\nLa longitud de los apellidos debe ser mayor que 10.");
    else f.apellidos.setCustomValidity("");
}

function validarCheckbox() {
    let f=document.formulario;
    if(!f.informacion.checked) f.informacion.setCustomValidity("Error\nEl checkbox de información debe marcarse");
    else f.informacion.setCustomValidity("");
}

window.onload = function(){
    let f=document.formulario;
    f.nombre.setCustomValidity("Error\nEl nombre no puede estar vacío.");
    f.apellidos.setCustomValidity("Error\nEl apellido no puede estar vacío.");
    f.nombre.oninput=validarNombre;
    f.apellidos.onblur=validarApellidos;
    f.informacion.onclick=validarCheckbox;
}