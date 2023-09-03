import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  // console.log(product);
  return (
    <div className="card min-w-[320px] w-96 bg-base-100 shadow-xl">
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
            {product?.price}
          </span>
        </p>
        <div className="card-actions justify-end">
          <Link href={`/product/${product?._id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
