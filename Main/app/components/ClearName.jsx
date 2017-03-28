var React = require('react');


var ClearName = React.createClass({

    clearDisplay: function(e) {
        e.preventDefault();
        this.props.onSearch('guest')
    },

    render: function() {
        return (
            <div>
                <button onClick={this.clearDisplay}>Clear Name</button>
            </div>
        )
    }
})


module.exports = ClearName;