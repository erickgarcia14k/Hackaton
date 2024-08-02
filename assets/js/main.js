function SendFormGoogleSheets() {

    // Obtén los valores de los campos
    const nombre = document.querySelector('[name="nombre_juez"]').value;
    const categoria = document.querySelector('[name="categoria"]').value;
    const equipo = document.querySelector('[name="equipo"]').value;
    const CA1 = document.querySelector('[name="CA1"]').value;
    const CA2 = document.querySelector('[name="CA2"]').value;
    const CA3 = document.querySelector('[name="CA3"]').value;
    const CB1 = document.querySelector('[name="CB1"]').value;
    const CB2 = document.querySelector('[name="CB2"]').value;
    const CB3 = document.querySelector('[name="CB3"]').value;
    const CC1 = document.querySelector('[name="CC1"]').value;
    const CC2 = document.querySelector('[name="CC2"]').value;
    const CC3 = document.querySelector('[name="CC3"]').value;
  

     // Verifica si los campos están llenos
     if (nombre && categoria && equipo && CA1 && CA2 && CA3 && CB1 && CB2 && CB3 && CC1 && CC2 && CC3) {
     $.ajax({
         url: 'https://script.google.com/macros/s/AKfycbyiUwqJ0wb8PmiL0KEVc1c6TH21gfCFleeV_VyCNPyYGhCtYDJtNS8HZ_tggHGAyqUr7Q/exec',
         type: 'post',
         data: $("#my-google-sheet").serializeArray(),
         success: function () {
             alert("Calificación Enviada");
         },
         error: function () {
             alert("Error en el Registro :(");
         }
     });
   }else {
         alert("Por favor, completa todos los campos antes de enviar el formulario.");
     }
 }

 


