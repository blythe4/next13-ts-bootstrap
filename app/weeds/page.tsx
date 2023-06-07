import { Metadata } from "next";
import WeedsListLayout from "./Component/WeedsListLayout";

export const metadata: Metadata = {
    title: "Weeds",
};

export default function WeedsList() {
    return (
        <div className="container">
            <h1>Weeds</h1>
            <WeedsListLayout />
        </div>
    );
}
