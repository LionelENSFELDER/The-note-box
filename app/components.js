/* * 
 * Déclarez les composants de votre application ici:
 * 
 * + tagName       {string}        Le nom de la balise html que vous voulez créer. 
 *                                 Le nom final sera automatiquement préfixé par "app-".
 * + templatePath  {string}        Le nom du fichier de template associé à votre composant.
 *                                 Ce fichier doit se trouver dans le répertoire "app/components"
 * */
export const components = [
    {
        tagName: "nav",
        templatePath: "navbar.template.html"
    },
    {
        tagName: "footer",
        templatePath: "footer.template.html"
    },
    {
        tagName: "toolbartextedit",
        templatePath: "toolbartextedit.template.html"
    },
    {
        tagName: "post",
        templatePath: "post.template.html"
    },
    {
        tagName: "postv2",
        templatePath: "postv2.template.html"
    },
    {
        tagName: "postview",
        templatePath: "postview.template.html"
    },
    {
        tagName: "postedit",
        templatePath: "postedit.template.html"
    },
    {
        tagName: "snippet",
        templatePath: "snippet.template.html"
    },
    {
        tagName: "snippetv2",
        templatePath: "snippetv2.template.html"
    },
    {
        tagName: "link",
        templatePath: "link.template.html"
    },
    {
        tagName: "linkv2",
        templatePath: "linkv2.template.html"
    },
    {
        tagName: "profileview",
        templatePath: "profileview.template.html"
    },
    {
        tagName: "profileedit",
        templatePath: "profileedit.template.html"
    }
];