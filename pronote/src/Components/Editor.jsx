import React, { Component } from 'react';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="input">
                        <h3>Input</h3>
                        <textarea
                            className="input-text"
                            onChange={this.handleChange}
                            value={this.state.value}  // Use "value" instead of "defaultValue"
                        />
                    </div>
                    <div className="output">
                        <h3>Pro Note</h3>
                        <div className="output-text">{this.state.value}</div> {/* Display the value in the output */}
                    </div>
                </div>
            </>
        );
    }
}

export default Editor;
