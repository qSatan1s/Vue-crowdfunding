<template>
    <div>
        <div class="container">
            <br />
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <header class="card-header">
                            <router-link href class="float-right btn btn-outline-primary mt-1" to="/Login">Log in</router-link>
                            <h4 class="card-title mt-2">Sign up</h4>
                        </header>
                        <article class="card-body">
                            <form @submit.prevent="submitHandler">
                                <div class="form-row">
                                    <div class="col form-group">
                                        <label>Иия</label>
                                        <input id="name_firest" v-model.trim="name" type="text" class="form-control" placeholder />
                                    </div>
                                    <!-- form-group end.// -->
                                    <div class="col form-group">
                                        <label>Фамилия</label>
                                        <input type="text" v-model.trim="name_last" id="name_last" class="form-control" placeholder=" " />
                                    </div>
                                    <!-- form-group end.// -->
                                </div>
                                <!-- form-row end.// -->
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" id="email" v-model.trim="email" class="form-control" placeholder />
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Регион</label>
                                        <input type="text" v-model.trim="sity" class="form-control" />
                                    </div>
                                    <!-- form-group end.// -->
                                    <div class="form-group col-md-6">
                                        <label>Должность</label>
                                        <select id="inputState" class="form-control" v-model.trim="role">
                                            <option>тренер</option>
                                            <option>наставник</option>
                                            <option selected>участник</option>
                                            <option>инвестор</option>
                                        </select>
                                    </div>
                                    <!-- form-group end.// -->
                                </div>
                                <!-- form-row.// -->
                                <div class="form-group">
                                    <label>Create password</label>
                                    <input id="password" v-model.trim="password" class="form-control" type="password" />
                                </div>
                                <!-- form-group end.// -->
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                                </div>
                                <!-- form-group// -->
                                <small class="text-muted">
                                    By clicking the 'Sign Up' button, you confirm that you accept our
                                    <br />Terms of use and Privacy Policy.
                                </small>
                            </form>
                        </article>
                        <!-- card-body end .// -->
                        <div class="border-top card-body text-center">
                            Have an account?
                            <router-link to="/Login" href>Log In</router-link>
                        </div>
                    </div>
                    <!-- card.// -->
                </div>
                <!-- col.//-->
            </div>
            <!-- row.//-->
        </div>
        <!--container end.//-->
    </div>
</template>
<script>
export default {
    metaInfo() {
        return {
            title: this$title("register")
        };
    },
    name: "register",
    data: () => ({
        email: "",
        password: "",
        name: "",
        name_last: "",
        sity: "",
        role: ""
    }),

    methods: {
        async submitHandler() {
            const formData = {
                name: this.name + " " + this.name_last,
                role: this.role,
                email: this.email,
                password: this.password,
                sity: this.sity
            };
            console.log(formData);
            try {
                await this.$store.dispatch("register", formData);
                this.$router.push("/");
            } catch (e) {}
        }
    }
};
</script>