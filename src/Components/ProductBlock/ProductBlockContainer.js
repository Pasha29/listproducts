import React from 'react';
import ProductBlock from './ProductBlock';
import { connect } from 'react-redux';
import { logoutTC } from '../../Redux/authReducer';
import { localProductData } from '../../Data/localData';
import { authRedirectComponent } from '../../Redux/authRedirect';
import { withRouter } from 'react-router-dom';
import SpecificProduct from '../SpecificProduct/SpecificProduct';

class ProductBlockContainer extends React.Component {
    render(){
        let prodId = this.props.match.params.prodId;
        if(prodId){
            return <SpecificProduct localProductData={localProductData[prodId]}/>
        }
        return <ProductBlock localProductData={localProductData} logoutTC={this.props.logoutTC}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let withRedirect = authRedirectComponent(ProductBlockContainer);
let withRouterRedirect = withRouter(withRedirect);

export default connect(mapStateToProps, { logoutTC })(withRouterRedirect);