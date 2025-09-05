import "../globals.css";
import Sidebar from '../components/sidebar';
import Header from '../components/header';


export const metadata = {
  title: "Farid Panel",
  description: "Discord bot yönetim paneli",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-primary text-white">
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 bg-light/10 p-6 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
