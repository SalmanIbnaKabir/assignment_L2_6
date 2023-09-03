import Image from "next/image";

export default function SelectedProduct({ product }) {
  return (
    <div className="flex flex-nowrap justify-between items-center p-5 border rounded-lg border-indigo-200   ">
      <div className="bg-indigo-100 p-2 rounded">
        <Image src={product.image} alt="next img" width={40} height={40} />
      </div>
      <div>
        <p>{product.name}</p>
        <p>{product.category}</p>
      </div>
      <div>
        <p className="text-orange-600">{product.price}</p>
      </div>
    </div>
  );
}
