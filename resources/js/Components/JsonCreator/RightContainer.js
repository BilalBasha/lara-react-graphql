
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";

class RightContainer extends Component {
    render() {
		ace.config.set('basePath', 'ace/');
        return (
            <div className="flex-1">
                <AceEditor
				 	placeholder="Placeholder Text"
					name="blah2"
					mode="javascript"
  					theme="twilight"
					onLoad={this.onLoad}
					onChange={this.onChange}
					fontSize={14}
					showPrintMargin={true}
					showGutter={true}
					highlightActiveLine={true}
					value={`function onLoad(editor) {
							console.log("i've loaded");
						}
					`}
					 setOptions={{
					  	enableBasicAutocompletion: true,
					  	enableBasicAutocompletion: true,
					  	enableSnippets: true,
					  	showLineNumbers: true,
					  	tabSize: 2,
				  	}}
				/>
            </div>
        );
    }
}

export default RightContainer;