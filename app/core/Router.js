export class Router {

  constructor(routes, $rootEl){
    this.routes = routes;
    this.$rootEl = $rootEl;

    this.init();
  }


  init(){
    window.addEventListener('hashchange', () => this.onRouteChanged())
    this.onRouteChanged();
  }

  onRouteChanged(){
    const route = this.getRoute();
    this.goToRoute(route);
  }

  getRoute(){
    const fullHash = window.location.hash;
    if(fullHash.length > 0){
      for(let i = 0; i < this.routes.length; ++i){
        const route = this.routes[i];
        if(route.isActiveRoute(fullHash.substr(1))){
          return route;
        }
      }
    }
    
    for(let i = 0; i < this.routes.length; ++i){
      const route = this.routes[i];
      if(route.isDefault()){
        return route;
      }
    }

    return null;
  }

  async goToRoute(route){
    console.log("should go to:", route);

    const tpl = await route.getTemplate();

    const $root = this.$rootEl;
    $root.innerHTML = tpl;

    if(!route.component){ return; }

    const component = new route.component($root, tpl);
    $root.$scope = component;

    component.hydrateTemplate();

    if(typeof component.onLoad === "function"){
      component.onLoad();
    }

  }
    
}