import React from "react";
import { Link } from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function MainHeader() {
    return(
        <header className="main-header">
            <div className="container">
                <div className="main-header-left">
                    <h1 className="brand">
                        <Link to="/">YourPlaces</Link>
                    </h1>
                </div>
                <div className="main-header-right">
                    <MainNavigation />
                </div>
            </div>
        </header>
    )
}