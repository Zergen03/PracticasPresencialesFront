declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  //Arhivo de tipado para el proyecto, para que el IDE reconozca las librerias de vue, incluyendo vue-router, pinia o vistas y componentesd