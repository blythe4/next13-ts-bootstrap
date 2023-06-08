import { Metadata } from "next";
import TherpyListLayout from "./Component/TherpyListLayout";

export const metadata: Metadata = {
    title: "Therpy",
};

export default function TherpyList() {
    return (
        <div className="container">
            <h1>약초</h1>
            <TherpyListLayout />
        </div>
    );
}
