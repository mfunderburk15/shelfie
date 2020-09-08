import React from 'react'
import { withRouter } from 'react-router-dom'

function Product(props) {
    let { id, name, price, imgurl } = props.data;
    return (
        <div className='Product'>
            <img src={imgurl} />
            <div className='product_box'>
                <p className='product_title'>{name}</p>
                <p className='product_price'>${price}</p>
            </div>
            <div className='product_button_box'>
                <button onClick={() => props.deleteProduct(id)}>Delete</button>
                <button onClick={() => props.history.push(`/edit/${props.data.id}`)}>Edit</button>
            </div>
        </div>
    )
}

export default withRouter(Product)