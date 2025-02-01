<!-- Modal -->
<div class="modal fade" id="newAuthorModal{{isset($author) ? $author->id : ''}}" tabindex="-1" aria-labelledby="newAuthorModalLabel" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-3">
            <div class="modal-header">
                <h5 class="modal-title" id="newAuthorModalLabel">{{ isset($author) ? 'Editar Autor' : 'Novo Autor' }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ isset($author) ? route('authors.update', $author->id) : route('authors.store') }}" method="POST">
                @csrf
                @if(isset($author))
                    @method('PUT')
                @endif
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome do Autor</label>
                        <input type="text" class="form-control" id="name" name="name" 
                            placeholder="Digite aqui o nome do autor" 
                            value="{{ $author->name ?? '' }}" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Estado</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="state" id="stateActive" value="1" 
                                {{ !isset($author) || (isset($author) && $author->state == 1) ? 'checked' : '' }}>
                            <label class="form-check-label" for="stateActive">
                                Ativo
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="state" id="stateInactive" value="0"
                                {{ isset($author) && $author->state == 0 ? 'checked' : '' }}>
                            <label class="form-check-label" for="stateInactive">
                                Inativo
                            </label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">{{ isset($author) ? 'Atualizar' : 'Salvar' }} <span class="bi bi-save"></span></button>
                </div>
            </form>
        </div>
    </div>
</div>