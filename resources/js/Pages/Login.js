import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from '../Shared/Layout';

class Login extends Component {
    render() {
        return (
            <Layout>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
				    <div className="mb-4">
				      <label className="block text-grey-darker text-sm font-bold mb-2 hover:text-teal-700" htmlFor="username">
				        Username
				      </label>
				      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
				    </div>
				    <div className="mb-6">
				      <label className="block text-grey-darker text-sm font-bold mb-2 hover:text-teal-700" htmlFor="password">
				        Password
				      </label>
				      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"/>
				    </div>
				    <div className="flex items-center justify-between">
				      <button className="bg-teal-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
				        Sign In
						      </button>
				      <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-teal-700" href="#">
				        Forgot Password?
				      </a>
				   </div>
				</div>
            </Layout>
        );
    }
}

export default Login;