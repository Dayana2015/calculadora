function renderizarGUI(){

    //division calculadora
    // 1 . crear el elemento
    const divCalculadora= document.createElement("div")
    // 2 agreagar atributos (opcional)
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class", "text-center ");
    divCalculadora.setAttribute("style" , " width: 50%; magin: 0 auto");
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
    pantalla.setAttribute("value", "0");
    pantalla.setAttribute("disabled", "true");
    divPantalla.setAttribute("class", "form-control", "text-right");
    divPantalla.appendChild(pantalla);


    
    const divBotones= document.createElement("div")
    divBotones.setAttribute("id", "botones");
    divCalculadora.appendChild(divBotones);

}
renderizarGUI();