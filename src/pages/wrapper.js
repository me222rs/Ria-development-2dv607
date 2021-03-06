var React = require('react'),
	ReactDOM = require('react-dom'),
    ReactRedux = require("react-redux"),
	TimeComponent = require('./components/time'),
	UserList = require('./components/userList'),
	AuthenticationComponent = require('./components/authentication'),
    Chat = require('./components/chat');

var Wrapper = React.createClass({
    render: function(){
        var p = this.props;
        return(
            <div className="container">
				<div className="mdl-grid">
					<TimeComponent/>
	                <AuthenticationComponent/>
				</div>
				<div className="mdl-grid">
					<UserList/>
                	{p.auth.uid ?
						<Chat/> :
						<div id="loginToSeMessagesMsg"className="chatBubble mdl-cell mdl-cell--2-col mdl-card mdl-shadow--2dp">
							<div className="mdl-card__supporting-text">
								 Logga in för att <br/> se meddelanden <span className="commentBy">/Benny</span>
							</div>
						</div>
					}
				</div>
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
