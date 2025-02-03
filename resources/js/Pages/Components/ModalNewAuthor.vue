<template>
    <div
        class="modal fade"
        :id="'modalNewAuthor' + (author ? author.id : '')"
        tabindex="-1"
        aria-labelledby="modalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">
                <div class="modal-header">
                    <h5 class="modal-title" :id="modalLabel">
                        {{ author ? "Editar Autor" : "Novo Autor" }}
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="name" class="form-label"
                                >Nome do Autor</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                name="name"
                                placeholder="Digite aqui o nome do autor"
                                v-model="form.name"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Estado</label>
                            <div class="form-check">
                                <input
                                    @click="setState(1)"
                                    class="form-check-input"
                                    type="radio"
                                    name="state"
                                    id="stateActive"
                                    value="1"
                                    :checked="form.state == 1"
                                />
                                <label
                                    class="form-check-label"
                                    for="stateActive"
                                >
                                    Ativo
                                </label>
                            </div>
                            <div class="form-check">
                                <input
                                    @click="setState(0)"
                                    class="form-check-input"
                                    type="radio"
                                    name="state"
                                    id="stateInactive"
                                    value="0"
                                    :checked="form.state == 0"
                                />
                                <label
                                    class="form-check-label"
                                    for="stateInactive"
                                >
                                    Inativo
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            @click="handleForm"
                            type="button"
                            class="btn btn-primary"
                        >
                            {{ author ? "Atualizar" : "Salvar" }}
                            <span class="bi bi-save"></span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { event } from "jquery";

export default {
    emits: ["authorSubmited"],
    props: {
        author: Object,
    },
    data() {
        return {
            id: null,
            form: {
                name: "",
                state: null,
            },
        };
    },
    computed: {
        modalLabel() {
            return this.author
                ? `newAuthorModalLabel${this.author.id}`
                : "newAuthorModalLabel";
        },
    },
    methods: {
        setState(value) {
            this.form.state = value;
        },
        handleForm() {
            if (!this.author) {
                this.$inertia.put(`authors/store`, this.form);
            } else {
                this.$inertia.put(`authors/update/${this.id}`, this.form);
            }

            this.$emit("authorSubmited");

            $(`#modalNewAuthor${this.id}`).modal("hide");
        },
    },
    watch: {
        author: {
            immediate: true, // Garante que a função rode na inicialização
            handler(newAuthor) {
                if (newAuthor) {
                    this.id = newAuthor.id;
                    this.form = {
                        name: newAuthor.name,
                        state: newAuthor.state === "Ativo" ? 1 : 0,
                    };
                }
            },
        },
    },
};
</script>
