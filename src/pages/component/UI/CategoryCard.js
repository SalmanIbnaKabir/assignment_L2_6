import Image from "next/image";

export default function CategoryCard() {
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Image
          src="/icons8-cpu-100.png"
          alt="next img"
          width={200}
          height={200}
          layout="responsive"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
      </div>
    </div>
  );
}
