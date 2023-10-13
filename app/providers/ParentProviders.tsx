"use client";

import React from "react";

import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";


export default function ParentProviders({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            
            {children}
        </ThemeProvider>
    )
}