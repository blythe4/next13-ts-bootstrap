import { Metadata } from "next";
import TherpyListLayout from "./Component/TherpyListLayout";

export const metadata: Metadata = {
    title: "Therpy List",
};

export default function TherpyList() {
    return (
        <div className="container">
            <h1>Therpy</h1>
            <TherpyListLayout />
        </div>
    );
}
