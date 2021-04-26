
const numeroPreguntas = document.querySelector(".numero-preguntas");
const textPreguntas = document.querySelector(".texto-preguntas");
const opcionesContenedor = document.querySelector(".opciones-contenedor");
const indicadorRe= document.querySelector(".indicardor-respuesta");
const casa= document.querySelector(".inicio-global");
const testCasa= document.querySelector(".preguntas-global");
const resultadoCasa= document.querySelector(".resultado-global");



let contadorTest = 0;
let actualTest;
let testDisponible = [];
let opcionesDisponibles = [];
let respuestaCorrecta = 0;
let intentos = 0;

//metemos la pregunta en el array

function  setTestDisponible(){
const  totalPreguntaas = test.length;
for(let i=0; i<totalPreguntaas; i++){
    testDisponible.push(test[i])
}

}
function  getNuevasPreguntas(){
  numeroPreguntas.innerHTML = "PREGUNTA " + (contadorTest + 1) + " DE " + test.length;
  const preguntasinicio = testDisponible[Math.floor(Math.random() * testDisponible.length )]
   actualTest = preguntasinicio;
   textPreguntas.innerHTML = actualTest.q;
   const index1 =testDisponible.indexOf(preguntasinicio);
     testDisponible.splice(index1,1)
  
//opciones 
const optionVer= actualTest.opciones.length//esta variable optionVer permitira jugar con las opciones de respuesta
for(let i=0; i<optionVer;i++){
    opcionesDisponibles.push(i)
}
opcionesContenedor.innerHTML='';
let animationDeLay= 0.2;
for(let i=0; i<optionVer; i++){
const repindex = opcionesDisponibles[Math.floor(Math.random() * opcionesDisponibles.length )];
const index2 = opcionesDisponibles.indexOf(repindex);
opcionesDisponibles.splice(index2,1)


    const opciones = document.createElement("div")
    opciones.innerHTML = actualTest.opciones[repindex];
    opciones.id = repindex;
    opciones.style.animationDelay = animationDeLay + "s";
    animationDeLay = animationDeLay + 0.2;
    opciones.className ="opciones";
    opcionesContenedor.appendChild(opciones)
    opciones.setAttribute("onclick","getResult(this)"); 
}

 contadorTest++
 
}

function getResult(element){

    const id = parseInt(element.id);
    

    if(id === actualTest.respuesta){
        //le damos nombre a la clase y con css editamos para darle el color verde o rojo
       element.classList.add("correcto");

       updateIndicadorRespuestas("correcto");
       respuestaCorrecta++;
       console.log("correcto :" + respuestaCorrecta)
    }
    else{
        element.classList.add("incorrecto");
        updateIndicadorRespuestas("incorrecto");
    }
    unclickableOptions();
}
//solo un click
function unclickableOptions(){
 const opcionlen = opcionesContenedor.children.length;
 for(let i=0; i<opcionlen; i++){
    opcionesContenedor.children[i].classList.add("ya-respondio");
 }
}
function indicadorRespuestas(){
    indicadorRe.innerHTML='';
    const totalre= test.length;
    for(let i=0; i<totalre; i++){
        const indica= document.createElement("div");
        indicadorRe.appendChild(indica);
    }
    intentos++;
}


function  updateIndicadorRespuestas(markType){
    indicadorRe.children[contadorTest-1].classList.add(markType)

}

function next(){
if(contadorTest === test.length){
    console.log("preguntas terminadas")
    testTerminado();
}else{
   getNuevasPreguntas();
}

}  
function bthome(){
    resultadoCasa.classList.add("esconder");
    casa.classList.remove("esconder");
    location.reload();
}

function testTerminado(){
testCasa.classList.add("esconder");
resultadoCasa.classList.remove("esconder");
  resultadoTest();
  
}
function bienMAL(){
    const mala = parseInt(respuestaCorrecta-intentos);
    const buena = parseInt(respuestaCorrecta);
      var A= "aprobado";
      var B="reprobado";
 
    if(buena>mala){
      A  ;
    }else{
      B  ;
    }
}
//obterner resultado
function resultadoTest(){
resultadoCasa.querySelector(".total-preguntas").innerHTML = test.length;
resultadoCasa.querySelector(".total-correctas").innerHTML = respuestaCorrecta;
const inco= 5-respuestaCorrecta;
resultadoCasa.querySelector(".total-incorrectas").innerHTML = inco;
resultadoCasa.querySelector(".total-puntaje").innerHTML = respuestaCorrecta + "/" + test.length;
resultadoCasa.querySelector(".total-observacion").innerHTML = bienMAL(); //profe no se como hacer para que el valor del metodo se muestre aqui si que salga undefined 

}

function NombreU(){

    var btnLogin = document.getElementById('btnLogin');
    let usuario2 = document.querySelector("#usuario2");
    let usuario =   document.querySelector("#usuario").value;
    usuario2.textContent = usuario; 
    
      
}
function comenzarTest(){


    casa.classList.add("esconder");
    testCasa.classList.remove("esconder");

       NombreU();
    setTestDisponible();
    getNuevasPreguntas();
    indicadorRespuestas();
    


    
      
        
    
   
    
    

}