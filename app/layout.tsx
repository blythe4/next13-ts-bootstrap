import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import { sun } from "./font";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={sun.className}>
                <Header />
                <div className="container py-4">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
