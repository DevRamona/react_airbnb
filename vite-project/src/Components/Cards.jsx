import React from "react";

export default function Cards(props) {
    return(
        <div className="">
            <div>
                <img src={props.img}></img>
                <h1>{props.heading1}</h1>
                <p>{props.paragraph}</p>
                <h2>{props.heading2}</h2>

            </div>

            {/* <div>
                <img src="./src/images/doja.webp"className=""></img>
                <h1>Come have fun with Doja</h1>
                <p>Hosted by Cat</p>
                <h2>Coming this July</h2>

            </div>

            <div>
                <img src="./src/images/home.webp"></img>
                <h1>Come have fun with Meddy</h1>
                <p>Hosted by Medard</p>
                <h2>Coming this July</h2>

            </div>

            <div>
                <img src="./src/images/tant.webp"></img>
                <h1>Come have fun with Chris</h1>
                <p>Hosted by Eazy</p>
                <h2>Coming this July</h2>

            </div> */}
        </div>
    )
}