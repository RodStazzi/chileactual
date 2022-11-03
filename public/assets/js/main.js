const form = document.querySelector('form');
const validacionCorrecta = true;
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const [{value: to}, {value: subject}, {value: text}] = event.target;

  console.log(event.target);
  // validar(to)
  if(!to || !subject || !text || validacionCorrecta != true) {
    return alert('Todos los datos son requeridos');
  }
  form.submit();
});

const validar = (to)=>{
  let regexmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
  if(regexmail.test(to)== false){
    document.querySelector(".errorMail").innerHTML = "El mail es requerido";
    validacionCorrecta = false;
  }
  return validacionCorrecta;
}


//     if(resultado == true){
//       exito();
//       limpiarDatos();
//       form.submit();
//     }


// let limpiar = ()=>{
//   document.querySelector(".resultado").innerHTML = "";
//   document.querySelector(".errorMail").innerHTML = "";
//   document.querySelector(".errorAsunto").innerHTML = "";
//   document.querySelector(".errorTexto").innerHTML = "";
  
// }

// let limpiarDatos = () => {
//   document.getElementById("mail").value = "";
//   document.getElementById("asunto").value = "";
//   document.getElementById("texto").value = "";
// }

// let exito = () => {
//   document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito. ";
// }
// let validar = (mail, asunto, texto)=>{
//   let validacionCorrecta = true;
//   let expresionRegular = /[a-zA-Z]\w+/;

//   if(mail=="" || expresionRegular.test(mail)== false){
//     document.querySelector(".errorMail").innerHTML = "El mail es requerido";
//     validacionCorrecta = false;
//   }

//   if(asunto=="" || expresionRegular.test(asunto)== false){
//     document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
//     validacionCorrecta = false;
//   }

//   if(texto=="" || expresionRegular.test(texto)== false){
//     document.querySelector(".errorTexto").innerHTML = "El mensaje es requerido";
//     validacionCorrecta = false;
//   }
//   return validacionCorrecta;
// }
//   let form = document.getElementById("formulario");
//   form.addEventListener("submit", function(event){
//     event.preventDefault();
//     limpiar();
//     let mail = document.getElementById("mail").value;
//     let asunto = document.getElementById("asunto").value;
//     let texto = document.getElementById("texto").value;
    
//     let resultado = validar(mail, asunto, texto);
//     if(resultado == true){
//       exito();
//       limpiarDatos();
//       form.submit();
//     }
  
//   })