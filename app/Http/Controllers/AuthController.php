<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function index()
    {
        if(Auth::user()){
            return redirect()->route('dashboard');
        }

        return view('auth.login');
    }

    public function register()
    {
        if(Auth::user()){
            return redirect()->route('dashboard');
        }

        return view('auth.register');
    }

    public function registerSubmit(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ], [
            'name.required' => 'O campo nome é obrigatório',
            'name.max' => 'O nome não pode ter mais que 255 caracteres',
            'email.required' => 'O campo e-mail é obrigatório',
            'email.email' => 'Digite um endereço de e-mail válido',
            'email.max' => 'O e-mail não pode ter mais que 255 caracteres',
            'email.unique' => 'Este e-mail já está cadastrado',
            'password.required' => 'O campo senha é obrigatório',
            'password.min' => 'A senha deve ter no mínimo 8 caracteres',
            'password.confirmed' => 'As senhas não conferem'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Auth::login($user);

        return redirect()->route('dashboard')->with('success', 'Cadastro realizado com sucesso!');
    }

    public function logOut() 
    {
        Auth::logout();
        return redirect()->route('login')->with('success', 'Você foi desconectado com sucesso!');
    }

    public function loginSubmit(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ], [
            'email.required' => 'O campo e-mail é obrigatório',
            'email.email' => 'Digite um endereço de e-mail válido',
            'password.required' => 'O campo senha é obrigatório'
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return redirect()->route('dashboard')->with('success', 'Login realizado com sucesso!');
        }

        return back()->withErrors([
            'email' => 'Credenciais inválidas.',
        ]);
    }
}
