function abrirVentanaLogin() {
  const url = 'html/loginGit.html';
  const ancho = 400;
  const alto = 442;
  const opciones = `width=${ancho},height=${alto},left=${(screen.width - ancho) / 2},top=${(screen.height - alto) / 2},resizable=no`;

  window.open(url, '_blank', opciones);
}

const inputElement = document.getElementById('fileInput');
  const pond = FilePond.create(inputElement);
  
  // Escuchar eventos de archivo seleccionado
  pond.on('addfile', (event) => {
    const file = event.file;
    console.log('Archivo seleccionado:', file.filename);
    // Realizar operaciones con el archivo seleccionado
});

function uploadFiles() {
  var files = document.getElementById('fileInput').files;
  var email = document.getElementById('emailid').value;
  var password = document.getElementById('passwordid').value;

  var repoPath = 'https://github.com/IILHPII/repositorioDise-oWebUTU.git'; // Ruta del repositorio
  var cloneOptions = {
    "--depth": 1,
    "--no-single-branch": null,
    "--branch": "master"
  };

  var repo = Git().silent(true);
  var repository;
  var folderName = 'trabajos';

  repo.clone(repoPath, '', cloneOptions)
    .then(function (repo) {
      repository = repo;
      return repository.checkout('master');
    })
    .then(function () {
      var existingFolders = repository.listFiles('master', folderName);
      var newFolderName = folderName;
      var folderNumber = 1;

      while (existingFolders.includes(newFolderName)) {
        newFolderName = folderName + folderNumber;
        folderNumber++;
      }

      return repository.mkdir(newFolderName); // Crea una nueva carpeta con el nombre único
    })
    .then(function () {
      return repository.add(files, { "--": folderName });
    })
    .then(function () {
      return repository.commit('Subida de archivos a la carpeta "' + newFolderName + '"');
    })
    .then(function () {
      return repository.push(['-u', 'origin', 'master'], {
        username: email,
        password: password
      });
    })
    .then(function () {
      var resultDiv = document.getElementById('resultDiv');
      var paragraph = document.createElement('p');
      paragraph.textContent = 'Archivos subidos exitosamente en la carpeta "' + newFolderName + '"';
      resultDiv.appendChild(paragraph);
    })
    .catch(function (error) {
      console.error('Error al subir los archivos:', error);
    });
}
