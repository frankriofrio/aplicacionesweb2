// Tarea N3
// Implementar el codigo dado con Promesas
//Por Francisco Riofio T.
// Desarrollo de Aplicaciones Web 2


let nombre_persona = [{
    id:1,
  //  var_nombre: 'Francisco'
  }]
  let var_hablar = [{
    id:1,
  //  var_hablar: 'bla'
  }]
  let var_despedida = [{
    id:1,
  //  var_despedida: 'adios'
  }]
  
  const holaProceso = id =>{
    return new Promise((resolve, reject)=>{
      if(nombre_persona.find( nombre_persona => nombre_persona.id === 1)){
        console.log('Hola Francisco');
        resolve(hablarProceso(id))
      }else{
        reject('ERROR')
      }
    })
  };
  
  const hablarProceso = id =>{
    return new Promise((resolve, reject)=>{
      if(var_hablar.find( var_hablar => var_hablar.id === 1)){
        console.log('bla');
        resolve(adiosProceso(id))
      }else{
        reject('ERROR')
      }
    })
  };
  
  const adiosProceso = id =>{
    return new Promise((resolve, reject)=>{
      if(var_despedida.find( var_despedida => var_despedida.id === 1)){
        resolve('Adios Francisco');
      }else{
        reject('ERROR')
      }
    })
  };
  
  console.log('.......Iniciando Proceso.....')
  holaProceso(1)
  .then(res=>{
      return res;
  })
  .then(var_hablar => {
       return var_hablar;
  })
  .then(adios=>{
      console.log(adios)
      console.log('.........Terminando Proceso...........')
  })
  .catch (error =>{
      console.error(error);
  })
  