import { addToProduct } from "@/redux/features/buildpc/buildPcSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function ChooseProductCard({ product }) {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(addToProduct(product));
    router.push("/pc-builder");
  };

  return (
    <div className="card min-w-[320px] w-96 bg-base-100 p-1 border border-indigo-200 shadow-xl">
      <figure>
        <Image
          src={product?.image}
          alt="next img"
          width={500}
          height={500}
          layout="responsive"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.name}</h2>
        <p>Category: {product?.category}</p>
        <p>Status: {product?.status ? "In Stock" : "Out Of Stock"}</p>
        <p>Rating: {product?.individualRating}</p>
        <p>
          Price:{" "}
          <span className="text-orange-500  font-semibold">
            {product?.price}$
          </span>
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleAddProduct(product)}
          >
            Add To Builder
          </button>
        </div>
      </div>
    </div>
  );
}
