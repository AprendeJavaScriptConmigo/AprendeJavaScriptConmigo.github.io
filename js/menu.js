window.addEventListener('load',start);

function start(){
    menurender();
}

function menurender(){
    var menudiv = document.querySelector('#menu');
    menudiv.innerHTML = `<nav class="navbar navbar-inverse">
                            <div class="container-fluid">
                              <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                  <span class="icon-bar"></span>
                                  <span class="icon-bar"></span>
                                  <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand" href="../index.html">
                                  <img class="img-responsive" src="../imagenes/js.png" style="max-width: 30px; margin-top: -7px;">
                                </a>
                              </div>
                              <div class="collapse navbar-collapse" id="myNavbar">
                                <ul class="nav navbar-nav">
                                  <li><a href="../crud/CRUD.html">CRUD</a></li>
                                  <li><a href="../crudJsModerno/CRUDmoderno.html">CRUDmoderno</a></li>
                                  <li><a href="../colorsRGB/colorsRGB.html">Colors RGB</a></li>
                                  <li><a href="../paises/paises.html">Países</a></li>
                                  <li><a href="../usuarios/usuarios.html">Usuarios</a></li>
                                </ul>
                                <ul class="nav navbar-nav navbar-right">
                                  <li><a href="../sobreMi/sobreMi.html"><span class="glyphicon glyphicon-user"></span> Sobre mi</a></li>
                                </ul>
                              </div>
                            </div>
                          </nav>`;
}