// Tarea N3
// Implementar el codigo dado con Async-Await
//Por Francisco Riofio T.
// Desarrollo de Aplicaciones Web 2


let var_nombre = [{
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

  
  const v_holaProceso = id =>{
    return new Promise((resolve, reject)=>{
      if(var_nombre.find( var_nombre => var_nombre.id === 1)){
        console.log('Hola Francisco Riofrio');
        setTimeout(()=>{
          resolve(v_hablarProceso(id))
      },2000)
      }else{
        reject('..ERROR...')
      }
    })
  };
  
  const v_hablarProceso = id =>{
    return new Promise((resolve, reject)=>{
      if(var_hablar.find( var_hablar => var_hablar.id === 1)){
        console.log('bla');
        setTimeout(()=>{
          resolve(v_adiosProceso(id))
      },2000)
      }else{
        reject('..ERROR...')
      }
    })
  };
  
  const v_adiosProceso = id =>{
    return new Promise((resolve, reject)=>{
      if(var_despedida.find(var_despedida => var_despedida.id === 1)){
        resolve('Adios Frncisco Riofrio');
      }else{
        reject('....ERROR.......')
      }
    })
  };
  
  console.log('............Iniciando proceso.........')
  async function getProcesos(){
      let mis_procesos = await v_holaProceso();
      console.log(mis_procesos)
      console.log('..........Terminando Proceso.............')
  }
  getProcesos();
  
  
