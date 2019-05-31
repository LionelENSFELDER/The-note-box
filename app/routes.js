import { HomePage } from "./pages/Home/home.component.js";
import { ProfilePage } from "./pages/Profile/profile.component.js";
import { PostsPage } from "./pages/Posts/postslist.component.js";

/** 
 * Déclarez les routes de votre application ici:
 * 
 * + path       {string}        Le chemin vers votre page (dans URL)
 * + view       {string}        Le chemin relatif vers le fichier de template
 * + controller {extends Page}  La classe Javascript éventuellement utilisée et liée à cette route/page
 * + isDefault  {boolean}       Cette route est-elle la route par défaut ? (la première trouvée sera utilisée)
 * */
export const routes = [
    {
        path: 'home',
        view: 'app/pages/Home/home.template.html',
        controller: HomePage,
        isDefault: true
    },
    {
        path: 'profile',
        view: 'app/pages/Profile/profile.template.html',
        controller: ProfilePage
    },
    {
        path: "login",
        view: "app/pages/Login/login.template.html"
    },
    {
        path: "postslist",
        view: "app/pages/Posts/postslist.template.html"
    }
];