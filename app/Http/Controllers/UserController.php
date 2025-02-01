<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        $permissions = Permission::all();
        return view('users.index', compact('users', 'permissions'));
    }

    public function permissionsSync(User $user, Request $request)
    {
        try{
            $permissions = $request->input('permissions', []);
            $user->syncPermissions($permissions);
        }catch(Exception $e){
            return redirect()->back()->with('error', 'Algo deu errado: '.$e->getMessage());
        }
        
        return redirect()->back()->with('success', 'Permissões atualizadas.');
    }
}
