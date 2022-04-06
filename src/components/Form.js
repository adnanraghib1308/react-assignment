import { useState } from "react";
import "./Form.css"
const Form = ({detail, setUpdateState}) => {

    const [name, setName] = useState(detail.customer_name);
    const [email, setEmail] = useState(detail.customer_email);
    const [product, setProduct] = useState(detail.product);
    const [quantity, setQuantity] = useState(detail.quantity);
    
    const handleSubmit = () => {
        const data = JSON.parse(localStorage.getItem("data"));
        const updatedData = data.map((item) => item.id === detail.id ? {...item, customer_name: name, customer_email: email, product, quantity} : item);

        localStorage.setItem("data", JSON.stringify(updatedData));
        setUpdateState(true);
    }

    return (
        <div className="form-container">
            <input className="form-item" type={'text'} placeholder={"Customer Name"} value={name} onChange={(e) => setName(e.target.value)}></input>
            <input  className="form-item" type={'text'} placeholder={"Customer Email"} value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input className="form-item" type={'text'} placeholder={"Product"} value={product} onChange={(e) => setProduct(e.target.value)}></input>
            <input className="form-item" type={'text'} placeholder={"Quantity"} value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
            <button className="form-item" onClick={handleSubmit}>Save</button>
        </div>
    )
}

export default Form;