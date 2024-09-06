import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-red-400 w-[500px] mx-auto mt-[150px] p-[50px] rounded-3xl">
      <input className="w-full p-5 border mb-4 rounded-xl" placeholder="Enter your email" type="email" />
      <input className="w-full p-5 border mb-4 rounded-xl" placeholder="Enter your password" type="password" />
      <Link href={"/product"}>
        <button className="w-full p-5 border bg-green-500 hover:bg-green-600 rounded-xl text-white" type="submit">Kirish</button>
      </Link>
    </div>
  );
}
