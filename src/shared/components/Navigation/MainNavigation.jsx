import React from "react";
import NavItem from "./NavItem";

export default function MainNavigation() {
    const navItems = [
        {
            title: "all users",
            url: "/"
        },{
            title: "My places",
            url: "/"
        },{
            title: "add places",
            url: "/"
        },{
            title: "authenticate",
            url: "/"
        },
    ]



    return(
        <nav className="main-navigation">
            <ul className="main-navigation__navbar">
                {navItems.map((d,i)=> (
                <li key={i} className="main-navigation__navbar-item">
                    <NavItem data={d} />
                </li>
                 ))}
            </ul>
        </nav>
    )
}