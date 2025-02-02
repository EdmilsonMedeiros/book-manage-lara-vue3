@extends('layout.index')

@section('title', 'Autores')

@section('subcontent')

<div class="container-fluid mt-2">
    @include('author.modals.new-author')
    
    <!-- Header Section -->
    <div class="container mt-2">
        <div class="row mb-2">
            <div class="col-md-12 d-flex justify-content-between align-items-center">
                <div>
                    <h2 class="fw-bold text-primary mb-0">Lista de Autores</h2>
                    <p class="text-muted small">Gerencie os autores cadastrados no sistema</p>
                </div>
                <a href="#" class="btn btn-outline-primary px-4 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#newAuthorModal">
                    <i class="fas fa-plus-circle me-2"></i>Novo Autor <span class="bi bi-plus"></span>
                </a>
            </div>
        </div>
    </div>

    <div class="container">
            <!-- Main Card -->
    <div class="card shadow-sm">
        <div class="card-header bg-primary text-white m-0">
            <h5 class="card-title mb-0">Autores Cadastrados</h5>
        </div>

        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-hover mb-0" id="authorsTable">
                    <thead class="table-light">
                        <tr>
                            <th scope="col" class="text-start">#ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Status</th>
                            <th scope="col" width="200" class="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($authors as $author)
                            <tr>
                                <td class="text-start">{{ $author->id }}</td>
                                <td class="fw-medium">{{ $author->name }}</td>
                                <td>
                                    <span class="badge rounded-pill bg-{{ $author->state === 1 ? 'success' : 'danger' }}">
                                        {{ !$author->state ? 'Inativo' : 'Ativo' }}
                                    </span>
                                </td>
                                <td class="text-center">
                                    <a href="#" class="btn btn-sm btn-outline-warning" title="Editar" 
                                        data-bs-toggle="modal" data-bs-target="#newAuthorModal{{$author->id}}">
                                        <i class="bi bi-pencil"></i>
                                    </a>
                                    
                                    <form action="{{ route('authors.destroy', $author->id) }}" method="POST" class="d-inline">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-outline-danger ms-1" 
                                                title="Excluir" 
                                                onclick="return confirm('Tem certeza que deseja excluir este autor?')">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </form>
                                </td>
                            </tr>
                            @include('author.modals.new-author', [$author])
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
</div>
@endsection

@push('scripts')
<script>
    let table = new DataTable('#authorsTable', {
        responsive: true,
        pageLength: 5,
        lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Todos"]],
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/pt-BR.json'
        },
        columnDefs: [
            { orderable: false, targets: 3 }
        ]
    });
</script>
@endpush