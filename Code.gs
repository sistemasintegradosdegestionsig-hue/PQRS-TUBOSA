/**
 * ===================================================
 * SISTEMA PQRS TUBOSA
 * Archivo principal
 * ===================================================
 */

const APP = {
  NAME: "PQRS TUBOSA",
  VERSION: "1.0.0",
  COMPANY: "Tubosa S.A.S"
};

/**
 * Página principal
 */
function doGet(e) {

  return HtmlService
    .createTemplateFromFile("html/index")
    .evaluate()
    .setTitle(APP.NAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

}

/**
 * Permite incluir archivos HTML
 */
function include(filename){

  return HtmlService
      .createHtmlOutputFromFile(filename)
      .getContent();

}
