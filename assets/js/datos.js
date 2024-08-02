const nombres = ["Parzibyte", "Terry", "Byleth", "Leon", "Shovel Knight"];

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

const Equipos = ["ANGELINOS", "Aqua", "CALMANA", "Caminemos al mañana",
     "Chalmander Knight"," Cona_Aztahuacan","Conectores AAAP",
    "Cross Out","Designers Programmers Apatlaco (DPA)",
"Double D","EDC ELOTES, DORITOS Y CHILAQUILES","EcoByte",
    "Frankis","Gabys Keto Cook","Happeat",
    "JAO RoboGenius","Jugando y Aprendiendo","Ku náajaltik del Bosque!!!",
    "LOS DUQ'S","Las 4 fantásticas","Los Debuggers"];

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





   