import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from '../Shared/Layout';

class About extends Component {
    render() {
        return (
            <Layout>
                <h1 className="text-2xl font-semibold mb-3">About</h1>
                <p>About to my first Inertia.js app!</p>
            </Layout>
        );
    }
}

export default About;