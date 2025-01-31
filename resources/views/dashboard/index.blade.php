@extends('app')

@section('title', 'Login')

@section('content')

<div class="container mt-4">
    <div class="card bg-primary text-white">
        <div class="card-body d-flex justify-content-between align-items-center">
            <div>
                <span class="text-white-50">Bem-vindo,</span>
                <span class="fw-bold ms-1">{{ Auth::user()->name }}</span>
            </div>
            <form action="{{ route('logOut') }}" method="GET" class="m-0">
                <button type="submit" class="btn btn-outline-light">
                    <i class="bi bi-box-arrow-right me-2"></i>Sair
                </button>
            </form>
        </div>
    </div>
</div>

<div class="container mt-5">
    @include('dashboard.modals.new-author')
    @include('dashboard.modals.new-book', ['authors' => $authors])
    <div class="row">
        <div class="col-md-6">
            <a href="#" data-bs-toggle="modal" data-bs-target="#newAuthorModal" class="card text-decoration-none mb-4 shadow-sm hover-shadow">
                <div class="card-body text-center text-primary">
                    <i class="bi bi-person-plus fs-1 mb-3"></i>
                    <h5 class="card-title">Cadastrar Autor</h5>
                    <p class="card-text text-muted">Adicione novos autores ao sistema</p>
                </div>
            </a>
        </div>
        <div class="col-md-6">
            <a href="#" data-bs-toggle="modal" data-bs-target="#newBookModal" class="card text-decoration-none shadow-sm hover-shadow">
                <div class="card-body text-center text-primary">
                    <i class="bi bi-book fs-1 mb-3"></i>
                    <h5 class="card-title">Cadastrar Livro</h5>
                    <p class="card-text text-muted">Registre novos livros no sistema</p>
                </div>
            </a>
        </div>
    </div>
</div>

<style>
.hover-shadow:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
</style>

<div class="container mt-5">
    <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">Livros Cadastrados</h5>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($books as $book)
                            <tr>
                                <td>{{ $book->title }}</td>
                                <td>{{ $book->author->name }}</td>
                                <td>
                                    <button class="btn btn-sm btn-primary">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button class="btn btn-sm btn-danger">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="4" class="text-center">Nenhum livro cadastrado</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection