import React from "react";
import './auth.css'
import { SignIn } from "@clerk/clerk-react";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

export function Signin() {
    return (
        <SignIn />
    );
}