<template>
    <Layout :user="user">
        <div>
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
                            class="btn btn-primary px-4 d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#newBookModal"
                        >
                            Novo Livro <span class="bi bi-plus"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="container">
                <Table
                    :requestUrl="'/books/getBooks'"
                    :collumnNames="['Titulo', 'Autor']"
                    :collumnKeys="['title', 'author_name']"
                    :checkBoxes="false"
                    :buttons="['delete', 'edit', 'show']"
                    :deleteAllButton="false"
                    :perPage="10"
                    :searchTitle="'Buscar livros'"
                    @destroyRegisterEmit="onDestroyRegister"
                    @showRegisterEmit="showRegisterEmit"
                    @editRegister="editRegister"
                    ref="tableRef"
                    :withImage="'cover'"
                />
            </div>
        </div>
        <ModalShowBook v-if="selectedShowBook" :book="selectedShowBook" />
        <ModalNewBook :authors="authors" @onBookCreated="onBookCreated" />
        <ModalNewBook
            :v-if="selectedBook"
            :authors="authors"
            :book="selectedBook"
            @onBookCreated="onBookCreated"
        />
    </Layout>
</template>
<script>
import Layout from "@/Pages/Layout/Layout.vue";
import ModalNewBook from "@/Pages/Components/ModalNewBook.vue";
import Table from "@/Pages/Components/Table.vue";
import ModalShowBook from "@/Pages/Components/ModalShowBook.vue";
import { computed } from "vue";
export default {
    props: {
        user: Object,
        books: Array,
        authors: Object,
    },
    components: {
        Layout,
        ModalNewBook,
        Table,
        ModalShowBook,
    },
    data() {
        return {
            showBookModal: false,
            newBookModal: false,
            selectedBook: null,
            selectedShowBook: null,
        };
    },
    emits: ["onBookCreated"],
    methods: {
        showRegisterEmit(book) {
            this.selectedShowBook = book;
            this.$nextTick(() => {
                $("#showBookModal" + book.id).modal("show");
            });
        },
        editRegister(book) {
            this.selectedBook = book;
            this.$nextTick(() => {
                $(`#newBookModal${book.id}`).modal("show");
            });
        },
        onBookCreated() {
            this.$refs.tableRef.getRegisters();
            this.$refs.tableRef.reloadTable();
        },
        onDestroyRegister(book) {
            if (confirm("Tem certeza que deseja excluir este livro?")) {
                this.$inertia.delete(`/books/destroy/${book}`);
                setTimeout(() => {
                    this.$refs.tableRef.getRegisters();
                    this.$refs.tableRef.reloadTable();
                }, 100);
            }
        },
    },
    mounted() {},
};
</script>
