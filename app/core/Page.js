export class Page {

  constructor($root, baseTpl){
    this.$root = $root;
    this.baseTpl = baseTpl;
  }

  hydrateTemplate(){
    const regx = /\{\{([\s\S]*?)\}\}/g;

    // Replace every occurence of data binding via {{ key }} blocks with this[key]
    const templated = this.baseTpl.replace(regx, (occurence, capture) => {
      let key = capture.trim();
      let value = this[key];
      if(value){
          return value;
      }
      return occurence;
    });

    // Set our new element inner HTML
    this.$root.innerHTML = templated;
  }

  onLoad(){
    
  }
}