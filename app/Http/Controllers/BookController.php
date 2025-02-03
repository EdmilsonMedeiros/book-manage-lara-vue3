<?php

namespace App\Http\Controllers;

use App\Helpers\ImageHelper;
use App\Models\Book;
use Exception;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Get books
     */
    public function getBooks(Request $request)
    {
        $perpage        = $request->perPage;
        $searchedValue  = $request->searchedValue;
        $page           = $request->page;

        // Carregando os livros com a relação 'author' e realizando a busca.
        $registers = Book::where('title', 'LIKE', "%$searchedValue%")
            ->orWhere('description', 'LIKE', "%$searchedValue%")
            ->orWhere('id', 'LIKE', "%$searchedValue%")
            ->with('author')  // Incluindo a relação 'author'
            ->paginate($perpage, ['*'], 'page', $page);

        // Modificando os livros para incluir o nome do autor
        $registers->getCollection()->transform(function ($book) {
            $book->cover = $book->cover ? asset('storage/' . $book->cover) : null;
            
            // Incluindo o nome do autor no livro
            $book->author_name = $book->author ? $book->author->name : null;

            return $book;
        });

        return response()->json($registers, 200);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $messages = [
            'title.required'            => 'O título é obrigatório',
            'title.max'                 => 'O título não pode ter mais que 255 caracteres',
            'author_id.required'        => 'O autor é obrigatório',
            'publish_date.required'     => 'O ano de publicação é obrigatório',
            'publish_date.date'         => 'O ano deve ser uma data',
            'publish_date.max'          => 'O ano não pode ser maior que o ano atual',
            'description.string'        => 'A descrição deve ser um texto',
            'cover.mimes'               => 'O arquivo precisa ser PNG ou JPG',
            'cover.max'                 => 'O tamanho limite do arquivo é 2MB',
        ];

        $validated = $request->validate([
            'title'             => 'required|string|max:255',
            'description'       => 'required|string',
            'author_id'         => 'required',
            'publish_date'      => 'required|date',
            'description'       => 'nullable|string',
            'cover'             => 'nullable|mimes:jpg,jpeg,png|max:2048'
        ], $messages);

        if ($request->hasFile('cover')) {
            $file = $request->file('cover');
            $filename = date('Y-m-d_H-i-s') . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('covers', $filename, 'public');
            $validated['cover'] = $path;
        }
        
        try{
            Book::create($validated);
        }catch(Exception $e){
            return redirect()->with('error', 'Algo deu errado: ' . $e->getMessage());
        }
        
        return redirect()->back()->with('success', 'Livro cadastrado com sucesso.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $book = Book::find($request->id);

        if(!$book){
            return redirect()->back()->with('error', 'Livro não encontrado.');
        }

        $messages = [
            'title.required'            => 'O título é obrigatório',
            'title.max'                 => 'O título não pode ter mais que 255 caracteres',
            'author_id.required'        => 'O autor é obrigatório', 
            'publish_date.required'     => 'O ano de publicação é obrigatório',
            'publish_date.date'         => 'O ano deve ser uma data',
            'publish_date.max'          => 'O ano não pode ser maior que o ano atual',
            'description.string'        => 'A descrição deve ser um texto',
            'cover.mimes'               => 'O arquivo precisa ser PNG ou JPG',
            'cover.max'                 => 'O tamanho limite do arquivo é 2MB',
        ];

        $validated = $request->validate([
            'title'             => 'required|string|max:255',
            'description'       => 'required|string',
            'author_id'         => 'required',
            'publish_date'      => 'required|date',
            'cover'             => 'mimes:jpg,jpeg,png|max:2048',
        ], $messages);

        try {
            if ($request->hasFile('cover')) {
                $file = $request->file('cover');
                $path = ImageHelper::resizeImage($file);
                $validated['cover'] = $path;
            } else {
                unset($validated['cover']);
            }

            $book->update($validated);
        } catch(Exception $e) {
            return redirect()->back()->with('error', 'Algo deu errado: ' . $e->getMessage());
        }

        return redirect()->back()->with('success', 'Livro atualizado com sucesso.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        try {
            $book->delete();
            return redirect()->back()->with('success', 'Livro excluído com sucesso.');
        } catch(Exception $e) {
            return redirect()->back()->with('error', 'Algo deu errado: ' . $e->getMessage());
        }
    }
}
