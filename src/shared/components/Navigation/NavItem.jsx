import React from "react";
import { NavLink } from "react-router-dom";
 
export default function NavItem({data}) {
    return(
        <NavLink activeClassName="active" to={data.url}>{data.title}</NavLink>
    )
}