import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink } from '@inertiajs/inertia-react';

export default class Navbar extends Component {
    render() {
        return (
		    <header className="bg-white shadow">
		        <div className="w-full max-w-6xl mx-auto sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
		            <div className="flex justify-between items-center px-4 py-3 sm:p-0">
		                <div>
		                    <InertiaLink className="navbar-brand block text-gray-700 hover:text-teal-600 focus:text-teal-600 focus:outline-none font-bold text-2xl" href="/">Bilal</InertiaLink>
		                </div>

		                <div className="sm:hidden">
		                    <button type="button" className="block text-gray-700 hover:text-teal-600 focus:text-teal-600 focus:outline-none">
		                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
		                            <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
		                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
		                        </svg>
		                    </button>
		                </div>
		            </div>
		            <nav className="px-2 pb-4 sm:flex sm:p-0">
		                <InertiaLink className="block px-2 py-1 text-gray-700 font-semibold rounded hover:text-teal-700 focus:outline-none" href="/login">Login</InertiaLink>
		                <InertiaLink className="mt-1 block px-2 py-1 text-gray-700 font-semibold rounded hover:text-teal-700 focus:outline-none sm:mt-0 sm:ml-2" href="/register">Register</InertiaLink>
		            </nav>
		        </div>
		    </header>
        );
    }
}