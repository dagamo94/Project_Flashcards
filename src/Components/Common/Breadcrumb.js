import React from "react";

export function Breadcrumb({history}){
    const {pathname} = history.location;

    return (
        <div>
            <p>Path: {pathname.split("/").join(" / ")}</p>
        </div>
    )
}