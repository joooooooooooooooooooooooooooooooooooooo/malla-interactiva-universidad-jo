let materias = {
  "Sociología Clásica": { aprobada: false, correlativas: ["Sociología Contemporánea"] },
  "Sociología Contemporánea": { aprobada: false, correlativas: ["Sociología de la Cultura"] },
  "Taller inicialescritura": { aprobada: false, correlativas: ["Sociología contemporanea "] },
  "Taller inicialescritura": { aprobada: false, correlativas: ["Taller de Lectura y Escritura de la Disciplina"] },
  "Taller inicialescritura": { aprobada: false, correlativas: [" intro comu"] },
  "Taller inicialescritura": { aprobada: false, correlativas: ["  portu 1"] },
  " psec": { aprobada:false, correlativas: [" socio contempo"] },
  "Taller inicial social": { aprobada: false, correlativas: ["lcc"] },
  "Taller inicial social": { aprobada: false, correlativas: [" optativa histo argentina o latin contemporanea"] },
  "Taller de Lectura y Escritura de la Disciplina": { aprobada: false, correlativas: ["portu 2"] },
  "lenguaje, cultura y comunicacion": { aprobada:false, correlativas: [" lenguaje, comunicacion y cultura escrita"] },
  "lenguaje,cultura y comunicacion escrita": { aprobada:false, correlativas: [" lenguaje, comunicacion y cultura de imagen"] },
  "lenguaje, comunicacion y cultura de imagen": { aprobada:false, correlativas: ["Taller de Diseño y Producción de Medios Gráficos I"] },
  "Taller de Diseño y Producción de Medios Gráficos I": { aprobada: false, correlativas: ["Taller de medios interactivos"] },
  "Introducción a la Comunicación": { aprobada: false, correlativas: ["Taller a escritura periodistica1"] },
  "Taller a escritura periodistica1": { aprobada: false, correlativas: ["Taller de Radio I"] },
  "Taller de Radio I": { aprobada: false, correlativas: ["Taller produ audiovisual1"] },
  "optativa histo argentina o latin contemporanea": { aprobada: false, correlativas: [" histo de las tec y medios d comu"] },
  "histo de las tec y medios d comu": { aprobada: false, correlativas: [" derecho y eco de los medios"] },
  "histo moderna y contempo": { aprobada: false, correlativas: [] },
  "Introducción a la Comunicación": { aprobada: false, correlativas: ["Metodología de la Investigación Cuantitativa"] },
  "Metodología de la Investigación Cuantitativa": { aprobada: false, correlativas: [" =: de cultura y comu"] },
  "Introducción a la Comunicación": { aprobada: false, correlativas: ["Organización y Comunicación"] },
  "Introducción a la Comunicación": { aprobada: false, correlativas: ["Concepciones Comunicación"] },
  "Introducción a la Comunicación": { aprobada: false, correlativas: ["Semiotica de los Medios Masivos"] }, 
  "Concepciones Comunicación": { aprobada: false, correlativas: ["planificacion y evaluacion de proyecto comu" ] },
  "Concepciones Comunicación": { aprobada: false, correlativas: ["comu mediatica"] },
  "Concepciones Comunicación": { aprobada: false, correlativas: ["comu masiva"] },
  "planificacion y evaluacion de proyecto comu": { aprobada: false, correlativas: ["practicas"] },
  "Taller de Radio I":{aprobada: false, correlativas: ["practicas "] },
  "planificacion y evaluacion de proyecto comu": {aprobada: false, correlativas: [" comu instu"] },
};


function aprobarMateria(materia) {
  materias[materia].aprobada = true;
  document.getElementById(materia).className = "materia aprobada";
  revisarCorrelativas();
}

function revisarCorrelativas() {
  for (let mat in materias) {
    if (!materias[mat].aprobada) {
      let habilitada = materias[mat].correlativas.every(correlativa => materias[correlativa].aprobada);
      if (habilitada) {
        document.getElementById(mat).classList.remove("bloqueada");
        document.getElementById(mat).classList.add("habilitada");
        document.getElementById(mat).style.pointerEvents = "auto";
      }
    }
  }
}
