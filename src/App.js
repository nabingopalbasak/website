import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import { Container, Input, Menu } from "semantic-ui-react";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import ContactDetails from "./Components/ContactDetails"
import ContactUseReducer from "./Components/ContactUseReducer";
import ContactFormik from "./Components/ContactFormik";

import {ContactProvider} from "./Context/ContactContext";

// let activeItem = "home";
function App() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <>
      <ContactProvider>
        <Container>
          <BrowserRouter>
            <Menu secondary>
              <Menu.Item
                as={Link}
                to="/"
                name="home"
                active={activeItem === "home"}
                onClick={(e, { name }) => handleItemClick(name)}
              />
              <Menu.Item
                as={Link}
                to="/about"
                name="about"
                active={activeItem === "about"}
                onClick={(e, { name }) => handleItemClick(name)}
              />
              <Menu.Item
                as={Link}
                to="/contact"
                name="contact"
                active={activeItem === "contact"}
                onClick={(e, { name }) => handleItemClick(name)}
              />
              <Menu.Item
                as={Link}
                to="/contact-reducer"
                name="contact Reducer"
                active={activeItem === "contact Reducer"}
                onClick={(e, { name }) => handleItemClick(name)}
              />
              <Menu.Item
                as={Link}
                to="/contact-formik"
                name="contact Formik"
                active={activeItem === "contact Formik"}
                onClick={(e, { name }) => handleItemClick(name)}
              />
              <Menu.Item
                as={Link}
                to="/contact-details"
                name="contact Details"
                active={activeItem === "contact Details"}
                onClick={(e, { name }) => handleItemClick(name)}
              />
              <Menu.Menu position="right">
                <Menu.Item>
                  <Input icon="search" placeholder="Search..." />
                </Menu.Item>
                <Menu.Item
                  name="logout"
                  active={activeItem === "logout"}
                  onClick={handleItemClick}
                />
              </Menu.Menu>
            </Menu>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<Aboutus />} />
              <Route path="contact" element={<Contact />} />
              <Route path="contact-reducer" element={<ContactUseReducer />} />
              <Route path="contact-details" element={<ContactDetails />} />
              <Route path="contact-formik" element={<ContactFormik />} />
            </Routes>
          </BrowserRouter>

          {/* <BrowserRouter>
        <Menu>
          <Link to="/">
            <Menu.Item>Home</Menu.Item>
          </Link>
          <Link to="/about">
            <Menu.Item>About</Menu.Item>
          </Link>
          <Link to="/contact">
            <Menu.Item>Contact</Menu.Item>
          </Link>
        </Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
        </Container>
      </ContactProvider>
    </>
  );
}

export default App;
