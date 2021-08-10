import React from "react";
import "./style.css";
import { UncontrolledAlert } from 'reactstrap';
import Navbars from "./Navbars";
import Carousel from "./Carousel";


export default function App() {
  return (
    <div>
      <Navbars/>
      <Carousel/>
     
    </div>
  );
}
