import { useState } from "react";
import OrderCard from "./OrderCard";

const Order = () => {
    const [updateState, setUpdateState] = useState(false);
    const data = JSON.parse(localStorage.getItem("data")); 
    useState(() => {}, [updateState])
    return (
        <div className="orders-container">
            <p className="title">Orders</p>
            <div className="orders-container">
                {data.map((item) => (
                    <OrderCard key={item.id} item = {item} updateState={updateState} setUpdateState={setUpdateState}/>
                ))}
            </div>
        
        </div>
    )
}

export default Order;