import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-content transition-colors duration-300">
      <Navbar />
      <main className=" mx-auto px-4 pb-8">{children}</main>
    </div>
  );
}
