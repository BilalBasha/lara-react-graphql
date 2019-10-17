<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'AuthController@welcome');

// Route::get('/about', 'AuthController@about');
// 
// Route::get('/contact', 'AuthController@contact');

// Route::get('/signup', 'AuthController@signup');

// Route::get('/login', 'AuthController@login');


Auth::routes();

Route::get('/json-creator', 'JsonController@index');