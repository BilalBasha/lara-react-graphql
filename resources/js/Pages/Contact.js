
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from '../Shared/Layout';

class Contact extends Component {
    render() {
        return (
            <Layout>
                <h1 className="text-2xl font-semibold mb-3">Contact</h1>
                <p>Contact to my first Inertia.js app!</p>
            </Layout>
        );
    }
}

export default Contact;