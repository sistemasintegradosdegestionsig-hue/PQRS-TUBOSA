// ============================================
// API - SISTEMA PQRS TUBOSA
// ============================================

const API_URL = "https://script.google.com/macros/s/AKfycbycyf0jD5sBDVASB2o5U2SmGOJyAGLaaY5gW5MTCTHqijRtVb3H45ggL-d2uKxgY-AcLg/exec";

async function guardarPQRS(datos) {

    try {

        const respuesta = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(datos)

        });

        const resultado = await respuesta.json();

        return resultado;

    } catch (error) {

        console.error("Error:", error);

        return {
            ok: false,
            mensaje: error.message
        };

    }

}
