import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

const currentuser=()=>{
    const [userId,setuserId]=useState("");


    useEffect(()=>{
        const token=localStorage.getItem("token");

        const decode=jwt_decode(token);
        console(decode.id);
    },[])
}