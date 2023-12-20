import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
