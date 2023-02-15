//----------------- lecture_01 ----------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  //----------------- lecture_02 ----------------------------------//
  const cardAdj = [
    { name: "c", img: "images/c.png" },
    { name: "cpp", img: "images/cpp.png" },
    { name: "css", img: "images/css.png" },
    { name: "fortran", img: "images/fortran.png" },
    { name: "html", img: "images/html.png" },
    { name: "python", img: "images/python.png" },
    { name: "c", img: "images/c.png" },
    { name: "cpp", img: "images/cpp.png" },
    { name: "css", img: "images/css.png" },
    { name: "fortran", img: "images/fortran.png" },
    { name: "html", img: "images/html.png" },
    { name: "python", img: "images/python.png" }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    // Loop que inicia en i=0, se incrementa de 1 en 1 (i++) y finaliza
    // cuando i=cardAdj.length, es decir, 12
    for (let i = 0; i < cardAdj.length; i++) {
      // Crea elemento img cada vez que se ejecuta la función
      var carta = document.createElement("img");

      //Asignar nuevo atributo a cada carta igual a la imagen 'reverso'.
      carta.setAttribute("src", "images/reverso.png");

      //Asignar como atributo a cada carta creada, el id=i.
      carta.setAttribute("data-id", i);

      //Detecta si la carta asignada recibe un click y ejecuta la función voltearCarta.
      carta.addEventListener("click", voltearCarta);

      // Relaciona la carta creada con la variable cuadricula enlazada con la clase
      // cuadricula de html para que se imprima la carta creada en el div de html.
      cuadricula.appendChild(carta);
    }
  }

  //----------------- lecture_04 ----------------------------------//

  function voltearCarta() {
    //Crea una variable equivalente al atributo de data-id creado en el loop anterior.
    var cardId = this.getAttribute("data-id");

    //Apendiza en la lista cartasEscogidas, el valor de cardAdj[cardId], es decir,
    //la carta seleccionada con el click.
    cartasEscogidas.push(cardAdj[cardId].name);

    //Apendiza en la lista CardId el id respectivo de la carta seleccionada.
    cartasEscogidasId.push(cardId);

    //Fija como atributo de la carta a imprimir, el valor img de
    // objeto declarado en el arreglo cardAdj
    this.setAttribute("src", cardAdj[cardId].img);

    //Condicional: sucede cuando se voltean solo dos cartas
    if (cartasEscogidas.lenght === 2) {
      //Función que verifica si la pareja apareada es equivalente en 500 ms.
      setTimeout(verificarPareja, 500);
    }
  }

  //Llama a la función crearTablero para imprimir el tablero en la pantalla.
  crearTablero();
});
