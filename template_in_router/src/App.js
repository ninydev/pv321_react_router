import './assets/css/styles.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from "./layouts/MainLayout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import {Suspense} from "react";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Error404Page from "./pages/Error404";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<IndexPage />} />

                {/* Лениво загружаемый AboutPage */}
                <Route path="about" element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <AboutPage />
                    </Suspense>
                } />

                <Route path="projects" element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <ProjectsPage />
                    </Suspense>
                } />

                <Route path="contact" element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <ContactPage />
                    </Suspense>
                } />

                <Route path="*" element={<Error404Page />} />
            </Route>
        </Routes>
      <ToastContainer/>
    </div>
      </BrowserRouter>
  );
}

export default App;
