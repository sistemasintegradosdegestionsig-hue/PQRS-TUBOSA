//============================================
// SISTEMA PQRS TUBOSA
// Navegación principal
//============================================

document.addEventListener("DOMContentLoaded", () => {

    const btnNueva = document.getElementById("btnNueva");
    const btnConsulta = document.getElementById("btnConsulta");
    const btnLogin = document.getElementById("btnLogin");

    if(btnNueva){

        btnNueva.addEventListener("click",()=>{

            window.location.href="nueva-pqrs.html";

        });

    }

    if(btnConsulta){

        btnConsulta.addEventListener("click",()=>{

            window.location.href="consulta.html";

        });

    }

    if(btnLogin){

        btnLogin.addEventListener("click",()=>{

            window.location.href="login.html";

        });

    }

});
