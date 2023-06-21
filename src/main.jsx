import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Form from './componentes/form/Form.jsx'
import './index.css'
import Header from './componentes/header/Header.jsx'
import Navbar from './componentes/navbar/Navbar.jsx'
import Aside from './componentes/aside/Aside.jsx'
import Footer from './componentes/footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="grid-container">
      <Header />
      <Navbar />
      <Form />
      <Aside />
      <Footer />
    </div>
  </React.StrictMode>,
)
