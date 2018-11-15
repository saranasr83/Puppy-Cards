import React from "react";
import "./PuppyCard.css"

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
    </div>
)

export default PuppyCard;