import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="grid gap-10 px-10 py-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="w-full h-full shadow-md shadow-gray-600 ">
        <div className="flex items-center m-auto">
          <Image
            src={"/image1.jpg"}
            alt="product"
            width={150}
            height={150}
            className="text-center m-auto py-3"
          />
          <h3 className="text-center bg-slate-600 text-white rounded-sm m-auto">
            Flat 45%
          </h3>
        </div>
        <div className="text-center py-5 font-sans">
          <h1 className="font-bold text-[#044e83]">Dream smooth</h1>
          <p className="py-5">
            "Elevate your style with Dream Smooth perfume, offering a rich,
            long-lasting fragrance. Ideal for everyday wear or special
            occasions—shop now and indulge in luxury!"
          </p>
          <Link href="#">
            <span className="bg-[#044e83] text-white px-5 font-bold rounded-md py-3 ">
              Add To Cart
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full h-full shadow-md shadow-gray-600 ">
        <div className="flex items-center">
          <Image
            src={"/image3.jpg"}
            alt="product"
            width={150}
            height={150}
            className="text-center m-auto py-3"
          />
          <h3 className="text-center bg-slate-600 text-white rounded-sm m-auto ">
            Flat 45%
          </h3>
        </div>
        <div className="text-center py-5 font-sans">
          <h1 className="font-bold text-[#044e83]">Shamlimar</h1>
          <p className="py-5">
            "Elevate your style with Dream Smooth perfume, offering a rich,
            long-lasting fragrance. Ideal for everyday wear or special
            occasions—shop now and indulge in luxury!"
          </p>
          <Link href="#">
            <span className="bg-[#044e83] text-white px-5 font-bold rounded-md py-3 ">
              Add To Cart
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full h-full shadow-md shadow-gray-600">
        <div className="flex items-center">
          <Image
            src={"/image6.jpg"}
            alt="product"
            width={150}
            height={150}
            className="text-center m-auto py-3"
          />
          <h3 className="text-center bg-slate-600 text-white rounded-sm m-auto">
            Flat 45%
          </h3>
        </div>
        <div className="text-center py-5 font-sans">
          <h1 className="font-bold text-[#044e83]">BLue Chanel</h1>
          <p className="py-5">
            "Elevate your style with Dream Smooth perfume, offering a rich,
            long-lasting fragrance. Ideal for everyday wear or special
            occasions—shop now and indulge in luxury!"
          </p>
          <Link href="#">
            <span className="bg-[#044e83] text-white px-5 font-bold rounded-md py-3 ">
              Add To Cart
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
