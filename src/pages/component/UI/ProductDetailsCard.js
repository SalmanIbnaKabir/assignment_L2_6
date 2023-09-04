import Image from "next/image";
import Reviews from "./Reviews";
import Loader from "./Loader";

export default function ProductDetailsCard({ product }) {
  if (!product) {
    return <Loader></Loader>;
  }
  // const {
  //   name,
  //   category,
  //   image,
  //   status,
  //   price,
  //   description,
  //   keyFeatures,
  //   individualRating,
  //   averageRating,
  //   reviews,
  // } = product;

  // console.log(reviews);
  return (
    <div className="lg:container mx-auto">
      <div className="card lg:card-side bg-base-100  shadow-xl">
        <figure className="lg:w-1/2">
          <Image
            src={product?.image}
            alt="Album"
            width={300}
            height={300}
            layout="responsive"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>
          <p>Category: {product?.category}</p>
          <p>Status: {product?.status ? "In Stock" : "Out Of Stock"}</p>
          <p>Description: {product?.description}</p>
          <ul>
            <li>
              <p className="text-lg">Key Features</p>
              <ul>
                {Object.entries(product?.keyFeatures).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}</strong> : {value}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <p>Individual Rating: {product?.individualRating}</p>
          <p>Average Rating: {product?.averageRating}</p>
          <p>
            Price:{" "}
            <span className="text-orange-500  font-semibold">
              {product?.price}$
            </span>
          </p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div> */}
        </div>
      </div>
      <h1 className="text-2xl text-center my-5 font-semibold">Reviews</h1>
      <div className="card-actions flex-col justify-center gap-5 ">
        {product?.reviews.map((review, idx) => (
          <Reviews review={review} key={idx} />
        ))}
      </div>
    </div>
  );
}
