# 📂 Catálogo Completo de Patrones de Diseño con TypeScript

¡Catálogo completado! Este repositorio contiene la implementación práctica de los **23 Patrones de Diseño de Software** descritos por la *Gang of Four* (GoF). Cada patrón ha sido desarrollado de forma independiente utilizando **TypeScript** y un entorno moderno guiado por buenas prácticas de arquitectura.

## 🛠️ Tecnologías y Entorno

*   **Lenguaje:** TypeScript 🚀 (Tipado estático y modular)
*   **Entorno de ejecución:** Node.js
*   **Gestor de paquetes:** pnpm 📦 *(Fast & disk space efficient)*

## 🗂️ Mapa de Patrones Implementados

El repositorio está estructurado en tres grandes categorías. Todos los proyectos cuentan con su configuración independiente y están listos para ser ejecutados:

### 1. Patrones Creacionales (`/patrones creacionales`)
Enfocados en los mecanismos de creación de objetos de forma flexible y reutilizable.
*   [x] `p_AbstractFactory` — Fábrica abstracta para familias de objetos relacionados.
*   [x] `p_Builder` — Construcción paso a paso de objetos complejos.
*   [x] `p_FactoryMethod` — Interfaz para delegar la creación a subclases.
*   [x] `p_Prototype` — Clonación de objetos existentes sin acoplamiento.
*   [x] `p_Singleton` — Instancia única global con un punto de acceso central.

### 2. Patrones Estructurales (`/patrones estructurales`)
Diseñados para ensamblar objetos y clases en estructuras más grandes manteniendo la eficiencia.
*   [x] `p_Adapter` — Permite la colaboración entre interfaces incompatibles.
*   [x] `p_Bridge` — Divide una clase grande en dos jerarquías independientes.
*   [x] `p_Composite` — Estructuras de objetos en forma de árbol.
*   [x] `p_Decorator` — Añade responsabilidades a objetos de forma dinámica.
*   [x] `p_Facade` — Interfaz simplificada a un sistema complejo de clases.
*   [x] `p_Flyweight` — Comparte estados comunes para optimizar memoria.
*   [x] `p_Proxy` — Sustituto o intermediario para controlar el acceso a un objeto.

### 3. Patrones de Comportamiento (`/patrones de comportamiento`)
Encargados de gestionar algoritmos, asignación de responsabilidades y comunicación entre objetos.
*   [x] `p_ChainOfResponsibility` — Pasa solicitudes a lo largo de una cadena de manejadores.
*   [x] `p_Command` — Encapsula una solicitud como un objeto.
*   [x] `p_Interpreter` — Evalúa lenguajes o expresiones gramaticales.
*   [x] `p_Iterator` — Recorre colecciones secuencialmente sin exponer su estructura.
*   [x] `p_Mediator` — Restringe comunicaciones directas forzándolas a través de un mediador.
*   [x] `p_Memento` — Guarda y restaura el estado previo de un objeto.
*   [x] `p_Observer` — Mecanismo de suscripción para notificar eventos a múltiples objetos.
*   [x] `p_State` — Modifica el comportamiento de un objeto cuando cambia su estado interno.
*   [x] `p_Strategy` — Intercambia diferentes algoritmos en tiempo de ejecución.
*   [x] `p_TemplateMethod` — Define el esqueleto de un algoritmo en una superclase.
*   [x] `p_Visitor` — Separa los algoritmos de las estructuras de objetos sobre las que operan.

## 🚀 Cómo Ejecutar los Proyectos

Cada subcarpeta de patrón es un proyecto autónomo. Sigue estos pasos para probar cualquier solución localmente:

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com
   ```
2. **Navega hacia el patrón de tu elección, por ejemplo:**
   ```bash
   cd "patrones creacionales/p_Builder"
   ```
3. **Instala las dependencias necesarias:**
   ```bash
   pnpm install
   ```
4. **Arranca el entorno de desarrollo:**
   ```bash
   pnpm dev
   ```

## 📚 Referencias Teóricas
*   [Refactoring.Guru](https://refactoring.guru) — Estructuras de referencia visual y conceptual.
*   [Design Patterns (GoF)](https://wikipedia.org) — El libro clásico de la arquitectura de software.

---
