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
        $books = Book::all();
        $authors = Author::wherestate(true)->get();

        return Inertia::render("Dashboard/Index", [
            'user' => Auth::user(),
            'books' => $books,
            'authors' => $authors,
        ]);
    }
}
