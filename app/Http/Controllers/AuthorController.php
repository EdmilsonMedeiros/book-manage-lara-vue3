<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthorController extends Controller
{

    /**
     * Get Authors
     */
    public function getAuthors(Request $request){
        $perpage        = $request->perPage;
        $searchedValue  = $request->searchedValue;
        $page           = $request->page;

        $registers = Author::where('name', 'LIKE', "%$searchedValue%")
            ->orWhere('state', 'LIKE', "%$searchedValue%")
            ->paginate($perpage, ['*'], 'page', $page);
        
        $registers->getCollection()->transform(function ($author) {
            $author->state = $author->state == 1 ? 'Ativo' : 'Inativo';
            return $author;
        });

        return response()->json($registers, 200);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $authors = Author::all();

        return Inertia::render('Author/Index', [
            'authors' => $authors,
            'user' => Auth::user()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $messages = [
            'name.required'     => 'O campo nome é obrigatório',
            'name.string'       => 'O nome deve ser um texto',
            'name.max'          => 'O nome não pode ter mais que 255 caracteres',
            'state.required'    => 'O campo estado é obrigatório',
            'state.boolean'     => 'O estado deve ser verdadeiro ou falso'
        ];

        $validatedData = $request->validate([
            'name'  => 'required|string|max:255',
            'state' => 'required|boolean'
        ], $messages);
        
        try{
            Author::create($validatedData);
        } catch(Exception $e){
            return redirect()->back()->with('error', "Algo deu errado: " . $e->getMessage());
        }

        return redirect()->back()->with('success', 'Autor cadastrado com sucesso.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Author $author)
    {
        $messages = [
            'name.required'     => 'O campo nome é obrigatório',
            'name.string'       => 'O nome deve ser um texto',
            'name.max'          => 'O nome não pode ter mais que 255 caracteres',
            'state.required'    => 'O campo estado é obrigatório',
            'state.boolean'     => 'O estado deve ser verdadeiro ou falso'
        ];

        $validatedData = $request->validate([
            'name'  => 'required|string|max:255',
            'state' => 'required|boolean'
        ], $messages);

        try{
            $author->update($validatedData);
        } catch(\Exception $e){
            return redirect()->back()->with('error', 'Algo deu errado: '. $e->getMessage());
        }

        return redirect()->back()->with('success', 'Autor atualizado com sucesso.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Author $author)
    {

        if($author->books()->exists()){
            return redirect()->back()->with('error', 'Erro: Este autor possui livro(s) vinculado(s).');
        }

        try {
            $author->delete();
            return redirect()->back()->with('success', 'Autor removido com sucesso.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Erro ao remover autor: ' . $e->getMessage());
        }
    }

}
