import React from 'react';
import ProductBlock from './ProductBlock';
import { connect } from 'react-redux';
import { logoutTC } from '../../Redux/authReducer';

class ProductBlockContainer extends React.Component {
    render(){
        return <ProductBlock logoutTC={this.props.logoutTC}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { logoutTC })(ProductBlockContainer);