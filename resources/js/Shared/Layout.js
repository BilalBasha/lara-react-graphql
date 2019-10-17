import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

export default class Layout extends Component {
    render() {
        return (
		    <div>
        		<Navbar />
				<main>
		            <div className="w-full max-w-6xl mx-auto p-4">
		                <div>
		                    {this.props.children}
		                </div>
		            </div>
        		</main>
    		</div>
        );
    }
}