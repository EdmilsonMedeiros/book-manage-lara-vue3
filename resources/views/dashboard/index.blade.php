@extends('layout.index')

@section('title', 'Dashboard')

@section('subcontent')

{{-- <div class="container mt-2">
    @include('dashboard.modals.new-book', ['authors' => $authors])
    <div class="row">
        <div class="col-md-4">
            <a href="{{ route('authors.index') }}" class="card text-decoration-none mb-4 shadow-sm hover-shadow">
                <div class="card-body text-center text-primary">
                    <i class="bi bi-person-plus fs-1 mb-3"></i>
                    <h5 class="card-title">Autores</h5>
                    <p class="card-text text-muted">Visualize e adicione novos autores ao sistema</p>
                </div>
            </a>
        </div>
    </div>
</div> --}}

<style>
.hover-shadow:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
</style>

<!-- Header Section -->
<div class="container mt-2">
    <div class="row mb-2">
        <div class="col-md-12 d-flex justify-content-between align-items-center">
            <div>
                <h2 class="fw-bold text-primary mb-0">Lista de Livros</h2>
                <p class="text-muted small">Gerencie os livros cadastrados no sistema</p>
            </div>
            <a href="#" class="btn btn-outline-primary px-4 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#newBookModal">
                <i class="fas fa-plus-circle me-2"></i>Novo Livro <span class="bi bi-plus"></span>
            </a>
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
                        @foreach($books as $book)
                            <tr>
                                <td>{{ $book->title }}</td>
                                <td>{{ $book->author->name }}</td>
                                <td>
                                    <button class="btn btn-sm btn-outline-info" data-bs-toggle="modal" data-bs-target="#showBookModal{{$book->id}}">
                                        <i class="bi bi-eye"></i>
                                    </button>
                                    <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#newBookModal{{$book->id}}">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <form action="{{ route('books.destroy', $book->id) }}" method="POST" class="d-inline">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-outline-danger" onclick="return confirm('Tem certeza que deseja excluir este livro?')">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </form>
                                </td>
                            </tr>
                            @include('dashboard.modals.show-book', [$book])
                            @include('dashboard.modals.new-book', [$book])
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
<script>
    let table = new DataTable('#bookTable', {
        responsive: true,
        pageLength: 5,
        lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Todos"]],
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/pt-BR.json'
        },
        columnDefs: [
            { orderable: false, targets: 2 }
        ],
    });
</script>
@endpush