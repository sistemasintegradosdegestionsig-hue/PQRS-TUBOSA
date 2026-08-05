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

    proceso: document.getElementById("proceso").value,

    prioridad: document.getElementById("prioridad").value,

    lote: document.getElementById("lote").value,

    cantidad: document.getElementById("cantidad").value,

    ciudadCaso: document.getElementById("ciudadCaso").value,

    asunto: document.getElementById("asunto").value,

    descripcion: document.getElementById("descripcion").value,

    solucion: document.getElementById("solucion").value

};

        alert("Antes de enviar");

        const respuesta = await guardarPQRS(datos);

        alert("Después de enviar");

        if (respuesta.ok) {

            alert("Radicado: " + respuesta.radicado);

            formulario.reset();

        } else {

            alert("Error: " + respuesta.mensaje);

        }

    });

});
