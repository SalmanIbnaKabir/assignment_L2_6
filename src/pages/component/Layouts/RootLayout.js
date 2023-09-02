import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen  mx-auto ">{children}</div>
      <Footer />
    </div>
  );
}
