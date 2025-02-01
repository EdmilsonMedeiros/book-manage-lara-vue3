<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Author;
use Exception;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            return response()->json([
                "status" => true,
                "authors" => Author::all()
            ], 200);
        }catch(Exception $e){
            return response()->json([
                "status" => false,
                "error"  => "Something went wrong: " . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'state' => 'required|boolean'
            ]);

            $author = Author::create($validated);

            return response()->json([
                "status" => true,
                "message" => "Author created successfully",
                "author" => $author
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                "status" => false,
                "error" => "Error creating author: " . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Author $author)
    {
        try {
            if(!$author){
            return response()->json([
                "status" => false,
                "error" => "Author not found"
            ], 404);
            }

            return response()->json([
                "status" => true,
                "author" => $author
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                "status" => false,
                "error" => "Error finding author: " . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Author $author)
    {
        try {
            $author->update($request->all());
    
            return response()->json([
                "status" => true,
                "message" => "Author updated successfully",
                "author" => $author
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                "status" => false,
                "error" => "Error updating author: " . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Author $author)
    {
        if($author->books()->exists()){
            return response()->json([
                "status" => false,
                "error" => "Cannot delete author: This author has associated books"
            ], 409);
        }

        try {
            $author->delete();
            
            return response()->json([
                "status" => true,
                "message" => "Author deleted successfully"
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                "status" => false,
                "error" => "Error deleting author: " . $e->getMessage()
            ], 500);
        }   
    }
}
