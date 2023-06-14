import { Metadata } from "next";
import TherpyListLayout from "./Component/TherpyListLayout";

export const metadata: Metadata = {
    title: "약초",
};

export default function TherpyList() {
    return (
        <div>
            <h1>약초</h1>
            <TherpyListLayout />
        </div>
    );
}
