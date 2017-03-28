var React = require('react');
var ReactDOM = require('react-dom');

var Form = require('./components/Form');
var DisplayName = require('./components/DisplayName');
var ClearName = require('./components/ClearName');

var Container = React.createClass({

    getInitialState: function() {
        return { name: "guest"}
    },

    handleSearch: function(name) {
        this.setState( {
            name: name
        })
    },

    render: function() {
        return (
            <div>
                <h3>Simple First Kelly React App</h3>
                <Form onSearch={this.handleSearch} />
                
                <ClearName onSearch={this.handleSearch}/>
                <DisplayName name={this.state.name} />
            </div>
        )
    }
})


ReactDOM.render(<Container />, document.getElementById('container'))