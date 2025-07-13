function mostrarInfo(materia) {
  let info = "";

  switch(materia) {
    case 'Matemática I':
      info = "Correlativas: Ninguna. Estado: Pendiente.";
      break;
    case 'Programación I':
      info = "Correlativas: Matemática I. Estado: Cursando.";
      break;
    case 'Álgebra':
      info = "Correlativas: Matemática I. Estado: Pendiente.";
      break;
    default:
      info = "Materia no encontrada.";
  }

  document.getElementById("infoMateria").innerHTML = `<strong>${materia}</strong><br>${info}`;
}
