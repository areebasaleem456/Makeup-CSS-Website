import About from "./components/about";
import Contact from "./components/contact/page";
import Hero from "./components/hero";
import Products from "./components/products";

export default function Home() {
  return (
    <div>
     <Hero />
     <About />
     <Products />
     <Contact />
    </div>
  );
}
