import { Router, Route, ComponentRegistry } from "./core/Core.js";

import { routes as routesData } from './routes.js';
import { components as componentsData } from './components.js';

/* Création des routes */
const routes = routesData.map(function(routedata){
  return new Route(routedata.path, routedata.view, routedata.controller, !!routedata.default)
});

let $app = document.getElementById('mon-app');
const router = new Router(routes, $app);

/* Création des composants */
ComponentRegistry.registerAll(componentsData);

/* Votre code ci-dessous */