import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.getItem("token") || "",
        user: {},
        error: "",
        status: "",
    },
    getters: {
        user: (state) => state.user,
        isLoggedIn: (state) => {
            if (state.token !== "") {
                return true;
            } else {
                return false;
            }
        },
    },
    mutations: {
        //Register
        REGISTER_SUCCESS(state) {
            state.error = "";
            state.status = "success";
        },
        REGISTER_ERROR(state, error) {
            state.error = error.response.data.msg;
            state.success = "";
        },
        //Login
        AUTH_SUCCESS(state, { token, user }) {
            state.token = token;
            state.user = user;
            state.error = "";
            state.status = "success";
        },
        AUTH_ERROR(state, error) {
            state.error = error.response.data.msg;
        },
        //Get profile
        USER_PROFILE(state, user) {
            state.user = user;
        },
        //Logout
        LOGOUT(state) {
            state.token = "";
            state.user = "";
            state.error = "";
            state.status = "";
        },
    },
    actions: {
        //Register
        async register({ commit }, user) {
            try {
                let res = await axios.post(
                    "http://localhost:5000/api/users/register",
                    user
                );
                if (res.data.success !== undefined) {
                    commit("REGISTER_SUCCESS");
                }
                return res;
            } catch (error) {
                commit("REGISTER_ERROR", error);
            }
        },
        //Login
        async login({ commit }, user) {
            try {
                let res = await axios.post(
                    "http://localhost:5000/api/users/login",
                    user
                );
                if (res.data.success) {
                    const token = res.data.token;
                    const user = res.data.user;

                    //Store token into localStorage
                    localStorage.setItem("token", token);
                    //Set axios default
                    axios.defaults.headers.common["Authorization"] = token;
                    commit("AUTH_SUCCESS", { token, user });
                }
                return res;
            } catch (error) {
                commit("AUTH_ERROR", error);
            }
        },
        //Get Profile
        async getProfile({ commit }) {
            let res = await axios.get("http://localhost:5000/api/users/profile");
            commit("USER_PROFILE", res.data.user);
            return res;
        },
        //Logout
        async logout({ commit }) {
            await localStorage.removeItem("token");
            commit("LOGOUT");
            delete axios.defaults.headers.common["Authorization"];
            router.push("/login");
            return;
        },
    },
    modules: {},
});