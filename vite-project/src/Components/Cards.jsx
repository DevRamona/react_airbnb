import React from "react";

export default function Cards({img, heading1, paragraph, heading2}) {
    return(
        <div className="">
            <div>
                <img src={img}></img>
                <h1>{heading1}</h1>
                <p>{paragraph}</p>
                <h2>{heading2}</h2>

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