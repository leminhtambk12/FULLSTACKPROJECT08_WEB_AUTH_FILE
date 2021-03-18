import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Authentication/Register.vue";
import Login from "../views/Authentication/Login.vue";
import Profile from "../views/Authentication/Profile.vue";
import store from "../store";
import Ideas from "../views/Ideas.vue";
import CreateIdea from "../components/CreateIdea.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/ideas",
        name: "Ideas",
        component: Ideas,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/create-idea",
        name: "CreateIdea",
        component: CreateIdea,
        meta: {
            requiresAuth: true,
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            //Redirect to login
            next("/login");
        } else {
            next();
        }
    } else if (to.matched.some((record) => record.meta.requiresGuest)) {
        if (store.getters.isLoggedIn) {
            //Redirect to Profile
            next("/profile");
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;