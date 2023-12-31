import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {" "}
      <div className="">
        <h1>The utlimate app guitar</h1>
        <h2 className="text-center">Made by guitar lovers</h2>
        <img className="mx-auto my-6 w-80" src="guit.jpeg" alt="" />
        <div className="flex justify-center">
          <Link href="/collections">
            <button className="bg-white text-black px-3 py-2 rounded-sm mb-5">
              Visit the collections
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
