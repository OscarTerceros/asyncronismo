//instanciar XMLHttpRequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let API = 'https://rickandmortyapi.com/api/character/';

//recibe la API y callback
function fetchData(url_api, callback) {
  //cree un objeto XMLHttpRequest
  let xhttp = new XMLHttpRequest();
  //Se abre una nueva solicitud, especificando que una solicitud GET se utilizará para extraer datos de una pagina, de tipo asincrono
  xhttp.open('GET', url_api, true);
  //crea un objeto función para manejar eventos y lo asigna al atributo de la solicitud onreadystatechange
  xhttp.onreadystatechange = function (event) {
    //Este manejador observa el readyState de la solicitud verificando si la transacción se ha completado
    if (xhttp.readyState === 4) {
      //si así es, y el estatus HTTP es 200 (500 que la peticion falló o 400 que no encontro algo)
      if (xhttp.status === 200) {
        //devuelve el contenido recibido
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        //Si ocurrió un error, se almacena el mensaje de error
        const error = new Error('Error' + url_api);
        return callback(error, null)
      }
    }
  }
  //Se inicia la solicitud. La función onreadystatechange es llamada siempre que el estado de una solicitud cambia
  xhttp.send();
}

//MAXIMO REALIZAR TRES LLAMADAS PARA NO DERIVAR EN UN CALLBACK HELL
//Primera petición
fetchData(API, function (error1, data1) {
  //valido que no haya un error, si lo hay, retorna el error
  if (error1) return console.error(error1);
  //Segunda petición
  // concateno a data1.results[0].id que es el personaje 1
  fetchData(API + data1.results[0].id, function (error2, data2) {
    //valido que haya resultado
    if (error2) return console.error(error2);
    //Tercera petición
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  })
})