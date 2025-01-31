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
                    <i class="fas fa-sign-out-alt me-2"></i>Sair
                </button>
            </form>
        </div>
    </div>
</div>

<div class="container mt-5">
    <div class="row">
        <div class="col-md-6">
            <a href="" class="card text-decoration-none mb-4 shadow-sm hover-shadow">
                <div class="card-body text-center text-primary">
                    <i class="fas fa-user-edit fa-3x mb-3"></i>
                    <h5 class="card-title">Cadastrar Autor</h5>
                    <p class="card-text text-muted">Adicione novos autores ao sistema</p>
                </div>
            </a>
        </div>
        <div class="col-md-6">
            <a href="" class="card text-decoration-none shadow-sm hover-shadow">
                <div class="card-body text-center text-primary">
                    <i class="fas fa-book fa-3x mb-3"></i>
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
@endsection