function changeRange() {
  // Obtenga valores R, G, B y convierta cadenas en enteros.
  var r = parseInt(document.getElementById("r").value);
  var g = parseInt(document.getElementById("g").value);
  var b = parseInt(document.getElementById("b").value);
   
  // Generar color. Ejemplo: #20b9ff
  var color = "#" + hex(r) + hex(g) + hex(b);
   
  // Cambiar color de fondo y texto.
  document.body.style.backgroundColor = color;
  document.getElementById("hex-label").innerText = color;
  document.getElementById("r-label").innerText = r;
  document.getElementById("g-label").innerText = g;
  document.getElementById("b-label").innerText = b;
   


   
  if (r < 100 && g < 100 && b < 100) {
      document.getElementById("container").style.color = "white";
  } else {
      document.getElementById("container").style.color = "black";
  }
}

function hex(v) {
  // Obtener números hexadecimales.
  var hex = v.toString(16);
  if (v < 16) {
      hex = "0" + hex;
  }
  return hex;
}