function ponerFoco(){
    nombre.focus();          //PONE EL FOCO AL CARGAR LA PAGINA   ---> NOMBRE NAME + FOCUS
}




function validarForm(){
    var nombre= document.getElementById("nombre").value;            //GUARDA EN LAS VARIABLES LOS DATOS INTRODUCIDOS EN EL CAMPO
    var ape= document.getElementById("ape").value;
    var dni= document.getElementById("dni").value;
    var dir= document.getElementById("dir").value;
    var tlfn= document.getElementById("tlfn").value;
    var maxNueve= document.getElementById("tlfn").value.length;    //GUARDA EL NUMERO DE CARACTERES QUE HAS ESCRITO EN EL CAMPO TLFN
    var pro= document.getElementById("pro");




    var soloLetras = /^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ\s]+$/;                    //EXPRESION REGULAR PARA NOMBRE ---> SOLO ACEPTA LETRAS Y ESPACIO
    var num= /^[0-9]+$/;                                              //EXPRESION REGULAR PARA UN TELEFONO --> SOLO ACEPTA NUMEROS
    var dni2= /\d{8}[a-zA-Z]/;                                        //EXPRESION REGULAR PARA DNI



    var uno= document.getElementById("uno").checked;
    var dos= document.getElementById("dos").checked;               //CHEKEA SI HAS MARCADO EL RADIO
    var tres= document.getElementById("tres").checked;
    var cuatro= document.getElementById("cuatro").checked;
    var cinco= document.getElementById("cinco").checked;
    var seis= document.getElementById("seis").checked;
    var siete= document.getElementById("siete").checked;
    var ocho= document.getElementById("ocho").checked;



    var nueve= document.getElementById("nueve").checked;
    var diez= document.getElementById("diez").checked;                //CHEKEA SI HAS MARCADO EL CHECKBOX
    var once= document.getElementById("once").checked;
    var doce= document.getElementById("doce").checked;
    var trece= document.getElementById("trece").checked;
    var catorce= document.getElementById("catorce").value;







    if(nombre == ""){                                               //SI ESTA VACIO, SACA ALERT Y PONE EL FOCO
        alert("Campo \"NOMBRE\" esta vacio");
        document.formu.nombre.focus();

    } else if(!soloLetras.exec(nombre)){                              //SI EL PATRON "!NO COINCIDE" CON EL NOMBRE INTRODUCIDO CON QUE SOLO LLEVE LETRAS ENTRA
        alert("Campo \"NOMBRE\" solo acepta letras y espacios en blanco");
        document.formu.nombre.focus();

    } else if(ape == ""){                                               //SI ESTA VACIO, SACA ALERT Y PONE EL FOCO
        alert("Campo \"APELLIDO\" esta vacio");
        document.formu.ape.focus();

    } else if(!soloLetras.exec(ape)){                              //SI EL PATRON "!NO COINCIDE" CON EL NOMBRE INTRODUCIDO CON QUE SOLO LLEVE LETRAS ENTRA
        alert("Campo \"APELLIDO\" solo acepta letras y espacios en blanco");
        document.formu.ape.focus();

    } else if(dni == ""){                                               //SI ESTA VACIO, SACA ALERT Y PONE EL FOCO
        alert("Campo \"DNI\" esta vacio");
        document.formu.ape.focus();

    } else if(!dni2.exec(dni)){                                //SI EL PATRON "!NO COINCIDE" CON EL DNI INTRODUCIDO CON QUE SOLO SEA UN DNI
        alert("Campo \"DNI\" no contiene un dni");
        document.formu.dni.focus();

    } else if(dir == ""){                                               //SI ESTA VACIO, SACA ALERT Y PONE EL FOCO
        alert("Campo \"DIRECCION\" esta vacio");
        document.formu.nombre.focus();

    } else if(tlfn == ""){
        alert("Campo \"TELEFONO\" esta vacio");                      //SI ESTA VACIO, SACA ALERT Y PONE EL FOCO
        document.formu.tlfn.focus();

    } else if(maxNueve != 9){
        alert("Campo \"TELEFONO\" lleva solo 9 numeros");           //EL CAMPO TELEFONO SOLO LLEVA 9 NUMEROS.
        document.formu.tlfn.focus();

    } else if(!num.exec(tlfn)){
        alert("Datos alfanumericos. Introduzca \"TELEFONO\" DE 9 DIGITOS");    //SI EL CAMPO NO ES NUMERICO ENTRA
        document.formu.tlfn.focus();

    } else if(!pro.value){                                                  //SI EL CAMPO PROVINCIA NO ESTA MARCADO ENTRA "EL CAMPO PROVINCIA NO CUENTA"
        alert("Campo \"PROVINCIA\" no esta marcado");

    } else if(!uno && !dos && !tres && !cuatro){                              //SI EL CAMPO NO ESTA MARCADO ENTRA
        alert("Campo \"RADIO\" con pregunta 1 no esta marcado");

    } else if(!cinco && !seis && !siete && !ocho){                              //SI EL CAMPO NO ESTA MARCADO ENTRA
        alert("Campo \"RADIO\" con pregunta 2 no esta marcado");

    } else if(!nueve && !diez && !once && !doce && !trece){                 //SI EL CAMPO NO ESTA MARCADO ENTRA
        alert("Campo \"CHECKBOX\" con valoracion no esta marcado");

    } else if(catorce == ""){                                             //SI EL CAMPO ESTA VACIO ENTRA
        alert("Campo \"COMENTARIO\" esta vacio");

    } else {                                                        //SI ESTA TODO VALIDADO CORRECTAMENTE ENVIA EL FORMULARIO
        document.formu.submit();
        alert("Formulario enviado");

        if(dos && seis){
          alert("ENORABUENA!!! HAS SACADO UN 10");        //LAS VARIABLES DOS Y SEIS SON LAS RESPUESTAS CORRECTAS

        } else if(dos){
          alert("Has acertado 1. Su nota es un 5")

        } else if(seis){
          alert("Has acertado 1. su nota es de un 5");

        } else {                                            //DE LO CONTRARIO UN CERO
          alert("Lo siento no has acertado ninguna. Tu nota en un 0");
        }


}

          //HE INTENTADO METER LAS IMAGENES CON JAVASCRIPT CON ESTAS 4 FORMAS PERO NO FUNCIONA NINGUNA Y PROBE CON RUTA ABSOLUTA Y RELATIVA Y NADA
//---------------------------------------------------------------------------------------------------------------------------->


   document.getElementById("contenedor").style.backgroundImage= "url('IMG/false.png')";


//---------------------------------------------------------------------------------------------------------------------------->


    var image= new Image();
    image.src= "IMG/false.png";
    document.getElementById("contenedor").appendChild(image);


//---------------------------------------------------------------------------------------------------------------------------->


   document.formu.contenedor.innerHTML= '<img src="IMG/false.png">';


//---------------------------------------------------------------------------------------------------------------------------->


    var a= document.createElement("img");
    a.src= "IMG/false.png";
    a.width= 500;
    a.height= 500;
    document.contenedor.appendChild(a);


}
