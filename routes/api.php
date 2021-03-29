<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\TestController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::any('{any}', function () {
//     return view('welcome');
// });



//Route::get('/{any}', 'SiteController')->where('any', '^(?!api).*$');


//Blog
Route::resource('blog', BlogController::class)->except(['show']);
Route::resource('cat', CategoryController::class)->except(['show']);
Route::post('cat/edit', [CategoryController::class, 'update']);
Route::resource('tag', TagController::class)->except(['show']);

//Route::get('redirect', [TestController::class, 'test']);

Route::get('getC', [TestController::class, 'getCat']);


Route::get('{any}', function () {
    return view('welcome');
   //return 'testisng any';
})->where('any', '^(?!api).*$');
