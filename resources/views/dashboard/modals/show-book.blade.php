<!-- Modal -->
<div class="modal fade" id="showBookModal{{$book->id}}" tabindex="-1" aria-labelledby="showBookModalLabel" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-3">
            <div class="modal-header">
                <h5 class="modal-title" id="showBookModalLabel">Detalhes do Livro <i class="bi bi-book mb-3"></i></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label class="fw-bold">Título:</label>
                    <p>{{ $book->title }}</p>
                </div>
                <div class="mb-3">
                    <label class="fw-bold">Descrição:</label>
                    <p>{{ $book->description }}</p>
                </div>
                <div class="mb-3">
                    <label class="fw-bold">Data de Lançamento:</label>
                    <p>{{ \Carbon\Carbon::parse($book->publish_date)->format('d/m/Y') }}</p>
                </div>
                <div class="mb-3">
                    <label class="fw-bold">Autor:</label>
                    <p>{{ $book->author->name }}</p>
                </div>
            </div>

        </div>
    </div>
</div>
