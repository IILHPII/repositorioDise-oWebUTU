function abrirVentanaLogin() {
  const url = 'html/loginGit.html';
  const ancho = 400;
  const alto = 442;
  const opciones = `width=${ancho},height=${alto},left=${(screen.width - ancho) / 2},top=${(screen.height - alto) / 2},resizable=no`;

  window.open(url, '_blank', opciones);
}


function loginAndUpload(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  const email = document.getElementById('emailid').value;
  const password = document.getElementById('passwordid').value;
  const filesToUpload = document.getElementById('fileInput').files;

  // Aquí puedes realizar la lógica para autenticarte en la API con el email y la contraseña

  // Luego, puedes llamar a la función createFolderAndUploadFiles pasando la carpeta y los archivos seleccionados
  const folderPath = 'nombre-carpeta'; // Cambiar al nombre de la carpeta deseada
  createFolderAndUploadFiles(folderPath, filesToUpload);
}
