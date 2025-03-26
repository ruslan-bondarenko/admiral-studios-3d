import React from "react";
import { ProductList } from "@/widgets";
import { getProductsData } from "@/shared";
import { headers } from "next/headers";

const Home = async () => {
  const headersList = await headers();
  const domain = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto");

  const products = await getProductsData(`${protocol}://${domain}`);

  return (
    <main className="p-4 pt-10 md:p-10">
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-xs md:text-m font-medium uppercase">
          WELCOME TO OUR STORE
        </h3>
        <h1 className="font-lora text-4xl md:text-5xl font-medium">
          WHERE SLOW FASHION MEETS LUXURY
        </h1>
      </div>

      {products?.length ? (
        <ProductList products={products} />
      ) : (
        <div className="px-8 py-6 bg-warn rounded-xl flex flex-col border">
          <h2 className="font-bold text-gray-800">No Products Available!</h2>
          <p className="text-gray-400">
            Sorry, but it seems there are currently no products to display.
          </p>
          <p className="text-gray-400">
            Please check back later or explore other sections of our website.
          </p>
        </div>
      )}
    </main>
  );
};

export default Home;
