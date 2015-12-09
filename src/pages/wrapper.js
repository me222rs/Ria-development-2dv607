var React = require('react'),
	ReactDOM = require('react-dom'),
    ReactRedux = require("react-redux"),
	TimeComponent = require('./components/time'),
	AuthenticationComponent = require('./components/authentication'),
    Chat = require('./components/chat');

var Wrapper = React.createClass({
    render: function(){
        var p = this.props;
        return(
            <div id="wrapper">
                <AuthenticationComponent/>
				<TimeComponent/>
                {p.auth.uid ? <Chat/> : <p>Login to see chat</p>}
            </div>
        );
    }
});
var mapStateToProps = function(appState){
	// This component will have access to `appState.auth` through `this.props.auth`
	return {auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
	return {

	};
};
module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Wrapper);