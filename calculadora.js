
/*var botones=["7","8","9","+","4","5","6","-","1","2","3","0",".","=","/","%"];

function renderizarGUI(){

    //division calculadora
    // 1 . crear el elemento
    const divCalculadora= document.createElement("div")
    // 2 agreagar atributos (opcional)
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class", "text-center ");
    divCalculadora.setAttribute("style" , " width: 40%; magin: 0 auto");
    // 3 insertar elementos en el DOM
    document.body.appendChild(divCalculadora);

    //div pantalla
    const divPantalla= document.createElement("div");   
    divPantalla.setAttribute("id", "divPantalla");
    divCalculadora.appendChild(divPantalla);

    // pantalla
    const pantalla = document.createElement("input");   
    pantalla.setAttribute("id", "pantalla");
    pantalla.setAttribute("type", "text");
    pantalla.setAttribute("value", "0" );
    pantalla.setAttribute("disabled", "true");
    divPantalla.setAttribute("class", "form-control text-center");
    divPantalla.appendChild(pantalla);


    
    const divBotones= document.createElement("div")
    divBotones.setAttribute("id", "botones");
    divCalculadora.appendChild(divBotones);

    for(let i=0;i<botones.length;i++){
        //crear filas
        if(i%4==0){
            const divFila=document.createElement("div");
            divFila.setAttribute("class", "row");
            divBotones.appendChild(divFila);
        }
        let boton=document.createElement("button");
        boton.setAttribute("id","boton" + botones[i]);
        boton.setAttribute("class","btn btn-primary col-3 border-white");
        boton.innerHTML= botones[i];//para agregar algo que contenga html
        
        //agregar un escuchador de eventos darle a boton la capacidad de escuchar lo evento del usuario
        boton.addEventListener("click", function(){
            procesarEvento(boton);
        });
        divBotones.lastChild.appendChild(boton);
    
    
    }
    
    function procesarEvento(boton){
        let miPantalla=document.getElementById("pantalla");

        if(miPantalla.value=="0"){
            miPantalla.value="";

        }
        if(boton.innerHTML != "="){
            miPantalla.value+=boton.innerHTML;
        }else{
            try{
                 //evaluar la expresin con math.js, importante instalar la biblioteca 
            let resultado=math.evaluate(miPantalla.value);
            miPantalla.value=resultado;

            }catch(error){
                alert("no sirve")
            }

        }
        
    }

}
renderizarGUI(); */

