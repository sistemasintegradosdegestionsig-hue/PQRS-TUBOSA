alert("pqrs.js cargó");

document.addEventListener("DOMContentLoaded", function () {

    alert("DOM cargado");

    const formulario = document.getElementById("pqrsForm");

    alert(formulario);

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("El botón funciona");

    });

});
