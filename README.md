# 🚌 Simulador de Transporte Público (Client-Side)

Este proyecto es una simulación interactiva de un sistema de transporte público urbano. Está diseñado para demostrar la implementación y el uso práctico de **Estructuras de Datos** (Listas Enlazadas y Pilas) aplicadas a la resolución de problemas de logística y rastreo en tiempo real mediante JavaScript puro (Vanilla JS).

🔗 **[Ver Demo en Vivo (Vercel) -> Aquí irá tu link de Vercel]**

## 🎯 Objetivo del Proyecto

El objetivo principal es aplicar estructuras de datos teóricas en un entorno visual y funcional. En lugar de procesar datos en la consola, las estructuras controlan el movimiento físico simulado de un vehículo en un mapa interactivo, gestionan la ruta en un circuito cerrado y procesan el historial de interacciones del pasajero.

## 🏗️ Estructuras de Datos Implementadas

Toda la lógica de negocio fue desarrollada desde cero sin el uso de bibliotecas externas para la manipulación de datos:

*   **Lista Doblemente Enlazada Circular (Ruta del Bus):**
    *   *Uso:* Modela el circuito de la ruta. Los nodos representan los paraderos oficiales (`NodoParadero`).
    *   *Ventaja:* Al ser circular, permite que la simulación se ejecute de forma infinita; cuando el bus llega al último paradero (Cola), el puntero `siguiente` lo redirige automáticamente al paradero inicial (Cabeza) sin romper el flujo.
*   **Pila / Stack LIFO (Sistema de Notificaciones):**
    *   *Uso:* Gestiona el historial de eventos y notificaciones del usuario (ej. "El bus llegó al paradero").
    *   *Ventaja:* Al operar bajo el principio LIFO (Last In, First Out), garantiza que el pasajero siempre visualice el evento más reciente en la cima de su bandeja de entrada. Permite la función de "Deshacer" (`pop`) de eventos.

## 🚀 Alcance y Arquitectura (Scope)

Esta aplicación fue diseñada bajo una arquitectura estricta de **Estado del Cliente (Client-Side State)**. 

> **Nota de Ingeniería:** 
> Actualmente, la simulación se ejecuta 100% en la memoria RAM del navegador local. El cálculo de movimiento (Interpolación Lineal) y los tiempos estimados de llegada (ETA) basados en velocidad constante ocurren en el Frontend. No existe sincronización mediante servidor (Backend) ni WebSockets, por lo que diferentes clientes (navegadores) tendrán instancias independientes de la simulación. La sincronización multi-usuario está planificada para futuras iteraciones.

## 🛠️ Stack Tecnológico

*   **Lógica Principal:** JavaScript Puro (Vanilla JS / ES6)
*   **Interfaz:** HTML5 & CSS3
*   **Renderizado Visual del Mapa:** Leaflet.js
*   **Proveedor de Mapas (Tiles):** OpenStreetMap (Open Source)
*   **Despliegue:** Vercel
