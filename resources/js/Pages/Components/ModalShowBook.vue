<template>
    <div
        class="modal fade"
        :id="'showBookModal' + book.id"
        tabindex="-1"
        aria-labelledby="showBookModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">
                <div class="modal-header">
                    <h5 class="modal-title" id="showBookModalLabel">
                        Detalhes do Livro <i class="bi bi-book mb-3"></i>
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3" v-if="book.cover">
                        <div class="text-center mb-3">
                            <img
                                :src="book.cover"
                                alt="Capa do livro"
                                class="img-fluid rounded mb-3"
                                style="max-height: 200px"
                            />
                        </div>
                    </div>
                    <div class="text-center mb-3" v-else>
                        <i
                            class="bi bi-image text-muted"
                            style="font-size: 100px"
                        ></i>
                        <p class="text-muted">Sem imagem</p>
                    </div>
                    <div class="mb-3">
                        <label class="fw-bold">Título:</label>
                        <p>{{ book.title }}</p>
                    </div>
                    <div class="mb-3">
                        <label class="fw-bold">Descrição:</label>
                        <p>{{ book.description }}</p>
                    </div>
                    <div class="mb-3">
                        <label class="fw-bold">Data de Lançamento:</label>
                        <p>{{ formatDate(book.publish_date) }}</p>
                    </div>
                    <div class="mb-3">
                        <label class="fw-bold">Autor:</label>
                        <p v-if="book.author.name">{{ book.author.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        book: {
            type: Object,
            required: true,
        },
    },
    methods: {
        formatDate(date) {
            const options = {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            };
            return new Date(date).toLocaleDateString("pt-BR", options);
        },
    },
};
</script>
<style scoped></style>
