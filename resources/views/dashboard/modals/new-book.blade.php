<!-- Modal -->
<div class="modal fade" id="newBookModal{{isset($book) ? $book->id : ''}}" tabindex="-1" aria-labelledby="bookModalLabel" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-3">
            <div class="modal-header">
                <h5 class="modal-title" id="bookModalLabel">{{ isset($book) ? 'Editar Livro' : 'Novo Livro' }} </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ isset($book) ? route('books.update', $book->id) : route('books.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                @if(isset($book))
                    @method('PUT')
                @endif
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="title" class="form-label">Título</label>
                        <input type="text" class="form-control" id="title" name="title" 
                            value="{{ $book->title ?? old('title') }}"
                            placeholder="Digite o título do livro" required>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Descrição</label>
                        <textarea class="form-control" id="description" name="description" rows="3" 
                            placeholder="Digite a descrição do livro" required>{{ $book->description ?? old('description') }}</textarea>
                    </div>
                    <div class="mb-3">
                        <label for="publish_date" class="form-label">Data de Lançamento</label>
                        <input type="date" class="form-control" id="publish_date" name="publish_date" 
                            value="{{ isset($book) ? $book->publish_date : old('publish_date') }}" required>
                    </div>
                    <div class="mb-3">
                        <label for="author_id" class="form-label">Autor</label>
                        <select class="form-select" id="author_id" name="author_id" required>
                            <option value="">Selecione um autor</option>
                            @foreach($authors as $author)
                                <option value="{{ $author->id }}" 
                                    {{ isset($book) && $book->author_id == $author->id ? 'selected' : '' }}>
                                    {{ $author->name }}
                                </option>
                            @endforeach
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="cover" class="form-label">Capa do Livro</label>
                        <input type="file" class="form-control" id="cover" name="cover" accept=".jpg,.jpeg,.png"
                            onchange="resizeImage(this)">
                        <img id="imagePreview" src="{{ isset($book) && $book->cover ? asset('storage/' . $book->cover) : '#' }}" 
                            alt="Preview" style="max-width: 200px; margin-top: 10px; display: {{ isset($book) && $book->cover ? 'block' : 'none' }};">
                    </div>

                    <script>
                        function resizeImage(input) {
                            if (input.files && input.files[0]) {
                                var reader = new FileReader();
                                reader.onload = function(e) {
                                    // Show preview
                                    var imagePreview = document.getElementById('imagePreview');
                                    imagePreview.src = e.target.result;
                                    imagePreview.style.display = 'block';
                        
                                    var img = new Image();
                                    img.onload = function() {
                                        var canvas = document.createElement('canvas');
                                        var ctx = canvas.getContext('2d');
                        
                                        // Calculate aspect ratio
                                        var width = 200;
                                        var height = 200;
                                        var aspectRatio = img.width / img.height;
                        
                                        if (aspectRatio > 1) {
                                            height = width / aspectRatio;
                                        } else {
                                            width = height * aspectRatio;
                                        }
                        
                                        canvas.width = width;
                                        canvas.height = height;
                                        ctx.drawImage(img, 0, 0, width, height);
                        
                                        // Convert to Blob and create new File
                                        canvas.toBlob(function(blob) {
                                            var newFile = new File([blob], input.files[0].name, {
                                                type: 'image/jpeg',
                                                lastModified: Date.now()
                                            });
                        
                                            // Create a new FileList-like object
                                            var dataTransfer = new DataTransfer();
                                            dataTransfer.items.add(newFile);
                                            input.files = dataTransfer.files;
                                        }, 'image/jpeg', 0.8);
                                    };
                                    img.src = e.target.result;
                                };
                                reader.readAsDataURL(input.files[0]);
                            }
                        }
                        </script>
                </div>



                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">{{ isset($book) ? 'Atualizar' : 'Salvar' }} <i class="bi bi-save"></i></button>
                </div>
            </form>
        </div>
    </div>
</div>