const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. Cuál es la capital de Irán?",
    respuestas: {
      a: "Bagdad",
      b: "Teherán",
      c: "Islamabad",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. Cuál es la capital de Irak?",
    respuestas: {
      a: "Kuwait",
      b: "Dubai",
      c: "Bagdad",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. Cuál es la capital de Noruega?",
    respuestas: {
      a: "Roma",
      b: "Copenague",
      c: "Estocolmo",
      d: "Oslo",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "4. Cuál es la capital de Serbia?",
    respuestas: {
      a: "Belgrado",
      b: "Zagreb",
      c: "Kabul",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "5. Cuál es la capital de Australia?",
    respuestas: {
      a: "Sidney",
      b: "Zurich",
      c: "Canberra",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "6. Cuál es la capital de Canadá?",
    respuestas: {
      a: "Toronto",
      b: "Montreal",
      c: "Ontario",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "7. Cuál es la capital de Vietnam?",
    respuestas: {
      a: "Puket",
      b: "Ho Chin Ming",
      c: "Pan Lao Kung",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "8. Cuál es la capital de China?",
    respuestas: {
      a: "Shangai",
      b: "Pekín",
      c: "Seul",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "9. Cuál es la capital de Pakistan?",
    respuestas: {
      a: "Islamabad",
      b: "Kuwait",
      c: "Kabul",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "10. Cuál es la capital de Marruecos?",
    respuestas: {
      a: "Casablanca",
      b: "Rabat",
      c: "Kabul",
    },
    respuestaCorrecta: "b",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);
