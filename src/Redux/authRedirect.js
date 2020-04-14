import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export let authRedirectComponent = (Component) => { 
class authRedirect extends React.Component {
    render(){
        if(!this.props.isAuth) return <Redirect path='/login'/>
        return <Component {...this.props}/>
    }
}
let containerAuthRedirect = connect(mapStateToProps)(authRedirect);

return containerAuthRedirect;
}