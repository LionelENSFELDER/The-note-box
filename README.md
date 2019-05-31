  ## Vanilla SPA

Un exemple de Single Page App en Javascript seul (VanillaJS).

Implémente :
- Système simple de pages.
- Implémentation basique de composants par templates.

Peut-être utilisé comme starter kit.

> L'implémentation actuelle est très inspirée du post https://medium.com/frontend-fun/js-vanilla-script-spa-1b29b43ea475

### Structure

```
app/
 |-components/
   |-componentName.template.html
 |-core/
 |-pages/
   |-PageName/
     |-pageName.template.html
     |-pageName.component.js
index.html
app.css
app.js
```

Le point d'entrée de votre application est `index.html`. Avec l'utilisation de l'architecture SPA, c'est aussi dans ce fichier qui vous définirez le layout principal de votre application. Chaque page créée par la suite sera insérée dans ce layout.

Les Pages et Composants ne proposent actuellement pas de gestion modulaire de leurs fichiers de style. Vous pouvez donc utiliser le fichier `app.css` global afin de définir vos règles CSS, ou suivre une solution similaire.

Les templates de vos composants doivent-être placés dans le dossier app/components/.
Les fichiers relatifs à vos pages doivent-être placé dans le dossier app/pages/PageName pour une page nommée PageName.

### Création d'un composant

Un composant est un template réutilisable au travers de l'application, utilisant des balises html personnalisées (WebComponents basiques).

Pour créer un composant, vous devez :

- Créer le fichier du template de ce composant dans `app/components/[mon-composant].template.html`
- Déclarer votre nouveau composant dans le fichier `app/components.js`. Dans ce fichier vous déclarez le nom de votre composant ainsi que le nom de son fichier de template. Le nom de votre composant sera automatiquement préfixé par `app-`, ainsi si vous déclarez un composant `nav`, vous pourrez l'utiliser avec la balise HTML `<app-nav>`.


### Création d'une page

Une page est une vue spécifique de votre application, associée à un chemin présent dans l'URL du navigateur, un template, et éventuellement un composant JS associé.

Pour créer une page, vous devez :
- Créer un dossier `app/pages/[NomPage]`
- Dans ce dossier ajouter au minimum un template pour votre page
- (optionnel) Vous pouvez aussi ajouter un fichier de script contenant une classe JS qui sera liée à la page. Cette classe doit hériter de la classe Page. 
- Déclarer votre nouvelle page dans le fichier `app/routes.js`. Dans ce fichier vous déclarez le chemin associé à votre page (tel qu'il sera utilisé dans les `a[href]` ou visible dans l'URL du navigateur préfixé d'un `#`), vous renseignez le chemin vers le template à utiliser, et éventuellement la classe JS à associer.