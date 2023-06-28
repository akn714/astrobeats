import React from "react";
import './auth.css'
import { ClerkProvider, SignUp } from "@clerk/clerk-react";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

export function Signup() {
    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            <SignUp />
        </ClerkProvider>
    );
}