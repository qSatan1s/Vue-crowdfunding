import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: [],
        project: [],
    },
    actions: {
        GET_USERS_FROM_API: function({ commit }) {
            return axios("http://localhost:3000/users", {
                method: "GET",
            }).then((response) => {
                commit("SET_USERS_TO_VUEX", response.data);
            });
        },
        GET_PROJECT_FROM_API: function({ commit }) {
            return axios("http://localhost:3000/project", {
                method: "GET",
            }).then((response) => {
                commit("SET_PROJECT_TO_VUEX", response.data);
            });
        },
        async register({ dispatch, commit }, { email, password, name, sity, role }) {
            try {
                const data = {
                    name: name,
                    role: role,
                    email: email,
                    password: password,
                    sity: sity,
                    year__old: "не указан",
                    avatar: "https://sun9-44.userapi.com/c844418/v844418628/12a08/IWZnUz3sFmo.jpg?ava=1",
                };
                axios
                    .post("http://localhost:3000/users", data)
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (e) {
                commit("setError", e);
                throw e;
            }
        },
        async login({ dispatch, commit }, { email, password }) {
            axios("http://localhost:3000/users", {
                method: "GET",
            }).then((response) => {
                commit("SET_USERS_TO_VUEX", response.data);
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].email == email) {
                        if (response.data[i].password == password) {
                            alert("пользователь " + response.data[i].name + ", авторизовлся");
                        } else {
                            alert("не верный пароль");
                        }
                    }
                }
            });
        },
    },

    mutations: {
        SET_USERS_TO_VUEX: (state, users) => {
            state.users = users;
        },
        SET_PROJECT_TO_VUEX: (state, project) => {
            state.project = project;
        },
    },
    getters: {
        USERS(state) {
            return state.users;
        },
        PROJECT(state) {
            return state.project;
        },
    },
});

export default store;