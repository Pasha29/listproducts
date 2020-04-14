import React from 'react';
import ProductBlock from './ProductBlock';
import { connect } from 'react-redux';
import { logoutTC } from '../../Redux/authReducer';
import { localProductData } from '../../Data/localData';
import { authRedirectComponent } from '../../Redux/authRedirect';

class ProductBlockContainer extends React.Component {
    render(){
        return <ProductBlock localProductData={localProductData} logoutTC={this.props.logoutTC}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let withRedirect = authRedirectComponent(ProductBlockContainer);

export default connect(mapStateToProps, { logoutTC })(withRedirect);