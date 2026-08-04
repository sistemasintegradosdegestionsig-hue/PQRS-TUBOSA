alert("pqrs.js cargó correctamente");
// ============================================
// REGISTRO DE PQRS
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("pqrsForm");

    if (!formulario) return;

    formulario.addEventListener("submit", async function (e) {

        e.preventDefault();

        const datos = {

            nombre: document.getElementById("nombre").value,
            empresa: document.getElementById("empresa").value,
            correo: document.getElementById("correo").value,
            telefono: document.getElementById("telefono").value,
            ciudad: document.getElementById("ciudad").value,
            factura: document.getElementById("factura").value,
            producto: document.getElementById("producto").value,
            tipo: document.getElementById("tipo").value,
            descripcion: document.getElementById("descripcion").value

        };

        const respuesta = await guardarPQRS(datos);

        if (respuesta.ok) {

            alert(
                "PQRS registrada correctamente.\n\nRadicado: " +
                respuesta.radicado
            );

            formulario.reset();

        } else {

            alert("Error: " + respuesta.mensaje);

        }

    });

});
