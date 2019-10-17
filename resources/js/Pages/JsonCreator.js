import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from '../Shared/Layout';
import LeftContainer from '../Components/JsonCreator/LeftContainer';
import RightContainer from '../Components/JsonCreator/RightContainer';

class JsonCreator extends Component {
    render() {
        return (
            <Layout>
                <div className="flex">
                    <LeftContainer />
                    <RightContainer />
                </div>
            </Layout>
        );
    }
}

export default JsonCreator;