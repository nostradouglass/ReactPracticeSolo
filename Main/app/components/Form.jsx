var React = require('react');

var Form = React.createClass( {
    submitName: function(e) {
        e.preventDefault();

        if (this.refs.name.value) {
        
        this.props.onSearch(this.refs.name.value)
        this.refs.name.value = '';
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.submitName}>
                    <input type="text" ref="name" placeholder="Enter your Name." /><br /><br/>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
})

module.exports = Form;