import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./addOrder.css";
import axios from "axios";
import toast from 'react-hot-toast';

const AddOrder = () => {
    const initialOrders = {
        name: "",
        category: "",
        brand: "",
        model: "",
        quantity: "",
    };

    const [order, setOrder] = useState(initialOrders);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create", order)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-right" });
                
                // Show a simple alert
                alert("Order submitted successfully!");

                // Reset the form
                setOrder(initialOrders);
                navigate(""); // Update this to the appropriate route if needed
            })
            .catch(error => {
                console.log(error);
                alert("There was an error submitting your order. Please try again.");
            });
    };

    return (
        <div className='addOrder'>
            <form className='addOrderForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="name">Customer's Name</label>
                    <input
                        type="text"
                        onChange={inputHandler}
                        id="name"
                        name="name"
                        autoComplete='off'
                        placeholder='Full name'
                        value={order.name}
                        required
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="category">Date</label>
                    <input
                        type="date"
                        onChange={inputHandler}
                        id="category"
                        name="category"
                        autoComplete='off'
                        placeholder='Category'
                        value={order.category}
                        required
                    />
                </div>
                

                <div className="inputGroup">
                    <label htmlFor="model">Destination</label>
                    <select
                        onChange={inputHandler}
                        id="brand"
                        name="brand"
                        value={order.brand}
                        required
                    >
                        <option value="">Select place</option>
                        <option value="Yala National park">Yala National park</option>
                        <option value="Udawalawa National Park">Udawalawa National Park</option>
                        <option value="Bundala National Park">Bundala National Park</option>
                        <option value="Wilpaththu National Park">Wilpaththu National Park</option>
                        <option value="Kumana National Park">Kumana National Park</option>


                    </select>
                </div>









                <div className="inputGroup">
                    <label htmlFor="model">Package</label>
                    <select
                        onChange={inputHandler}
                        id="model"
                        name="model"
                        value={order.model}
                        required
                    >
                        <option value="">Select Package</option>
                        <option value="Safari eco">Safari eco</option>
                        <option value="Safari primium">Safari primium</option>
                        <option value="Safari pro">Safari pro</option>
                    </select>
                </div>
                <div className="inputGroup">
                    <label htmlFor="quantity">Participant Count</label>
                    <input
                        type="number"
                        onChange={inputHandler}
                        id="quantity"
                        name="quantity"
                        autoComplete='off'
                        placeholder='Quantity'
                        value={order.quantity}
                        required
                    />
                </div>
                <div className="inputGroupBtn">
                    <button type="submit">Submit Booking</button>
                    <Link to="/orders"><button type="button">Back</button></Link>
                </div>
            </form>
        </div>
    );
};

export default AddOrder;
