import React, { Component } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Routes, Route, BrowserRouter} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import CarsPage from "./pages/CarsPage";
import CarModelPage from "./pages/CarModelPage";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="cars" element={<CarsPage />} />
                    {/*<Route path="cars/:car_slug" element={<CarModelPage />} />*/}
                    <Route path="cars/:seo_text/:car_slug" element={<CarModelPage />} />
                <Route path="contacts" element={<ContactsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>

        <ToastContainer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
