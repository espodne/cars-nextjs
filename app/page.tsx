import { Catalog } from "./components/Catalog";
import { Hero } from "./components/Hero";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalog />
    </main>
  );
}
