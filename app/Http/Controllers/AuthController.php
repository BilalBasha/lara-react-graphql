<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{

	public function welcome() {
    	return Inertia::render('Welcome');
	}

	public function about() {
    	return Inertia::render('About');
	}

	public function contact() {
    	return Inertia::render('Contact');
	}
}
