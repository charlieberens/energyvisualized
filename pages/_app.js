import "../styles/globals.scss";

import React, { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function MyApp({ Component, pageProps }) {
    const [dark, setDark] = useState(true);

    return (
        <div className={dark ? "theme--dark" : "theme--light"}>
            <button onClick={() => setDark(!dark)} className="theme-toggle">
                {dark ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
            </button>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
