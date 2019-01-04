import React from "react";
import "./puppyCard.css"

const PuppyCard = (props) => (
    <div className="card">
        <div className="img-container">
            <img alt={props.breed} src={props.image} />
        </div>
        <div className="txt-container">
            <ul>
                <li>
                    <strong>Breed:</strong> {props.breed}
                </li>
                <li>
                    <strong>Origin:</strong> {props.origin}
                </li>

            </ul>

        </div>
        <span onClick={()=>props.removePuppy(props.id)} className="remove">x</span>
    </div>
)

export default PuppyCard;