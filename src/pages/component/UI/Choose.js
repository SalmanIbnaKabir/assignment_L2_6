import Image from "next/image";
import Link from "next/link";

export default function Choose({ category }) {
  return (
    <div className="flex flex-nowrap justify-between items-center p-5 border rounded-lg border-indigo-200   ">
      <div className="bg-indigo-100 p-2 rounded">
        <Image src={category.image} alt="next img" width={40} height={40} />
      </div>
      <div>
        <p>{category.name}</p>
      </div>
      <div>
        <Link href={category.href}>
          <button className="btn btn-outline btn-secondary">Choose</button>
        </Link>
      </div>
    </div>
  );
}
