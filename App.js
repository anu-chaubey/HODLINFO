
import React, { useState } from 'react';
import './App.css';
import styled, { ThemeProvider} from "styled-components";
import { Footer } from "./MyComponents/Footer";
import { Proj } from "./MyComponents/Proj";

import {lightTheme,darkTheme,GlobalStyles} from "./MyComponents/themes";

const StyledApp = styled.div

function App() {

  const { throwStatement,setTheme} = useState("light")
  
  const themeToggler = ()=>{
    theme === "light"? setTheme('dark') : setTheme('light')
  }
  return (
  
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
       <GlobalStyles/>
      <StyledApp>
        
      <h3>HODLINFO </h3>
      <p>Powered By Finstreet</p>



      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="#">INR</a>
        </li>


        <li class="nav-item">
          <a class="nav-link" href="#">BTC</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">BUY BTC</a>
        </li>

      </ul>
      <Proj proj={Proj} />

      
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Platform</th>
              <th scope="col">Last Traded Price</th>
              <th scope="col">Buy/Sell Price</th>
              <th scope="col">Difference</th>
              <th scope="col">Savings</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>WazirX</td>
              <td>Rs.26,58,098</td>
              <td>Rs.26,55,000 /Rs.26,58,098</td>
              <td>-0.29%</td>
              <td>-7,705</td>

            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Bitbns</td>
              <td>Rs.26,49,943</td>
              <td>Rs.26,75,605 / Rs.26,79,943</td>
              <td>1.19%</td>
              <td>Rs.31,590</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Colodax</td>
              <td>Rs.25,83,138</td>
              <td>Rs.25,75,167 / Rs.26,08,984</td>
              <td>-2.46%</td>
              <td>Rs.65,214</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Zebpay</td>
              <td>Rs.26,64,020</td>
              <td>Rs.26,69,999 / Rs.26,62,040</td>
              <td>0.59%</td>
              <td>Rs.15,667</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>CoinDCX</td>
              <td>Rs.26,55,005</td>
              <td>Rs.26,52,894 / Rs.26,63,769</td>
              <td>0.25%</td>
              <td>Rs.6,652</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button onClick ={() => themeToggler()}>Change Theme</button>
      </StyledApp>
      </ThemeProvider>    
      <Footer />    

      
     
  
  )

};

export default App;
