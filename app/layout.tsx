import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import StyledComponentsRegistry from "./lib/registry";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import { notoSans } from "./font";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={notoSans.className}>
                <StyledComponentsRegistry>
                    <Header />
                    <div className="container py-4">{children}</div>
                    <Footer />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
