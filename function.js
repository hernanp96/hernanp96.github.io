var informacion = document.getElementById("second")

var l = document.getElementById("btnmail");
var m = document.getElementById("btnaddress");
var n = document.getElementById("btnbirth");
var o = document.getElementById("btntel");

var a = document.getElementById("infotrabajos");
var b = document.getElementById("infoestudios");
var c = document.getElementById("infoherramientas");
var d = document.getElementById("infootros");

var w = document.getElementById("b1");
var x = document.getElementById("b2");
var y = document.getElementById("b3");
var z = document.getElementById("b4");

var menucontent = document.getElementById("menu-content");

function datosdisplayfade(){
  document.getElementById("datosdisplay").classList.toggle("fade")
}

function mostrarmail(){
  document.getElementById("datosdisplay").innerHTML = "hernan96perez@gmail.com";
}

function mostrardireccion(){
  document.getElementById("datosdisplay").innerHTML = "Lezica 4067, Almagro, Ciudad Autónoma de Buenos Aires";
}

function esconder(){
  document.getElementById("hernan").classList.toggle("fade");
}

function fadeout(){
  setTimeout(esconder, 500);
}

function mail(){
    mostrarmail();
    if (m.classList.contains("fondoboton") || n.classList.contains("fondoboton") || o.classList.contains("fondoboton")){
      l.classList.add("fondoboton");
      m.classList.remove("fondoboton");
      n.classList.remove("fondoboton");
      o.classList.remove("fondoboton");
    }
  
}

function direccion(){
    mostrardireccion();
    if (l.classList.contains("fondoboton") || n.classList.contains("fondoboton") || o.classList.contains("fondoboton")){
      m.classList.add("fondoboton");
      l.classList.remove("fondoboton");
      n.classList.remove("fondoboton");
      o.classList.remove("fondoboton");
    }

}

function cumpleanos(){
    document.getElementById("datosdisplay").innerHTML = "3 de Mayo, 1996";
    if (l.classList.contains("fondoboton") || m.classList.contains("fondoboton") || o.classList.contains("fondoboton")){
      n.classList.add("fondoboton");
      l.classList.remove("fondoboton");
      m.classList.remove("fondoboton");
      o.classList.remove("fondoboton");
    }
}

function tel(){
    document.getElementById("datosdisplay").innerHTML = "(+54) 11 5 345 2900";
    if (l.classList.contains("fondoboton") || n.classList.contains("fondoboton") || m.classList.contains("fondoboton")){
      o.classList.add("fondoboton");
      l.classList.remove("fondoboton");
      n.classList.remove("fondoboton");
      m.classList.remove("fondoboton");
    }
}

function estudios() {
    var x = document.getElementById("listaestudios");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function exp() {
    var x = document.getElementById("testbt");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}  

function otrosts() {
    var x = document.getElementById("otros");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function pioix(){
  document.getElementById("menu-content").innerHTML = "Armado, reparación y mantenimiento de equipos informáticos y multimedia (impresoras, proyectores, routers, parlantes, etc), Atención al usuario vía teléfono, presencial o correo electrónico</li> <li>Cableado estructurado de red</li><li>Capacitación y supervisión de pasantes en las tareas mencionadas";

}

///Cambiar colores de botones
  
// Botones columna 1
function boton1(){

    w.classList.add("fondoboton");

    if (x.classList.contains("fondoboton") || y.classList.contains("fondoboton") || z.classList.contains("fondoboton")){
      x.classList.remove("fondoboton");
      y.classList.remove("fondoboton");
      z.classList.remove("fondoboton");
    }

    if (a.classList.contains("hidden")){
      a.classList.remove("hidden");
      b.classList.add("hidden");
      c.classList.add("hidden");
      d.classList.add("hidden");
    }
}

function boton2(){
  x.classList.add("fondoboton");

  if (w.classList.contains("fondoboton") || y.classList.contains("fondoboton") || z.classList.contains("fondoboton")){
    w.classList.remove("fondoboton");
    y.classList.remove("fondoboton");
    z.classList.remove("fondoboton");
  }

  if (b.classList.contains("hidden")){
    b.classList.remove("hidden");
    a.classList.add("hidden");
    c.classList.add("hidden");
    d.classList.add("hidden");
  }
}

function boton3(){
  y.classList.add("fondoboton");

  if (w.classList.contains("fondoboton") || x.classList.contains("fondoboton") || z.classList.contains("fondoboton")){
    w.classList.remove("fondoboton");
    x.classList.remove("fondoboton");
    z.classList.remove("fondoboton");
  }

  if (c.classList.contains("hidden")){
    c.classList.remove("hidden");
    a.classList.add("hidden");
    b.classList.add("hidden");
    d.classList.add("hidden");
  }
}

function boton4(){
  z.classList.add("fondoboton");

  if (w.classList.contains("fondoboton") || y.classList.contains("fondoboton") || z.classList.contains("fondoboton")){
    w.classList.remove("fondoboton");
    y.classList.remove("fondoboton");
    x.classList.remove("fondoboton");
  }

  if (d.classList.contains("hidden")){
    d.classList.remove("hidden");
    a.classList.add("hidden");
    b.classList.add("hidden");
    c.classList.add("hidden");
  }
}

function enviar(){
  var correo = document.getElementById("correo");
  var nombre = document.getElementById("nombre");
  var mensaje = document.getElementById("mensaje");
  var error = document.getElementById("error");

  if (mensaje.value == null || correo.value == null || nombre.value == null) {
    error.classList.remove("hidden");
  }
  if (correo.value !="" || nombre.value !="" || mensaje.value !="") {
    correo.value = "";
    mensaje.value = "";
    nombre.value = "";
    mensaje.placeholder = "¡Mensaje enviado!";
  }
   


}

