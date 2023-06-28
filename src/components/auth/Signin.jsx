import React from "react";
import './auth.css'
import './auth.js'
import { ClerkProvider, SignIn } from "@clerk/clerk-react";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

export function Signin() {
    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            <SignIn />
        </ClerkProvider>
    );
}