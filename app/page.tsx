import React from "react";
import { Metadata } from "next";
import Visual from "./Visual";

export const metadata: Metadata = {
    title: "식집사",
};

export default function Home() {
    return (
        <div className="clearfix">
            <Visual />
        </div>
    );
}
