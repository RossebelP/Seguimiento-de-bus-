
// 1. ESTRUCTURAS DE DATOS (Tu Lógica Pura)

class NodoParadero {
    constructor(nombre, lat, lng) {
        this.nombre = nombre;
        this.coordenadas = [lat, lng];
        this.siguiente = null;
        this.anterior = null;
    }
}

class RutaCircular {
    // Aquí irá la lógica de tu lista circular doble
    constructor() {
        this.cabeza = null;
    }
    // agregar()...
}

class Pila {
    // Aquí irá la lógica de tu historial LIFO
    constructor() {
        this.items = [];
    }
    // push(), pop()...
}


// 2. CONFIGURACIÓN DEL MAPA (Leaflet)


// Inicializar el mapa centrado en unas coordenadas de ejemplo
const mapa = L.map('mapa').setView([-8.11599, -79.02584], 14);

// Cargar las calles (Fondo gratuito de OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(mapa);


// 3. INTERACCIÓN DEL USUARIO (Eventos)


// Escuchar cuando el usuario hace clic en el botón
document.getElementById('btnIniciar').addEventListener('click', () => {
    console.log("¡Simulación iniciada desde app.js!");
    // Aquí llamarás a los métodos de tus nodos y moverás el marcador
});