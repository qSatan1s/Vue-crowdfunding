<template>
    <div>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/">WorldHelp</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav active">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Users">Users</router-link>
                    </li>
                </ul>
            </div>
            <router-link class="btn btn-outline-success my-2 my-sm-0 mr-3 register" to="/Register">Register</router-link>
        </nav>
    </div>
</template>