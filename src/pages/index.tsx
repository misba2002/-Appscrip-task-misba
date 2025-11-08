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
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products }, //send product data
  };
}
