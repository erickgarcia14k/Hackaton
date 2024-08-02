
 function SendFormGoogleSheets() {

    // Obtén los valores de los campos
    const nombre = document.querySelector('[name="nombre_juez"]').value;
    const categoria = document.querySelector('[name="categoria"]').value;
    const equipo = document.querySelector('[name="equipo"]').value;
  
  

     // Verifica si los campos están llenos
     if (nombre && categoria && equipo ) {
     $.ajax({
         url: 'https://script.google.com/macros/s/AKfycbyM-3Kuh2FQFpHgHthebLkMxVju_0yZMI1Mcv47EjozNiJcsh82vVHUpxQ47bxDrdbUfw/exec',
         type: 'post',
         data: $("#my-google-sheet").serializeArray(),
         success: function () {
             alert("Calificación Enviada..");
         },
         error: function () {
             alert("Error en el Registro :(");
         }
     });
   }else {
         alert("Por favor, completa todos los campos antes de enviar el formulario.");
     }
 }

 




 


