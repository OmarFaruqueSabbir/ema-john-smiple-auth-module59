import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { useProducts } from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Order = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCart(products);
    const navigate = useNavigate();

    const handleRemove = product =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="review-item-container">
                {
                    cart.map(product => <ReviewItem key={product.id}  product={product} handleRemove={handleRemove} />)
                }
            </div>
            <div className='cart-container'>
                <Cart cart = {cart} >
                        <button onClick={() => navigate('/inventory')}>Inventory</button>

                    {/* <Link to='/inventory'>
                        <button>Inventory</button>
                    </Link> */}
                </Cart>

                    

            </div>
        </div>
    );
};

export default Order;