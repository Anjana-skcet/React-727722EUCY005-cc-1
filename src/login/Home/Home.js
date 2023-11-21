import React, {Component} from "react";
export default function Child({gfgcolor,usercolor}){
    return(
        <div>
        <h1>This is a child component</h1>
        <h1 style={{color:gfgcolor}}>
        COLLEGE</h1>
        <h1 style={{color:usercolor}}>
        Welcome to SKCET</h1>
        </div>
    );
}