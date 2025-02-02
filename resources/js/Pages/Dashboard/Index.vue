<template>
    <Layout :user="user" />
    <FlashMessages />

    <div>
        <!-- Header Section -->
        <div class="container mt-2">
            <div class="row mb-2">
                <div
                    class="col-md-12 d-flex justify-content-between align-items-center"
                >
                    <div>
                        <h2 class="fw-bold text-primary mb-0">
                            Lista de Livros
                        </h2>
                        <p class="text-muted small">
                            Gerencie os livros cadastrados no sistema
                        </p>
                    </div>
                    <button
                        class="btn btn-outline-primary px-4 d-flex align-items-center"
                        @click="openNewBookModal"
                    >
                        Novo Livro <span class="bi bi-plus"></span>
                    </button>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="card shadow-sm">
                <div class="card-header bg-primary text-white">
                    <h5 class="card-title mb-0">Livros Cadastrados</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover" id="bookTable">
                            <thead class="table-light">
                                <tr>
                                    <th>Título</th>
                                    <th>Autor</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="book in books" :key="book.id">
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img
                                                v-if="book.cover"
                                                :src="book.cover"
                                                alt="Capa do livro"
                                                class="me-2 rounded"
                                                style="
                                                    width: 25px;
                                                    object-fit: cover;
                                                "
                                            />
                                            <i
                                                v-else
                                                class="bi bi-images fs-3"
                                                style="margin-right: 0.3em"
                                            ></i>
                                            <span>{{ book.title }}</span>
                                        </div>
                                    </td>
                                    <td>{{ book.author.name }}</td>
                                    <td>
                                        <!-- <button
                                            class="btn btn-sm btn-outline-info"
                                            @click="openShowBookModal(book.id)"
                                        >
                                            <i class="bi bi-eye"></i>
                                        </button>
                                        <button
                                            class="btn btn-sm btn-outline-primary"
                                            @click="openEditBookModal(book.id)"
                                        >
                                            <i class="bi bi-pencil-square"></i>
                                        </button>
                                        <button
                                            class="btn btn-sm btn-outline-danger"
                                            @click="deleteBook(book.id)"
                                        >
                                            <i class="bi bi-trash"></i>
                                        </button> -->
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modals -->
        <!-- <show-book-modal
            v-if="showBookModal"
            :book="selectedBook"
            @close="closeShowBookModal"
        ></show-book-modal>
        <new-book-modal
            v-if="newBookModal"
            :book="selectedBook"
            @close="closeNewBookModal"
        ></new-book-modal> -->
    </div>
</template>

<script>
import Layout from "@/Pages/Layout/Layout.vue";
import FlashMessages from "@/Pages/Components/FlashMessages.vue";
import DataTable from "datatables.net-dt";

export default {
    props: {
        user: Object,
        books: Object,
        authors: Object,
    },
    components: {
        Layout,
        FlashMessages,
    },
    data() {
        return {
            books: [], // This should be populated with your books data
            showBookModal: false,
            newBookModal: false,
            selectedBook: null,
        };
    },
    methods: {
        openShowBookModal(bookId) {
            this.selectedBook = this.books.find((book) => book.id === bookId);
            this.showBookModal = true;
        },
        closeShowBookModal() {
            this.showBookModal = false;
            this.selectedBook = null;
        },
        openNewBookModal() {
            this.selectedBook = null;
            this.newBookModal = true;
        },
        openEditBookModal(bookId) {
            this.selectedBook = this.books.find((book) => book.id === bookId);
            this.newBookModal = true;
        },
        closeNewBookModal() {
            this.newBookModal = false;
            this.selectedBook = null;
        },
        deleteBook(bookId) {
            if (confirm("Tem certeza que deseja excluir este livro?")) {
                // Perform delete operation here
            }
        },
    },
    mounted() {
        // Initialize DataTable
        let table = new DataTable("#bookTable", {
            responsive: true,
            pageLength: 5,
            lengthMenu: [
                [5, 10, 25, 50, -1],
                [5, 10, 25, 50, "Todos"],
            ],
            language: {
                url: "https://cdn.datatables.net/plug-ins/1.13.7/i18n/pt-BR.json",
            },
            columnDefs: [{ orderable: false, targets: 2 }],
        });
    },
};
</script>
