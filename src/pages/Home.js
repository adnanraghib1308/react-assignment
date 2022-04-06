import "./Home.css";
import Order from "../components/Order";
import { useEffect, useState } from "react";

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState();
    const [newOrder, setNewOrder] = useState(false)
    const [updateState, setUpdateState] = useState(false);
    console.log(">>>>>user " , user);

    useEffect(() => {

    }, updateState)
    const handleSubmit = () => {
        const data = JSON.parse(localStorage.getItem("data"));
        const updatedData = [{customer_name: name, customer_email: email, product, quantity}, ...data];

        localStorage.setItem("data", JSON.stringify(updatedData));
        setUpdateState(!updateState);
    }
    return (
        <div className="container">
            <div className="sideContainer">
                <img src={user.imageUrl} />
                <span className="detail">
                    <p>Name:</p>
                    <p>{user.name}</p>
                </span>
                <span className="detail">
                    <p>Email:</p>
                    <p>{user.email}</p>
                </span>
            </div>
            <Order />
            <div>
                <button onClick={() => setNewOrder(true)}>Create New</button>
                {newOrder && (
                    <div className="form-container">
                        <input className="form-item" type={'text'} placeholder={"Customer Name"} value={name} onChange={(e) => setName(e.target.value)}></input>
                        <input className="form-item" type={'text'} placeholder={"Customer Email"} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <input className="form-item" type={'text'} placeholder={"Product"} value={product} onChange={(e) => setProduct(e.target.value)}></input>
                        <input className="form-item" type={'text'} placeholder={"Quantity"} value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                        <button className="form-item" onClick={handleSubmit}>Save</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;