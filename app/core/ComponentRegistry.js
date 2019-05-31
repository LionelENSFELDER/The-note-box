export class ComponentRegistry {

}

ComponentRegistry.register = (cmpData) => {
  const tagName = "app-"+cmpData.tagName;
  const templatePath = "app/components/"+cmpData.templatePath;

  const Component = ComponentRegistry.declareTemplatedComponentClass(templatePath);
  customElements.define(tagName, Component);
}

ComponentRegistry.registerAll = (componentsData) => {
    (componentsData || []).forEach(cmp => ComponentRegistry.register(cmp));
}

ComponentRegistry.declareTemplatedComponentClass = (templatePath) => {
	class Component extends HTMLElement {
    constructor(){
      super();

      this.templatePath = templatePath;
    }

    async getTemplate(){
      if(!this.templateHTML){
        const res = await fetch(this.templatePath);
        if(!res || !res.ok){
          return '';
        }else{
          this.templateHTML = await res.text();
        }
        
      }
      
      return this.templateHTML;
    }

    connectedCallback(){
      this.getTemplate().then(() => {
        this.innerHTML = this.templateHTML;
      })
    }

    
	}
	
	return Component;
}