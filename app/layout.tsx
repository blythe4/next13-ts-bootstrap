import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <Header />
                <div className="p-4">{children}</div>
            </body>
        </html>
    );
}
