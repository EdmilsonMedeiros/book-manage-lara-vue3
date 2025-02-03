<template>
    <div
        class="modal fade"
        :id="'newBookModal' + (book ? book.id : '')"
        tabindex="-1"
        aria-labelledby="bookModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">
                <div class="modal-header">
                    <h5 class="modal-title" id="bookModalLabel">
                        {{ book ? "Editar Livro" : "Novo Livro" }}
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <FlashMessages />
                <form
                    @submit.prevent="handleSubmit"
                    enctype="multipart/form-data"
                >
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="title" class="form-label">Título</label>
                            <input
                                type="text"
                                class="form-control"
                                id="title"
                                v-model="form.title"
                                placeholder="Digite o título do livro"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label"
                                >Descrição</label
                            >
                            <textarea
                                class="form-control"
                                id="description"
                                v-model="form.description"
                                rows="3"
                                placeholder="Digite a descrição do livro"
                                required
                            ></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="publish_date" class="form-label"
                                >Data de Lançamento</label
                            >
                            <input
                                type="date"
                                class="form-control"
                                id="publish_date"
                                v-model="form.publish_date"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="author_id" class="form-label"
                                >Autor</label
                            >
                            <select
                                class="form-select"
                                id="author_id"
                                v-model="form.author_id"
                                required
                            >
                                <option value="">Selecione um autor</option>
                                <option
                                    v-for="author in authors"
                                    :key="author.id"
                                    :value="author.id"
                                >
                                    {{ author.name }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="cover" class="form-label"
                                >Capa do Livro</label
                            >
                            <input
                                type="file"
                                class="form-control"
                                id="cover"
                                @change="handleFileChange"
                                accept=".jpg,.jpeg,.png"
                            />
                            <img
                                v-if="imagePreview"
                                :src="imagePreview"
                                alt="Preview"
                                style="max-width: 200px; margin-top: 10px"
                            />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">
                            {{ book ? "Atualizar" : "Salvar" }}
                            <i class="bi bi-save"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FlashMessages from "../Components/FlashMessages.vue";
export default {
    components: {
        FlashMessages,
    },
    props: {
        book: {
            type: Object,
            default: null,
        },
        authors: {
            type: Array,
            required: true,
        },
    },
    emits: ["onBookCreated"],
    data() {
        return {
            form: {
                title: this.book ? this.book.title : "",
                description: this.book ? this.book.description : "",
                publish_date: this.book ? this.book.publish_date : "",
                author_id: this.book ? this.book.author_id : "",
                cover: null,
            },
            imagePreview: this.book && this.book.cover ? this.book.cover : null,
        };
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.form.cover = file;
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imagePreview = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.imagePreview = null;
            }
        },
        handleSubmit() {
            if (this.form.cover === null) {
                delete this.form.cover;
            }
            const formData = new FormData();
            for (const key in this.form) {
                formData.append(key, this.form[key]);
            }
            if (this.book) {
                formData.append("id", this.book.id);
            }
            if (this.book) {
                this.$inertia.post("/books/update/", formData, {
                    onSuccess: () => {
                        $("#newBookModal" + this.book.id).modal("hide");
                        this.$emit("onBookCreated");
                    },
                    onError: () => {},
                });
                return;
            } else {
                this.$inertia.post("/books/store/", formData, {
                    onSuccess: () => {
                        $("#newBookModal").modal("hide");
                        this.$emit("onBookCreated");
                    },
                    onError: (errors) => {},
                });
            }
        },
    },
    watch: {
        book: {
            immediate: true,
            handler(newBook) {
                if (newBook) {
                    this.form.title = newBook.title;
                    this.form.description = newBook.description;
                    this.form.publish_date = newBook.publish_date;
                    this.form.author_id = newBook.author_id;
                    this.imagePreview = newBook.cover;
                } else {
                    this.form.title = "";
                    this.form.description = "";
                    this.form.publish_date = "";
                    this.form.author_id = "";
                    this.imagePreview = null;
                }
            },
        },
    },
};
</script>
