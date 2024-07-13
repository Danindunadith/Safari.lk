import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../placeOrder/addOrder.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const EditOrder = () => {

    const orders = {
        brand: "",
        model:"",
        quantity: ""
    }

    const {id} = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(orders);

    const inputChangeHandler = (e) =>{
        const {name, value} = e.target;
        setOrder({...order, [name]:value});
        console.log(order);
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getOne/${id}`)
        .then((response)=>{
            setOrder(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id])

    const submitForm = async(e)=>{
        e.preventDefault();
       await axios.put(`http://localhost:8000/api/update/${id}`,order)
       .then((response)=>{
        toast.success(response.data.msg, {position:"top-right"} )
        navigate("/")
       }).catch(error => console.log(error))
    }

    return (
        <div className='addOrder'>
            <Link to={"/"}>Back</Link>
            <h3>Edit Orders</h3>
            <form className='addOrderForm' onSubmit={submitForm} >
                <div className="inputGroup">
                    <label htmlFor="brand">Brand</label>
                    <input type="text" value={order.brand} onChange={inputChangeHandler} id="brand" name="brand" autoComplete='off' placeholder='Brand' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="model">Model</label>
                    <input type="text" value={order.model} onChange={inputChangeHandler} id="model" name="model" autoComplete='off' placeholder='Model' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="quantity" value={order.quantity} onChange={inputChangeHandler} id="quantity" name="quantity" autoComplete='off' placeholder='Quantity' />
                </div>
                <div className="inputGroup">
                    <button type="submit">Edit Orders</button>
                </div>
            </form>
        </div>
    )
}

export default EditOrder


/*import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../adduser/add.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import sweetalert2
import Swal from "sweetalert2";

const Edit = () => {
  const users = { fname: "", lname: "", email: "" };
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(users);
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getOne/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const submitForm = async (e) => {
    e.preventDefault();
    // show a sweet alert before updating the user
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
          denyButton: 'order-3',
        },
    }).then((result) => {
      if (result.isConfirmed) {
        // update the user if confirmed
        axios
          .put(`http://localhost:8000/api/update/${id}`, user)
          .then((response) => {
            toast.success(response.data.msg, { position: "top-right" });
            Swal.fire('Saved!', '', 'success')
            navigate("/");
          })
          .catch((error) => console.log(error));
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    });
  };
  return (
    <div className="addUser">
      <Link to={"/"}>Back</Link>
      <h3>Update user</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            value={user.fname}
            onChange={inputChangeHandler}
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="First name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last name</label>
          <input
            type="text"
            value={user.lname}
            onChange={inputChangeHandler}
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="Last name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={user.email}
            onChange={inputChangeHandler}
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">UPDATE USER</button>
        </div>
      </form>
    </div>
  );
};
export default Edit;*/