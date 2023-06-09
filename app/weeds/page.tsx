import { Metadata } from "next";
import WeedsListLayout from "./component/WeedsListLayout";

export const metadata: Metadata = {
    title: "잡초",
};

export default function WeedsList() {
    return (
        <div>
            <h1>잡초</h1>
            <WeedsListLayout />
        </div>
    );
}
