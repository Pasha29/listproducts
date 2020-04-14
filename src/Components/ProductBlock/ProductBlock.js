import React from 'react';
import s from './ProductBlock.module.css'

const ProductBlock = (props) => {
console.log('props');
console.dir(props);
    return (
        <div className={s.container}>
            <p className={s.headText}>Наша продукция</p>

            <div className={s.wrapper}>
                {props.localProductData.map(item => 
                <div className={s.blockData} key={item.id}>
                    <div className={s.imgBlock}>
                        <img className={s.prodImg} src={item.ImageURL} alt={item.id}/>
                    </div>

                    <div className={s.prodData}>
                        <div className={s.propDescription}>
                            <p className={s.manufacturer}>{item.Manufacturer}</p>
                            <p className={s.sku}>{item.SKU}</p>
                        </div>
                        <div className={s.prodPrice}>
                            <p>{item.RetailPrice} грн.</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
}

export default ProductBlock;