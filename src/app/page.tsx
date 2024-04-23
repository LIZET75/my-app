"use client"; 
import Image from "next/image";
import styles from "./page.module.css";

import React, { useState } from 'react';


export default function Home() {
  
  
  return (
    <main className={styles.main}>
    <div>
      <h1  style={{textAlign: 'center'}}>EPLabs Mo</h1>
      <p>Help Us EP Labs Pay Their Instructor</p>

      <table border="10">
  
    <tr>
    <td style={{textAlign: 'center'}}>Table</td>
  
  </tr> 
  <tr>
    <th style={{backgroundColor: 'red'}}>Header 1</th>
    <th style={{backgroundColor: 'orange'}}>Header 2</th> 
    <th style={{backgroundColor: 'yellow'}}>Header 3</th>
  </tr>
  <tr>
    <td style={{backgroundColor: 'red'}}> Column 1</td>
    <td style={{backgroundColor: 'orange'}}> Column 2</td>
    <td style={{backgroundColor: 'yellow'}}> Column 3</td>
    
  </tr>
</table>
</div>
<form action="/send-data-here" method="post">
  <label for="first">UserName:</label>
  <input type="text" id="first" name="first" /> <br></br><br></br>
  <label for="last">Input:</label>
  <input type="text" id="last" name="last" />
  <button type="submit" style={{backgroundColor: 'green' }}>Donate</button>
</form>
  {/* the issue with the error is for the word for line 37 */}
          </main>
  );
}
