import {items} from "./data";
import Hero from "./components/hero";
import CardGrid from "./components/cardgrid";

export default function Home() {
  return (
    <main>
      <Hero 
        title="My Favourite Novels"
        tagline="A few novels i could read forever - and why they're worth your time." 
      />
      <CardGrid items={items} />

    </main>
  );
}
