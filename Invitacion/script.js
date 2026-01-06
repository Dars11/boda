// --- Sección 2: Cuenta Regresiva ---

// ¡IMPORTANTE! Cambia esta fecha por la fecha de tu boda.
// Formato: Mes Día, Año HH:MM:SS
const fechaBoda = new Date("Mar 14, 2026 16:00:00").getTime();

// Actualiza el contador cada segundo
const x = setInterval(function() {

    // Obtiene la fecha y hora actual
    const ahora = new Date().getTime();

    // Encuentra la distancia entre ahora y la fecha de la boda
    const distancia = fechaBoda - ahora;

    // Cálculos de tiempo para días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Muestra el resultado en los elementos correspondientes
    document.getElementById("dias").innerText = dias < 10 ? '0' + dias : dias;
    document.getElementById("horas").innerText = horas < 10 ? '0' + horas : horas;
    document.getElementById("minutos").innerText = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById("segundos").innerText = segundos < 10 ? '0' + segundos : segundos;

    // Si la cuenta regresiva termina, muestra un mensaje
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("reloj").innerHTML = "¡Llegó el gran día!";
    }
}, 1000);


// --- Sección 4: Lógica del Carrusel con Autoscroll ---
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carrusel-track');

    if (track) {
        const scrollInterval = setInterval(function() {
            const slideWidth = track.querySelector('.carrusel-slide').offsetWidth;
            const gap = 20; // El mismo valor que tienes en el 'gap' de tu CSS

            // Si el scroll está cerca del final, lo reiniciamos al principio
            // El +1 es un pequeño margen para evitar problemas de redondeo de píxeles
            if (track.scrollLeft + track.clientWidth + 1 >= track.scrollWidth) {
                track.scrollLeft = 0;
            } else {
                // Si no, avanzamos un slide
                track.scrollLeft += slideWidth + gap;
            }
        }, 3000); // Cambia de slide cada 3 segundos (3000 milisegundos). Puedes ajustar este valor.
    }
});