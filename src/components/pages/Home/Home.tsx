import Hero from "./Hero";
import Products from "./Products";

function Home() {
  return (
    <>
      <Hero />
      <Products />
      <div className="h-screen w-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Welcome to our store!</h2>
      </div>
    </>
  );
}

export default Home;
