<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Category::orderBy('id', 'desc')->get();
        //$categories = Category::orderBy('id', 'desc')->get();
        //return Category::all();
    }

    public function validation($request)
    {
        $rules = [
            'category_name' => 'required' //min:10
        ];

        $errorText = [
            'required' => "This field is required!",
            'min' => "Minimum 10 word!"
        ];

        $this->validate($request, $rules, $errorText);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return response()->json([
        //     'msg' => 'Error'
        // ], 422);

        // $request->validate([
        //     'category_name' => 'required|min:10'
        // ]);

        $this->validation($request);

        return Category::create([
            'category_name' => $request->category_name
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

      $this->validation($request);

       return Category::where('id', $request->id)->update([
        'category_name' => $request->category_name
       ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */

    public function destroy(Category $category, $id)
    {
        $category = Category::find($id);

        if ($category) {
            $category->delete();
            return response()->json(["Category Delated"]);
        }

        return response()->json(["Category not found"]);
    }
}
