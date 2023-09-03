import Image from "next/image";
import React from "react";
import Reviews from "./Reviews";

export default function ProductDetailsCard({ product }) {
  const {
    name,
    category,
    image,
    status,
    price,
    description,
    keyFeatures,
    individualRating,
    averageRating,
    reviews,
  } = product;

  // console.log(reviews);
  return (
    <div className="lg:container mx-auto">
      <div className="card lg:card-side bg-base-100  shadow-xl">
        <figure className="lg:w-1/2">
          <Image
            src={image}
            alt="Album"
            width={300}
            height={300}
            layout="responsive"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Category: {category}</p>
          <p>Status: {status ? "In Stock" : "Out Of Stock"}</p>
          <p>Description: {description}</p>
          <ul>
            <li>
              <p className="text-lg">Key Features</p>
              <ul>
                {Object.entries(keyFeatures).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}</strong> : {value}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <p>Individual Rating: {individualRating}</p>
          <p>Average Rating: {averageRating}</p>
          <p>
            Price:{" "}
            <span className="text-orange-500  font-semibold">{price}</span>
          </p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div> */}
        </div>
      </div>
      <h1 className="text-2xl text-center my-5 font-semibold">Reviews</h1>
      <div className="card-actions flex-col justify-center gap-5 ">
        {reviews.map((review, idx) => (
          <Reviews review={review} key={idx} />
        ))}
      </div>
    </div>
  );
}
