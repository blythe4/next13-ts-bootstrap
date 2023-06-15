import { Sunflower, Gamja_Flower, Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";

const sun = Sunflower({
    weight: ["300", "500", "700"],
    subsets: ["latin"],
});

const gamja = Gamja_Flower({
    weight: "400",
    subsets: ["latin"],
});

const notoSerif = Noto_Serif_KR({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

const notoSans = Noto_Sans_KR({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
});

export { sun, gamja, notoSerif, notoSans };
