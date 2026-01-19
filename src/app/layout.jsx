import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeProvider from '../context/ThemeProvider';
import AuthProvider from '../providers/AuthProvider';

export const metadata = {
  title: 'Next JS Blog',
  description: 'Blog created using NEXT js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg text-text min-h-screen overflow-x-hidden antialiased">
        <AuthProvider>
          <ThemeProvider>
            <div className="mx-auto max-w-384 px-20 max-sm:max-w-118.75 sm:max-w-160 md:max-w-3xl md:px-10 lg:max-w-5xl xl:max-w-341.5">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
