import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="card min-w-[320px] w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src="/image-1.jpg"
          alt="next img"
          width={500}
          height={500}
          layout="responsive"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name:</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
}
