// nueva mensaje
function mensaje(){

  var demo = document.getElementById('demo');
  var texto = prompt('Escribelo tu nueva mensaje');

  if(texto == '' || texto == null){
    alert('Tu no escribiste una mensaje...');
    demo.innerHTML = 'Esperando tu escribir una mensaje...';
  }else{
    demo.innerHTML = texto;
  }
  
}

