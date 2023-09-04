import Image from "next/image";
import Loader from "./Loader";

export default function SelectedProduct({ product }) {
  if (!product) {
    return <Loader></Loader>;
  }
  return (
    <div className="flex flex-nowrap justify-between items-center p-5 border rounded-lg border-indigo-200   ">
      <div className="bg-indigo-100 rounded">
        <Image src={product?.image} alt="next img" width={60} height={60} />
      </div>
      <div>
        <p>{product?.name}</p>
        <p>{product?.category}</p>
      </div>
      <div>
        <p className="text-orange-600">{product?.price}$</p>
      </div>
    </div>
  );
}
