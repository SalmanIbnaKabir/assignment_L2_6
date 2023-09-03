import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <Link href={category?.href}>
      <div className="card w-72 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={category?.image}
            alt="next img"
            width={200}
            height={200}
            layout="responsive"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{category?.name}</h2>
        </div>
      </div>
    </Link>
  );
}
