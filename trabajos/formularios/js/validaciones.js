window.onload=function(){
    document.getElementById('formulario').onsubmit=function(){
        let nombre=document.getElementById('nombreid').value;
        let apellido=document.getElementById('apellidoid').value;
        let telefono=document.getElementById('telefonoid').value;
        let email=document.getElementById('emailid').value;
        let usuario=document.getElementById('usuarioid').value;
        let password=document.getElementById('passwordid').value;
        let passwordConfirm=document.getElementById('passwordConfirmid').value;

        if(password==passwordConfirm && nombre.length>0 && apellido.length>0 && telefono.length>0 && email.length>0 && usuario.length>0){
          alert("Se ingresaron los datos correctamente");
          return true;
        }else{
          alert("Error en los datos");
          return false;
        }
    }
}