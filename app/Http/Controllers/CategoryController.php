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
            'category_name' => 'required', //min:10
            'cat_img' => 'required',
        ];

        $errorText = [
            'required' => "This field is required!",
            'min' => "Please proveide maximum",
            'max' => "Please proveide minimun",
            'image' => "Please upload the correct file!",
            'mimes' => "Please upload the correct file!"
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
        $this->validation($request);

        return Category::create([
            'category_name' => $request->category_name,
            'category_image' => $request->cat_img
        ]);
    }

    public function upload(Request $request){
        $image = time().'.'.$request->file->extension();
        $request->file->move(\public_path('uploads'), $image);

        return $image;
    }

    public function imgDelete(Request $request){
        $file = $request->imageName;
        $file_path = public_path().'/uploads/'.$file;

        if(file_exists($file_path)){
            @unlink($file_path);
        }

        return "done";
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
        'category_name' => $request->category_name,
        'category_image'=> $request->cat_img
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
        $file = $category->category_image;
        $file_path = public_path().'/uploads/'.$file;

        if ($category && file_exists($file_path)) {
            $category->delete();
            @unlink($file_path);

            return response()->json(["Category Delated"]);
        }

        return response()->json(["Category not found"]);
    }
}
