import { Metadata } from "next";
import GardenListLayout from "./component/GardenListLayout";

export const metadata: Metadata = {
    title: "실내정원용 식물",
};

export default function GardenList() {
    return (
        <div>
            <h1>실내정원용 식물</h1>
            <GardenListLayout />
        </div>
    );
}
