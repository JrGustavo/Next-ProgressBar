"use client";
import {AppProgressBar as ProgressBar} from "next-nprogress-bar";


function  Provider ({children})  {
    return (
        <>
            <ProgressBar
            color="#F4E285"
            height="5px"
            options={{
                showSpinner: false,

            }}
            />
            {children}
        </>
    );
}

export default Provider;