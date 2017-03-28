var React = require('react');
var ReactDOM = require('react-dom');


var Container = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Testing</h3>
            </div>
        )
    }
})


ReactDOM.render(<Container />, document.getElementById('container'))