<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test(){
        return redirect()->away('https://www.google.com');
    }

    public function getCat(){
        return Category::orderBy('id', 'desc')->get();
        //$categories = Category::orderBy('id', 'desc')->get();
        //return view('test', compact('categories'));
    }
}
