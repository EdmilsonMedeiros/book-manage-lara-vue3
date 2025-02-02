<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <FlashMessages />
                <div class="card shadow-lg border-0 rounded-lg overflow-hidden">
                    <div
                        class="card-header bg-gradient-primary text-white text-center py-4"
                        style="
                            background: linear-gradient(
                                45deg,
                                #4e73df,
                                #224abe
                            );
                        "
                    >
                        <h3 class="mb-0 fw-bold">
                            <i class="bi bi-person-circle me-2 fs-4"></i>
                            Bem-vindo de volta
                        </h3>
                        <p class="mt-2 mb-0 text-white-50">
                            Por favor, faça login na sua conta
                        </p>
                    </div>

                    <div class="card-body p-4">
                        <form
                            @submit.prevent="handleSubmit"
                            class="needs-validation"
                        >
                            <div class="mb-4">
                                <label for="email" class="form-label fw-bold"
                                    >Endereço de Email</label
                                >
                                <div class="input-group input-group-lg">
                                    <span
                                        class="input-group-text bg-light border-end-0"
                                    >
                                        <i
                                            class="bi bi-envelope text-primary"
                                        ></i>
                                    </span>
                                    <input
                                        v-model="form.email"
                                        type="email"
                                        class="form-control border-start-0"
                                        id="email"
                                        required
                                        autofocus
                                        placeholder="Digite seu email"
                                    />
                                </div>
                            </div>

                            <div class="mb-4">
                                <label for="password" class="form-label fw-bold"
                                    >Senha</label
                                >
                                <div class="input-group input-group-lg">
                                    <span
                                        class="input-group-text bg-light border-end-0"
                                    >
                                        <i class="bi bi-key text-primary"></i>
                                    </span>
                                    <input
                                        v-model="form.password"
                                        type="password"
                                        class="form-control border-start-0"
                                        id="password"
                                        required
                                        placeholder="Digite sua senha"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                class="btn btn-primary w-100 py-3 fw-bold text-uppercase btn-lg shadow-sm"
                            >
                                <i class="bi bi-box-arrow-in-right me-2"></i
                                >Entrar
                            </button>
                        </form>
                    </div>

                    <div class="card-footer text-center py-4 bg-light border-0">
                        <div class="text-muted">
                            Não tem uma conta?
                            <Link
                                href="/register"
                                class="text-primary fw-bold text-decoration-none"
                            >
                                Cadastre-se aqui
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Link } from "@inertiajs/vue3";
import FlashMessages from "@/Pages/Components/FlashMessages.vue";
import axios from "axios";

export default {
    components: {
        Link,
        FlashMessages,
    },
    data() {
        return {
            form: {
                email: "johndoe@example.com",
                password: "12345678",
            },
        };
    },
    methods: {
        async handleSubmit() {
            this.$inertia.post("/login", this.form);
        },
    },
};
</script>

<style scoped>
.hover-opacity:hover {
    opacity: 0.8;
}
.input-group-text {
    min-width: 46px;
}
.form-control:focus {
    box-shadow: none;
    border-color: #4e73df;
}
.btn-primary {
    background: linear-gradient(45deg, #4e73df, #224abe);
    border: none;
}
.btn-primary:hover {
    background: linear-gradient(45deg, #224abe, #1a3a96);
}
</style>
