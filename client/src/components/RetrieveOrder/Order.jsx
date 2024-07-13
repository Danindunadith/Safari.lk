import React, { useEffect, useState } from "react";
import "./order.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/api/getall");
            setOrders(response.data);
        };

        fetchData();
    }, []);

    const deleteOrder = async (orderId) => {
        await axios.delete(`http://localhost:8000/api/delete/${orderId}`)
            .then((response) => {
                setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
                toast.success(response.data.msg, { position: 'top-right' });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const generateReport = () => {
        const doc = new jsPDF();
        
        doc.setFontSize(20);
        doc.text("Order Report", 14, 22);
        
        doc.autoTable({
            head: [['Order ID', "Supplier's Name", 'Category', 'Brand', 'Model', 'Quantity']],
            body: orders.map(order => [
                order._id,
                order.name,
                order.category,
                order.brand,
                order.model,
                order.quantity
            ]),
            startY: 30
        });

        doc.save("order_report.pdf");
    };

    // Filtered orders based on the search term
    const filteredOrders = orders.filter(order => 
        order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='OrderTable'>
            
            <button onClick={generateReport} className='generateReportButton'>Generate Report</button>
            <h1>Bookings List</h1>
            <input
                type="text"
                placeholder="Search by Supplier's Name, Category, or Brand"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="searchInput"
            />
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Order_Id</th>
                        <th>Customer's Name</th>
                        <th>Date</th>
                        <th>Destination</th>
                        <th>Package</th>
                        <th>Participant Count</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((order, index) => (
                        <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.category}</td>
                            <td>{order.brand}</td>
                            <td>{order.model}</td>
                            <td>{order.quantity}</td>
                            <td className='actionButtons'>
                                <button onClick={() => deleteOrder(order._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Order;
