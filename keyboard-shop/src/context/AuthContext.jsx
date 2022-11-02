import React from "react";

export const AuthContext =  React.createContext(null)

export function autoLogin(){
    const json = localStorage.getItem('CurrentUser')
    return json ? JSON.parse(json) : null
}


export function getCart(){
    const json = localStorage.getItem('itemInCart')
    return json ? JSON.parse(json) : []
}

export function logOut(){
    localStorage.removeItem('CurrentUser')
}
