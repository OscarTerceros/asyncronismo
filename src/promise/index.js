const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {  // Promise tiene dos parametros (resolve "si resuelve la promesa", reject "si es rechazado")
    if (true) {
      resolve('Hey! lo hicimos');
    } else {
      reject('Opps! no encontre la informaición');
    }
  });
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True!');
      }, 2000)
    } else {
      const error = new Error('Whooop!') //new Error crea una ruta detallada del error para poder ser solucionado 
      reject(error);
    }
  });
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err));

//correr pormesas encadenadas

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Array of results', response);
  })
  .catch(err => {
    console.error(err);
  })