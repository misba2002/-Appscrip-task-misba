import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProductFilterBar from "@/components/productFilterBar";
import Footer from "@/components/footer";
import { Product } from "../types/product";

interface HomeProps {
  products: Product[];
}


export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Mettā Muse</title>
        <meta name="description" content="Your fashion partner " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <ProductFilterBar initialProducts={products} />
      </main>
      <Footer />
     
      
    </>
  );
}


export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    // API returned non-200 → avoid crash
    if (!res.ok) {
      console.error("API Error:", res.status);
      return { props: { products: [] } };
    }

    // Read response as text first
    const text = await res.text();

    let products: Product[] = [];

    try {
      products = JSON.parse(text);
    } catch (err) {
      console.error("Invalid JSON response:", text.substring(0, 200));
      products = [];
    }

    return { props: { products } };

  } catch (error) {
    console.error("Fetch failed:", error);
    return { props: { products: [] } }; // prevent SSR crash
  }
}
