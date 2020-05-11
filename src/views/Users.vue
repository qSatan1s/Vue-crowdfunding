<template>
    <div>
        <section class="container mt-4 mb-4">
            <div class="container">
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitches" v-model="checked" @change="onChenge" />
                    <label class="custom-control-label" for="customSwitches">По дате регистрации</label>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6" v-for="user in USERS" :key="user.id">
                        <div class="d-flex flex-row border rounded">
                            <div class="p-0 w-25">
                                <img :src="user.avatar" class="img-thumbnail border-0" alt="avatar" />
                            </div>
                            <div class="pl-3 pt-2 pr-2 pb-2 w-75 border-left">
                                <h4 class="text-primary">{{ user.name }}</h4>
                                <h5 class="text-info">{{ user.role }}</h5>
                                <ul class="m-0 float-left" style="list-style: none; margin:0; padding: 0">
                                    <li>
                                        <i class="year__old" />
                                        <h6>{{ user.year__old }}</h6>
                                    </li>
                                    <li>
                                        <i class="sity__life" />
                                        <h6>{{ user.sity }}</h6>
                                    </li>
                                </ul>
                                <p class="text-right m-0">
                                    <a href="#" class="btn btn-primary"> <i class="far fa-user" /> View Profile </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "users",
    props: {
        users: {
            type: Object,
            default: () => {
                return {};
            },
        },
        defaultChecked: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            checked: this.defaultChecked,
        };
    },

    computed: {
        ...mapGetters(["USERS"]),
    },
    methods: {
        ...mapActions(["GET_USERS_FROM_API"]),
        onChenge() {
            this.$emit("customSwitches", this.checked);
            if (customSwitches.checked) {
                this.$store.state.users.sort((a, b) => (a.id > b.id ? 1 : -1));
            } else {
                this.GET_USERS_FROM_API();
            }
        },
    },
    mounted() {
        this.GET_USERS_FROM_API();
    },
};
</script>