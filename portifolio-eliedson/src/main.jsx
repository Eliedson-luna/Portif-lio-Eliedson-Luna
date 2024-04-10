import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header/index.jsx'
import { HomeRoute, AboutPageRoute, ProjectPageRoute } from './Routes/pagesRoute/index.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Open Sans',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: linear-gradient(90deg, #030842 10%, #040836 20%, #03062b 30%, black);
    
  }
  ::-webkit-scrollbar {
        width: 0px;
      }
  code {
    font-family: "Open Sans", sans-serif;
  }

  li {
    list-style: none;    
  }
  a {
    text-decoration: none;
  }

`

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomeRoute />} />
                <Route path="/Projetos" element={<ProjectPageRoute />} />
                <Route path='/Sobre' element={<AboutPageRoute />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>

)
