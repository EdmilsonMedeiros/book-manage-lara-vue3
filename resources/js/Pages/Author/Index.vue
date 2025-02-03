<template>
    <Layout :user="user" />
    <!-- Header Section -->
    <div class="container mt-2">
        <div class="row mb-2">
            <div
                class="col-md-12 d-flex justify-content-between align-items-center"
            >
                <div>
                    <h2 class="fw-bold text-primary mb-0">Lista de Autores</h2>
                    <p class="text-muted small">
                        Gerencie os autores cadastrados no sistema
                    </p>
                </div>
                <button
                    class="btn btn-primary px-4 d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#newBookModal"
                >
                    Novo Autor <span class="bi bi-plus"></span>
                </button>
            </div>
        </div>
    </div>

    <div class="container">
        <Table
            :requestUrl="'/authors/getAuthors'"
            :collumnNames="['ID', 'Nome', 'Estado']"
            :collumnKeys="['id', 'name', 'state']"
            :checkBoxes="false"
            :buttons="['delete', 'edit']"
            :deleteAllButton="false"
            :perPage="5"
            :searchTitle="'Buscar autores'"
            @destroyRegisterEmit="onDestroyRegister"
            @editRegister="editRegister"
            ref="tableAuthorseRef"
        />
    </div>
    <ModalNewAuthor
        v-if="selectedAuthor"
        :author="selectedAuthor"
        @authorSubmited="onAuthorSubmited"
    />
</template>

<script>
import Layout from "@/Pages/Layout/Layout.vue";
import Table from "@/Pages/Components/Table.vue";
import ModalNewAuthor from "@/Pages/Components/ModalNewAuthor.vue";

export default {
    components: {
        Layout,
        Table,
        ModalNewAuthor,
    },
    props: {
        user: Object,
    },
    data() {
        return {
            selectedAuthor: Object,
        };
    },
    methods: {
        onAuthorSubmited() {
            this.$refs.tableAuthorseRef.reloadTable();
            this.$refs.tableAuthorseRef.getRegisters();
        },
        editRegister(author) {
            this.selectedAuthor = author;
            this.$nextTick(() => {
                $(`#modalNewAuthor${author.id}`).modal("show");
            });
        },
        onDestroyRegister(author) {
            if (confirm("Tem certeza que deseja excluir?")) {
                this.$inertia.delete(`/authors/destroy/${author}`, {
                    onSuccess: () => {
                        this.$refs.tableAuthorseRef.getRegisters();
                        this.$refs.tableAuthorseRef.reloadTable();
                    },
                    onError: () => {
                        //
                    },
                });
            }
        },
    },
};
</script>
