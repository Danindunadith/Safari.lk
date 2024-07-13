/*import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Order from './components/RetrieveOrder/Order';
import AddOrder from './components/placeOrder/AddOrder';
import EditOrder from './components/updateOrder/EditOrder';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <Order/>,
    },
    {
      path:"/add",
      element:<AddOrder/>,
    },
    {
      path:"/edit/:id",
      element:<EditOrder/>,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App; */

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import Teams from "./pages/team";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Order from "./components/RetrieveOrder/Order";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/events"
                    element={<Events />}
                />
                <Route
                    path="/annual"
                    element={<AnnualReport />}
                />
                <Route path="/team" element={<Teams />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/order" element={<Order />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router>
    );
}

export default App;