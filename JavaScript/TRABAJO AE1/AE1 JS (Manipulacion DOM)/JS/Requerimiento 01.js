
var contenedor = document.querySelector(".contenedor");
var formu= document.createElement("form");
var div = document.createElement("div");

//------------------------------------------------------------------------------------------------>
//------------------------------------------------------------------------------------------------>
//------------------------------------------------------------------------------------------------>

//H1
function crearH1(formu, texto) {
  var h1 = document.createElement("h1");
  h1.textContent = texto;
  formu.appendChild(h1);
}

//H3
function crearH3(formu, texto) {
  var h3 = document.createElement("h3");
  h3.textContent = texto;
  formu.appendChild(h3);
}

//H5
function crearH5(formu, texto) {
  var h5= document.createElement("h5");
  h5.textContent = texto;
  formu.appendChild(h5);
}

//PARRAFO
function crearP(formu, texto) {
  var p = document.createElement("p");
  p.textContent = texto;
  p.id="oli";
  formu.appendChild(p);
}

//SPAN
function crearSpan(formu, texto) {
  var span = document.createElement("span");
  span.textContent = texto;
  formu.appendChild(span);
}


//INPUT
function crearInput(formu, texto) {
  var input = document.createElement("input");
  input.placeholder= texto;
  formu.appendChild(input);
  crearSalto(formu);crearSalto(formu);
}

//INPUT ENVIAR
function crearInputEnvi(formu, value) {
  var input = document.createElement("input");
  input.type="submit";
  input.value=value;
  formu.appendChild(input);
}

//INPUT BORRAR
function crearInputBorr(formu, value) {
  var input = document.createElement("input");
  input.type="reset";
  input.value=value;
  input.style.marginLeft="40px";
  formu.appendChild(input);
}

//SALTO DE LÍNEA
function crearSalto(formu) {
  var salto = document.createElement("br");
  formu.appendChild(salto);
}

//SELECT OPTION
function crearSelect(formu){
  var select= document.createElement("select");

  var opt= document.createElement("option");
  opt.value= "";
  opt.disabled=true;
  opt.selected=true;
  var texto= document.createTextNode("Provincia");
  opt.appendChild(texto);

  var option1= document.createElement("option");
  option1.value="opt1";
  var texto= document.createTextNode("Madrid");
  option1.appendChild(texto);

  var option2= document.createElement("option");
  option2.value="opt2";
  var texto= document.createTextNode("Castilla y León");
  option2.appendChild(texto);


  select.appendChild(opt);
  select.appendChild(option1);
  select.appendChild(option2);

  formu.appendChild(select);
}

//INPUT RADIO
function crearRadio(formu, name, texto){
  var radio= document.createElement("input");
  radio.type= "radio";
  radio.name= name;
  formu.appendChild(radio);
  crearP(formu, texto);
  crearSalto(formu);
}

//INPUT CHECKBOX
function crearCheckbox(formu, texto) {
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  formu.appendChild(checkbox);
  crearP(formu, texto);
  crearSalto(formu);
}

//IMAGEN
function agregaImagen(formu, url) {
  var imagen = document.createElement("img");
  imagen.src = url;
  imagen.style.width="30px";
  imagen.style.height="30px";
  imagen.style.position="relative";
  imagen.style.left="10px";
  imagen.style.top="10px";
  formu.appendChild(imagen);
}

//------------------------------------------------------------------------------------------------>
//------------------------------------------------------------------------------------------------>
//------------------------------------------------------------------------------------------------>

//CREA UN CONTENEDOR CON UN FORMULARIO
contenedor.append(formu);

//-------------------------------------------------------------------------------------------------->

//LAMADAS A LAS FUNCIONES CON PARAMETROS
crearH1(formu, "EXÁMEN ONLINE TIPO TEST 2ºDAW EDIX");   crearSalto(formu);crearSalto(formu);

crearH3(formu, "DATOS PERSONALES DEL ALUMNO");
crearInput(formu, "Nombre");
crearInput(formu, "Apellidos");
crearInput(formu, "DNI");
crearInput(formu, "Dirección");
crearInput(formu, "Teléfono");

//-------------------------------------------------------------------------------------------------->

crearSelect(formu);

//-------------------------------------------------------------------------------------------------->

crearH3(formu, "EXAMEN");       crearSalto(formu);
crearH5(formu, "1º. ¿Cómo enlazamos un archivo CSS a nuestro documento HTML?");
crearRadio(formu, "opc1", "a. Con la etiqueta div");
crearRadio(formu, "opc1", "b. Usando la etiqueta link desde la cabezera de cada documento.");
crearRadio(formu, "opc1", "c. Con al etiqueta a href");
crearRadio(formu, "opc1", "d. Usando la etiqueta script");  crearSalto(formu);crearSalto(formu);

crearH5(formu, "2º. ¿Con que extensión guardamos nuestra hoja de estilos?");
crearRadio(formu, "opc2", "a. .style");
crearRadio(formu, "opc2", "b. .css");
crearRadio(formu, "opc2", "c. .cs");
crearRadio(formu, "opc2", "d. .link");

//-------------------------------------------------------------------------------------------------->

crearSalto(formu);crearSalto(formu);    crearSalto(formu);crearSalto(formu);

//-------------------------------------------------------------------------------------------------->

crearH5(formu, "¿QUÉ VALORACIÓN DAS A HACER UN EXAMEN ONLINE?");
crearCheckbox(formu, "Muy mala");
crearCheckbox(formu, "Mala");
crearCheckbox(formu, "Mediocre");
crearCheckbox(formu, "Buena");
crearCheckbox(formu, "Muy buena");    crearSalto(formu);crearSalto(formu);

//-------------------------------------------------------------------------------------------------->

crearInputEnvi(formu, "Enviar");
agregaImagen(formu, "IMG/true.png");
crearInputBorr(formu, "Borrar");
agregaImagen(formu, "IMG/false.png");
