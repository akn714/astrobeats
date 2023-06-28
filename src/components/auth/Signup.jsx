import React from "react";
import './auth.css'
import { SignUp } from "@clerk/clerk-react";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

export function Signup() {
    return (
        <SignUp />
    );
}