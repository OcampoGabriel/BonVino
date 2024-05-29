async function buscarDatos(){
  const res = await fetch(`http://localhost:8080/usuarios`);
  const datos = await res.json();
  
document.getElementById("button-login").addEventListener("click", function () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;



  if (username === "admin" && password === "admin") {
    window.location.href = "../inicio.html"; 
  }

  datos.forEach(usuario => {
    if(usuario.username === username && usuario.password === password){
      window.location.href = "../pagEnofilo/inicioEnofilo.html";
      if(usuario.notificacionPendiente.length !== 0){
        let contenido = `Hola ${usuario.username}, hubo una actualizacion reciente en las siguientes bodegas: `
        usuario.notificacionPendiente.forEach(bodegaActualizada => {
          contenido += `\n · ${bodegaActualizada}`
        })
        window.alert(contenido)
      }
    }
      
  });
});

}

buscarDatos()

