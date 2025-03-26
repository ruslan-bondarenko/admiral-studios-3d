import { IProduct } from "@/shared/types";
import React, { FC } from "react";
import { ProductCard } from "@/widgets";

type Props = {
  products: IProduct[];
};

const ProductList: FC<Props> = ({ products }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <li
          key={product.id}
          className="border border-gray-200 hover:border-gray-400 transition ease-linear"
        >
          <ProductCard product={product} hasDetails hasCompare />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
