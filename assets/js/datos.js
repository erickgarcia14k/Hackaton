const nombres = ["Luis Rodolfo", "Korina Velazquez", "Amizaday Hernández","Carla Garzón",
                "Edgar Antonio","Liliana Aguirre","Juan Luis Díaz De León","Francisco Daniel","Rosa Itzel",
                "Laura Martínez","Jeimy Lorena","Miriam Amaro","Ana Itzel","Stephanie Zamudio"
                ];

const $select = document.querySelector("#miSelect");

for (const nombre of nombres) {
    const opcion = Object.assign(document.createElement("option"), {
        value: nombre,
        text: nombre,
    });
    $select.appendChild(opcion);
}



const Nombres = ["Ciudad Innovadora", "Salud para el Bienestar", "Agricultura Urbana"];

const $selecciona = document.querySelector("#categoria");

for (const cat of Nombres) {
    const opciones = Object.assign(document.createElement("option"), {
        value: cat,
        text: cat,
    });
    $selecciona.appendChild(opciones);
}

const Equipos = ["ANGELINOS", "Aqua","Azcatl", "CALMANA", "Caminemos al mañana",
                "Chalmander","Cona_Aztahuacan","Conectores AAAP",
                "Cross Out","Cultiva City MX","Designers Programmers Apatlaco (DPA)",
                "DIABLEROS","Digital Technology in Xaltipac pillar","Double D","EcoByte",
                "EDC ELOTES, DORITOS Y CHILAQUILES","EGOA",
                "Frankis","Gabys Keto Cook","Happeat","Isaac Asimov",
                "JAO RoboGenius","Jugando y Aprendiendo","KAWI Crew","Ku náajaltik del Bosque!!!",
                "Las 4 fantásticas","Los Debuggers","LOS DUQ'S","Los Robles de Aragón!!!",
                "M1App","Mártires del código","Milpa Reales","MILPAROBOTICS",
                "NOGAL_1","Ñokama","PillPal","PIPITAS_1","Posacmetl","Psycode",
                "pureHeart","Pythoneros de Iztacalco","Robitech",
                "ROSMARINUS","Sabor Digital","sfghhg",
                "Skynet","SMA-Agrourbano","Tierra Blanca","TIKAL(´s)",
                "Titanes de la tecnología","Ultrasónics","Urbanistas de Contreras",
                "Xochiquetzal"];

const $team = document.querySelector("#equipo");

for (const t of Equipos) {
    const asignacion = Object.assign(document.createElement("option"), {
        value: t,
        text: t,
    });
    $team.appendChild(asignacion);
}




const calificaciones = ["1","2","3","4","5"];

// Obtén todos los elementos con la clase "puntaje"
const $puntos = document.querySelectorAll(".puntaje");

// Itera sobre cada elemento y agrega las opciones
for (const punto of $puntos) {
    for (const p of calificaciones) {
        const opc = Object.assign(document.createElement("option"), {
            value: p,
            text: p,
        });
        punto.appendChild(opc);
    }
}

$("#Enviar").click(function(){
    //remover todas las opciones excepto la primera
     
    $("#miSelect").val($("#frutas option:first").val());
    //establecer seleccionado la primera opcion
      $("#categoria").val($("#frutas option:first").val());
    $("#equipo").val($("#frutas option:first").val());
    
  })





   
