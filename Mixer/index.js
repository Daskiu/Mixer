// Lista de cartas original para resetear la baraja
const cartasOriginales = [
  "Caos en la Mente del Líder: El jugador que gira la ruleta intercambia toda su mano de cartas con otro jugador.",
  "Poder Oscuro: El jugador debe decidir si sacrifica uno de sus seguidores para ganar una acción adicional.",
  "Cambio de Liderazgo: Todos los jugadores pasan sus tableros a la izquierda por una ronda.",
  "Confusión de Identidad: Los jugadores deben intercambiar uno de sus seguidores con el jugador a la derecha.",
  "Desafío de Recursos: Todos los jugadores lanzan los dados nuevamente; quien saque el menor número pierde un seguidor.",
  "Redistribución del Poder: Los jugadores con más seguidores deben dar un seguidor a los que tienen menos.",
  "Intervención del Consejo: Los jugadores deben girar la ruleta una vez más y el nuevo evento afecta a todos por igual.",
  "El Fin de los Tiempos: Si se gira este evento, el juego termina inmediatamente y se cuenta quién tiene más seguidores.",
  "El Gran Cisma: Los jugadores se dividen en equipos, compartiendo recursos y estrategias hasta que uno gane.",
  "Traición Última: El jugador que gira la ruleta debe elegir a otro jugador para intercambiar tableros por el resto del juego."
];

let cartas = [...cartasOriginales]; // Copia de la lista original para manipular

// Seleccionar elementos
const deck = document.querySelector(".deck");
const selectedCardContainer = document.querySelector(".selected-card-container");
const drawButton = document.getElementById("drawCard");
const resetButton = document.getElementById("resetDeck");

// Crear la baraja visual
function crearBaraja() {
  deck.innerHTML = ""; // Vacía la baraja
  cartas.forEach((carta, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.style.transform = `translate(${index * 2}px, ${index * 2}px)`;
    deck.appendChild(cardElement);
  });
}

crearBaraja(); // Llamar a la función para crear la baraja al inicio

// Función para mezclar las cartas visualmente
function mezclarCartas() {
  const cartasEnBaraja = document.querySelectorAll(".deck .card");
  cartasEnBaraja.forEach((carta) => {
    const randomX = Math.random() * 20 - 10;
    const randomY = Math.random() * 20 - 10;
    carta.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 10 - 5}deg)`;
  });

  setTimeout(() => {
    cartasEnBaraja.forEach((carta, index) => {
      carta.style.transform = `translate(${index * 2}px, ${index * 2}px)`;
    });
  }, 800); // Duración de la mezcla antes de que las cartas vuelvan a su posición
}

// Función para sacar carta aleatoria y mostrarla al lado de la baraja
function sacarCarta() {
  mezclarCartas();

  setTimeout(() => {
    const indiceAleatorio = Math.floor(Math.random() * cartas.length);
    const cartaSeleccionada = cartas.splice(indiceAleatorio, 1)[0];

    // Mostrar la carta seleccionada en el contenedor de cartas seleccionadas
    selectedCardContainer.innerHTML = "";
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.textContent = cartaSeleccionada;
    selectedCardContainer.appendChild(cardElement);

    // Remover la carta visual de la baraja
    const cartasEnBaraja = document.querySelectorAll(".deck .card");
    if (cartasEnBaraja.length > 0) {
      const cartaRemover = cartasEnBaraja[indiceAleatorio];
      cartaRemover.style.opacity = "0";
      setTimeout(() => {
        deck.removeChild(cartaRemover);
      }, 500); // Espera para que la animación de desvanecimiento se complete
    }
  }, 1000); // Delay para mostrar la mezcla visual antes de sacar la carta
}

function sacarCarta() {
  mezclarCartas();

  setTimeout(() => {
      const indiceAleatorio = Math.floor(Math.random() * cartas.length);
      const cartaSeleccionada = cartas.splice(indiceAleatorio, 1)[0];

      // Mostrar la carta seleccionada en el contenedor de cartas seleccionadas
      selectedCardContainer.innerHTML = "";
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.textContent = cartaSeleccionada;

      // Cambiar el fondo de la carta seleccionada a un color sólido
      cardElement.style.backgroundImage = 'none'; // Remueve la imagen de fondo
      cardElement.style.backgroundColor = '#007BFF'; // Establece un color sólido (puedes cambiarlo)

      selectedCardContainer.appendChild(cardElement);

      // Remover la carta visual de la baraja
      const cartasEnBaraja = document.querySelectorAll(".deck .card");
      if (cartasEnBaraja.length > 0) {
          const cartaRemover = cartasEnBaraja[indiceAleatorio];
          cartaRemover.style.opacity = "0";
          setTimeout(() => {
              deck.removeChild(cartaRemover);
          }, 500); // Espera para que la animación de desvanecimiento se complete
      }
  }, 1000); // Delay para mostrar la mezcla visual antes de sacar la carta
}

// Función para reiniciar la baraja
function resetearBaraja() {
  cartas = [...cartasOriginales]; // Reiniciar la lista de cartas
  crearBaraja(); // Volver a crear la baraja visualmente
  selectedCardContainer.innerHTML = ""; // Vaciar el contenedor de cartas seleccionadas
}

// Manejar el evento de hacer clic en el botón
drawButton.addEventListener("click", sacarCarta);
resetButton.addEventListener("click", resetearBaraja); // Evento para el botón de Reset