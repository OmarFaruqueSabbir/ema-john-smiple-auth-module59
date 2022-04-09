import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product,handleRemove}) => {

    const {name,img,price,shipping,quantity} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details'>
                <div className="review-detail">
                    <p className='product-name' title={name}>
                        {name.length> 20? name.slice(0,20) + '...': name}
                    </p>
                    <p>Price: <span className='orange-color'></span>${price}</p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete-con'>
                    <button onClick={()=> handleRemove(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;