<template>
    <div>
        <div class="container">
            <br />
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card" style="height: 510px;">
                        <header class="card-header">
                            <router-link href class="float-right btn btn-outline-primary mt-1" to="/Register">Register</router-link>
                            <h4 class="card-title mt-2">Login</h4>
                        </header>
                        <article class="card-body">
                            <form @submit.prevent="submitHandler">
                                <!-- form-row end.// -->
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" id="email" v-model.trim="email" class="form-control" placeholder />
                                </div>
                                <!-- form-row.// -->
                                <div class="form-group">
                                    <label>password</label>
                                    <input id="password" v-model.trim="password" class="form-control" type="password" />
                                </div>
                                <!-- form-group end.// -->
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                                </div>
                                <!-- form-group// -->
                                <small class="text-muted">
                                    By clicking the 'Login' button, you confirm that you accept our
                                    <br />Terms of use and Privacy Policy.
                                </small>
                            </form>
                        </article>
                        <!-- card-body end .// -->
                        <div class="border-top card-body text-center">
                            don't have an account?
                            <router-link to="/Register" href>Register</router-link>
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
            title: this$title("register"),
        };
    },
    name: "register",
    data: () => ({
        email: "",
        password: "",
    }),

    methods: {
        async submitHandler() {
            const formData = {
                email: this.email,
                password: this.password,
            };
            try {
                await this.$store.dispatch("login", formData);

                this.$router.push("/Users");
            } catch (e) {}
        },
    },
};
</script>