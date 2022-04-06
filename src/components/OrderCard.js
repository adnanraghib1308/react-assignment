import { useEffect, useState } from 'react';
import Form from './Form';
import './OrderCard.css'
const OrderCard = ({item, updateState, setUpdateState}) => {
    const [edit, setEdit] = useState(false);
    
    const handleDelete = () => {
        const data = JSON.parse(localStorage.getItem('data'));
        const updatedData = data.filter((curr) => curr.id !== item.id);
        localStorage.setItem('data', JSON.stringify(updatedData));
        setUpdateState(!updateState);
    }
    return (
        <div className="card-container">
            <span className="detail">
                <p>Customer Name:</p>
                <p>{item.customer_name}</p>
            </span>
            <span className="detail">
                <p>Email: </p>
                <p>{item.customer_email}</p>
            </span>
            <span className="detail">
                <p>Product:</p>
                <p>{item.product}</p>
            </span>
            <span className="detail">
                <p>Quantity:</p>
                <p>{item.quantity}</p>
            </span>
            <span className='detail'>
                <button onClick={() => setEdit(true)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </span>
            {edit && <Form detail={item} updateState={updateState} setUpdateState={setUpdateState}/>}
        </div>
    )
}

export default OrderCard;