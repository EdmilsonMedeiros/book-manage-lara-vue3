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

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link
                                    :href="'/'"
                                    :class="[
                                        'nav-link',
                                        isActiveRoute('/') ? 'active' : '',
                                    ]"
                                >
                                    <span class="bi bi-house"></span> Início
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    :href="'/authors/'"
                                    :class="[
                                        'nav-link',
                                        isActiveRoute('/authors')
                                            ? 'active'
                                            : '',
                                    ]"
                                >
                                    <span
                                        class="bi bi-file-earmark-person"
                                    ></span>
                                    Gerenciar Autores
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    :href="'/users'"
                                    :class="[
                                        'nav-link',
                                        isActiveRoute('/users') ? 'active' : '',
                                    ]"
                                >
                                    <span class="bi bi-person-gear"></span>
                                    Gerenciar Permissões
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <FlashMessages />
        </div>
    </div>
</template>

<script>
import { Link } from "@inertiajs/vue3";
import FlashMessages from "@/Pages/Components/FlashMessages.vue";

export default {
    components: {
        Link,
        FlashMessages,
    },
    props: {
        user: Object,
    },
    data() {
        return {};
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
            return this.$page.url.toString() == routeName;
        },
        clearError() {
            this.errorMessage = null;
        },
        clearSuccess() {
            this.successMessage = null;
        },
    },
};
</script>
