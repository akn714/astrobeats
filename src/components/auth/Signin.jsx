import React from "react";
import './auth.css'
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

export function Signin() {
    return (
        <SignIn />
    );
}