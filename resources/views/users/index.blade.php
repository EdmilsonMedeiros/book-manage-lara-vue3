@extends('layout.index')

@section('title', 'Usuários')

@section('subcontent')
<div class="container mt-2">
    <div class="row mb-2">
        <div class="col-md-12 d-flex justify-content-between align-items-center">
            <div>
                <h2 class="fw-bold text-primary mb-0">Lista de Usuários</h2>
                <p class="text-muted small">Gerencie as permissões dos usuários cadastrados.</p>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">Usuários Cadastrados</h5>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-hover" id="userTable">
                    <thead class="table-light">
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($users as $user)
                            <tr>
                                <td>{{ $user->name }}</td>
                                <td>{{ $user->email }}</td>
                                <td>
                                    <button class="btn btn-outline-warning btn-sm" data-bs-toggle="modal" data-bs-target="#setPermissionModal{{ $user->id }}"><span class="bi bi-key"></span></button>
                                </td>
                            </tr>

                            @include('users.modals.set-permission', ['permissions' => $permissions])
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
    let table = new DataTable('#userTable', {
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