import React, { FC } from "react";
import { ProductCard } from "@/widgets";
import { getProductDataById } from "@/shared";
import { headers } from "next/headers";

type Props = {
  params: { id: string };
};

const ProductItem: FC<Props> = async ({ params }) => {
  const domain = headers().get("host");
  const protocol = headers().get("x-forwarded-proto");

  const product = await getProductDataById(
    `${protocol}://${domain}`,
    params.id
  );

  return (
    <div className="p-10">
      <h2 className="text-3xl font-lora font-medium text-center mb-6">
        Product Details
      </h2>
      {!!product ? (
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <ProductCard product={product} />
          </div>
          <div className="md:w-2/3 py-4">
            <h4 className="text-l font-medium text-gray-900 mb-2">
              Description:
            </h4>
            <p className="text-m text-gray-400">{product.description}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductItem;
