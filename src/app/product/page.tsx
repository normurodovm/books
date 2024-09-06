import Link from "next/link";

const Page = () => {
  return (
    <>
          <h2 className="text-[50px] font-black my-[60px] ml-[30px]">Китоблар</h2>
    <div className="flex w-[1200px] flex-wrap gap-[30px] justify-center mx-auto">
      <Link href="/product/1">
        <div className="w-[239px]">
          <img src="./image1.png" alt="img" />
          <h2 className="mt-[18px] text-[20px] text-[#11142d] font-bold ">1984</h2>
          <p className="text-[14px] text-blue-600 font-normal">SIYOSAT, FANTASTIKA</p>
        </div>
      </Link>
      <Link href="/product/2">
      <div className="w-[239px]">
          <img src="./image2.png" alt="img" />
          <h2 className="mt-[18px] text-[20px] text-[#11142d] font-bold ">Rich dad poor dad</h2>
          <p className="text-[14px] text-blue-600 font-normal">SIYOSAT, FANTASTIKA</p>
        </div>
      </Link>
      <Link href="/product/3">
      <div className="w-[239px]">
          <img src="./image3.png" alt="img" />
          <h2 className="mt-[18px] text-[20px] text-[#11142d] font-bold ">Код 8</h2>
          <p className="text-[14px] text-blue-600 font-normal">SIYOSAT, FANTASTIKA</p>
        </div>
      </Link>
      <Link href="/product/4">
      <div className="w-[239px]">
          <img src="./image4.png" alt="img" />
          <h2 className="mt-[18px] text-[20px] text-[#11142d] font-bold ">Даниел КИЗ</h2>
          <p className="text-[14px] text-blue-600 font-normal">SIYOSAT, FANTASTIKA</p>
        </div>
      </Link>
      <Link href="/product/5">
      <div className="w-[239px]">
          <img src="./image5.png" alt="img" />
          <h2 className="mt-[18px] text-[20px] text-[#11142d] font-bold ">Бепарволикнинг но...</h2>
          <p className="text-[14px] text-blue-600 font-normal">SIYOSAT, FANTASTIKA</p>
        </div>
      </Link>
      <Link href="/product/6">
      <div className="w-[239px]">
          <img src="./image6.png" alt="img" />
          <h2 className="mt-[18px] text-[20px] text-[#11142d] font-bold ">1984</h2>
          <p className="text-[14px] text-blue-600 font-normal">SIYOSAT, FANTASTIKA</p>
        </div>
      </Link>
      <Link href="/product/7">
      <div className="w-[239px]">
          <img src="./image7.png" alt="img" />
          <h2 className="mt-[18px] text-[20px] text-[#11142d] font-bold ">Даниел КИЗ</h2>
          <p className="text-[14px] text-blue-600 font-normal">SIYOSAT, FANTASTIKA</p>
        </div>
      </Link>
      <Link href="/product/8">
      <div className="w-[239px]">
          <img src="./image8.png" alt="img" />
          <h2 className="mt-[18px] text-[20px] text-[#11142d] font-bold ">Бепарволикнинг</h2>
          <p className="text-[14px] text-blue-600 font-normal">SIYOSAT, FANTASTIKA</p>
        </div>
      </Link>

    </div>
    </>
  );
};

export default Page;
