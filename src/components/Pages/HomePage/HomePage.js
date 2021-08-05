import Slider from "../HomePage/Slider";
import "./homepage.css";
import { Button } from "react-bootstrap";
// import {Card} from 'react-bootstrap';
import Middle from "./middle";
import Card from "./Card";

const homepage = () => {
  return (
    <div>
      <Slider />

      <br />
      <br />
      <h1>
        <b>Video with Description</b>
      </h1>
      <Middle />

      <br />
      <br />
      <h1>
        <b>Articles Card</b>
      </h1>
      <Card />
    </div>
  );
};

export default homepage;
