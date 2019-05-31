import { Page } from "../../core/Page.js";

// Une classe liée à une page doit étendre la classe Page 
export class ProfilePage extends Page {

  // Constructeur du composant, définit les variables accessibles depuis le template
  constructor(...args){
    super(...args);

    // Les variables définies ici pourront être automatiquement insérées dans 
    // mon template avec la notation {{ nomVariable }}
    this.MonTitre = "My Title";
    this.message = "HelloWorld";
  }
  
  // Méthode invoquée lorsque le composant est inséré dans la page.
  // Utiliser cette fonction pour pouvoir ajouter des event-listeners notamment.
  onLoad(){
    console.log("Profile has loaded")

    const $btn = this.$root.querySelector(".alert-btn");
    $btn.addEventListener("click", () => {
      alert("Hello World");
    });
  }

}