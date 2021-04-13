//instanciar XMLHttpRequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//recibe la API
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    //cree un objeto XMLHttpRequest
    const xhttp = new XMLHttpRequest();
    //Se abre una nueva solicitud, especificando que una solicitud GET se utilizará para extraer datos de una pagina, de tipo asincrono
    xhttp.open('GET', url_api, true);
    //crea un objeto función para manejar eventos y lo asigna al atributo de la solicitud onreadystatechange
    xhttp.onreadystatechange = (() => {
      //Este manejador observa el readyState de la solicitud verificando si la transacción se ha completado
      if (xhttp.readyState === 4) {
        //si así es, y el estatus HTTP es 200 (500 que la peticion falló o 400 que no encontro algo)
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error', url_api))
      }
    });
    //Se inicia la solicitud. La función onreadystatechange es llamada siempre que el estado de una solicitud cambia
    xhttp.send();
  });
}

module.exports = fetchData;