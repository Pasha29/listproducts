import React from 'react';
import s from './SpecificProduct.module.css'

let SpecificProduct = ({localProductData}) => {
    return (
        <div className={s.container}>
            <p className={s.headText}>Товар</p>

            <div className={s.wrapper}>
                <div className={s.blockData} key={localProductData.id}>
                    <div className={s.imgBlock}>
                        <img className={s.prodImg} src={localProductData.ImageURL} alt={localProductData.id}/>
                    </div>

                    <div className={s.prodData}>
                        <div className={s.propDescription}>
                            <p className={s.manufacturer}>{localProductData.Manufacturer}</p>
                            <p className={s.sku}>{localProductData.SKU}</p>
                            <p>Количество товара: {localProductData.TotalStock}</p>
                            <p className={s.prodPrice}>{localProductData.RetailPrice} грн.</p>
                            <p>{localProductData.Description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecificProduct;