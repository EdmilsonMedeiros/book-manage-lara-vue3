@extends('app')

@section('title', 'Cadastro')

@section('content')

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card shadow-lg border-0 rounded-lg overflow-hidden">
                <div class="card-header bg-gradient-primary text-white text-center py-4" 
                     style="background: linear-gradient(45deg, #4e73df, #224abe);">
                    <h3 class="mb-0 fw-bold">
                        <i class="bi bi-person-plus me-2 fs-4"></i>
                        Criar uma nova conta
                    </h3>
                    <p class="mt-2 mb-0 text-white-50">Preencha os campos para se cadastrar</p>
                </div>
                <div class="card-body p-4">
                    @if ($errors->any())
                        <div class="alert alert-danger alert-dismissible fade show">
                            <ul class="mb-0">
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>
                    @endif

                    <form method="POST" action="{{ route('register') }}" class="needs-validation">
                        @csrf
                        <div class="mb-4">
                            <label for="name" class="form-label fw-bold">Nome Completo</label>
                            <div class="input-group input-group-lg">
                                <span class="input-group-text bg-light border-end-0">
                                    <i class="bi bi-person text-primary"></i>
                                </span>
                                <input type="text" class="form-control border-start-0" 
                                    id="name" name="name" value="{{ old('name') }}" 
                                    required autofocus placeholder="Digite seu nome">
                            </div>
                        </div>
                        <div class="mb-4">
                            <label for="email" class="form-label fw-bold">Endereço de Email</label>
                            <div class="input-group input-group-lg">
                                <span class="input-group-text bg-light border-end-0">
                                    <i class="bi bi-envelope text-primary"></i>
                                </span>
                                <input type="email" class="form-control border-start-0" 
                                    id="email" name="email" value="{{ old('email') }}" 
                                    required placeholder="Digite seu email">
                            </div>
                        </div>
                        <div class="mb-4">
                            <label for="password" class="form-label fw-bold">Senha</label>
                            <div class="input-group input-group-lg">
                                <span class="input-group-text bg-light border-end-0">
                                    <i class="bi bi-key text-primary"></i>
                                </span>
                                <input type="password" class="form-control border-start-0" 
                                    id="password" name="password" required 
                                    placeholder="Digite sua senha">
                            </div>
                        </div>
                        <div class="mb-4">
                            <label for="password_confirmation" class="form-label fw-bold">Confirmar Senha</label>
                            <div class="input-group input-group-lg">
                                <span class="input-group-text bg-light border-end-0">
                                    <i class="bi bi-key text-primary"></i>
                                </span>
                                <input type="password" class="form-control border-start-0" 
                                    id="password_confirmation" name="password_confirmation" required 
                                    placeholder="Confirme sua senha">
                            </div>
                        </div>
                        <button type="submit" 
                                class="btn btn-primary w-100 py-3 fw-bold text-uppercase btn-lg shadow-sm">
                            <i class="bi bi-person-plus me-2"></i>Cadastrar
                        </button>
                    </form>
                </div>
                <div class="card-footer text-center py-4 bg-light border-0">
                    <div class="text-muted">
                        Já tem uma conta? 
                        <a href="{{ route('login') }}" 
                           class="text-primary fw-bold text-decoration-none">
                            Faça login aqui
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.hover-opacity:hover { opacity: 0.8; }
.input-group-text { min-width: 46px; }
.form-control:focus { box-shadow: none; border-color: #4e73df; }
.btn-primary { background: linear-gradient(45deg, #4e73df, #224abe); border: none; }
.btn-primary:hover { background: linear-gradient(45deg, #224abe, #1a3a96); }
</style>

@endsection