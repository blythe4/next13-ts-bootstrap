import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "식집사",
};

export default function Home() {
    return (
        <div>
            <h1>식집사</h1>
            <ol>
                <li>실내정원용 식물</li>
                <li>약초</li>
                <li>잡초</li>
            </ol>
        </div>
    );
}
