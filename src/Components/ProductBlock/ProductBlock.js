import React from 'react';
import s from './ProductBlock.module.css'

const ProductBlock = (props) => {
    console.log('props');
    console.dir(props);
    return (
        <>
          <div className={s.ProductBlock}>ProductBlock</div>
          <button onClick={props.logoutTC}>Log out</button>
        </>
    );
}

export default ProductBlock;