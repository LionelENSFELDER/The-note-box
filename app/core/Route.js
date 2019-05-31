export class Route {

  constructor(name, templatePath, component, isDefault){
    this.name = name;
    this.templatePath = templatePath;
    this.component = component;
    this.default = !!isDefault;
  }

  isActiveRoute(hashedPath){
    return hashedPath.replace('#', '') === this.name;
  }

  isDefault(){
    return this.isDefault;
  }

  async getTemplate(){
    if(!this.templateHTML){
      const res = await fetch(this.templatePath);
      if(!res || !res.ok){
        return '';
      }else{
        this.templateHTML = res.text();
      }
      
    }
    
    return this.templateHTML;
  }
}