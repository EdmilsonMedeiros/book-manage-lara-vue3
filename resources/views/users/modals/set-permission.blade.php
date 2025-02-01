<!-- Modal -->
<div class="modal fade" id="setPermissionModal{{$user->id}}" tabindex="-1" aria-labelledby="setPermissionModalLabel" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-3">
            <div class="modal-header">
                <h5 class="modal-title" id="setPermissionModalLabel">Gerenciar Permissões - {{$user->name}} <i class="bi bi-shield-lock"></i></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route('users.permissions.sync', $user) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="fw-bold mb-2">Permissões Disponíveis:</label>
                        @foreach($permissions as $permission)
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" 
                                       name="permissions[]" 
                                       value="{{ $permission->name }}"
                                       id="permission_{{ $permission->id }}"
                                       {{ $user->hasPermissionTo($permission->name) ? 'checked' : '' }}>
                                <label class="form-check-label" for="permission_{{ $permission->id }}">
                                    {{ $permission->name }}
                                </label>
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Salvar Permissões</button>
                </div>
            </form>
        </div>
    </div>
</div>
