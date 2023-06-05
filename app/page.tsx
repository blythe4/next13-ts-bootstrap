import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next.js",
};

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <div>실내정원용 식물</div>
            <div>약초</div>
            <div>잡초</div>
        </div>
    );
}
