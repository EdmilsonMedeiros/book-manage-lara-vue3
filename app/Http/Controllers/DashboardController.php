<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class DashboardController extends Controller
{
    public function index(){
        $books = Book::with('author')->get()->map(function ($book) {
            $book->cover = $book->cover ? asset('storage/' . $book->cover) : null;
            return $book;
        });
        $authors = Author::where('state', true)->get();

        return Inertia::render("Dashboard/Index", [
            'user' => Auth::user(),
            'books' => $books,
            'authors' => $authors,
        ]);
    }
}
