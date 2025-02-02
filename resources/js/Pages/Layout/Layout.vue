<template>
    <div>
        <div class="container mt-1">
            <div class="card bg-primary text-white">
                <div
                    class="card-body d-flex justify-content-between align-items-center"
                >
                    <div>
                        <span class="text-white-50">Bem-vindo,</span>
                        <span class="fw-bold ms-1">{{ user.name }}</span>
                    </div>
                    <form @submit.prevent="logOut" class="m-0">
                        <button type="submit" class="btn btn-outline-light">
                            <i class="bi bi-box-arrow-right me-2"></i>Sair
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light mt-2">
                <div class="p-1">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link
                                    :href="{ name: 'dashboard' }"
                                    class="nav-link"
                                    :class="{
                                        active: isActiveRoute('dashboard'),
                                    }"
                                >
                                    <span class="bi bi-house"></span> Início
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    :href="{ name: 'authors.index' }"
                                    class="nav-link"
                                    :class="{
                                        active: isActiveRoute('authors.*'),
                                    }"
                                >
                                    <span
                                        class="bi bi-file-earmark-person"
                                    ></span>
                                    Gerenciar Autores
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    :href="{ name: 'users.index' }"
                                    class="nav-link"
                                    :class="{
                                        active: isActiveRoute('users.*'),
                                    }"
                                >
                                    <span class="bi bi-person-gear"></span>
                                    Gerenciar Permissões
                                </Link>
                            </li>
                        </ul>
                    </div> -->
                </div>
            </nav>
        </div>

        <div v-if="errorMessage" class="container mt-4">
            <div
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
            >
                {{ errorMessage }}
                <button
                    type="button"
                    class="btn-close"
                    @click="clearError"
                    aria-label="Close"
                ></button>
            </div>
        </div>

        <div v-if="successMessage" class="container mt-4">
            <div
                class="alert alert-success alert-dismissible fade show"
                role="alert"
            >
                {{ successMessage }}
                <button
                    type="button"
                    class="btn-close"
                    @click="clearSuccess"
                    aria-label="Close"
                ></button>
            </div>
        </div>
    </div>
</template>

<script>
import { Link } from "@inertiajs/vue3";

export default {
    components: {
        Link,
    },
    props: {
        user: Object, // Replace with actual user data
    },
    data() {
        return {
            errorMessage: null,
            successMessage: null,
        };
    },
    methods: {
        logOut() {
            try {
                const response = this.$inertia.get("/logOut");
                this.$router.push("/login");
            } catch (e) {
                console.log(e);
            }
        },
        isActiveRoute(routeName) {
            return this.$route.name === routeName;
        },
        clearError() {
            this.errorMessage = null;
        },
        clearSuccess() {
            this.successMessage = null;
        },
    },
    mounted() {
        // Fetch user data and messages if needed
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
