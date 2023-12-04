import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className=" mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4 "
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp
"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">Get The App</p>
          <h1 className="md:text-4xl sm:3xl text-2xl font-bold py-2">Limitless Convenience on-demand</h1>
          <p className="">Savor the convenience of culinary delights at your fingertips with our innovative food delivery app! Elevate your dining experience with a diverse array of cuisines, expertly crafted and delivered straight to your doorstep. Browse through a curated selection of top-rated restaurants, ensuring a symphony of flavors to suit every palate. Effortlessly customize your order, track its journey in real-time, and indulge in the anticipation of a delicious arrival. Our user-friendly interface guarantees a seamless and delightful experience, making dining-in an unforgettable affair. Embrace the future of gastronomic indulgence – download our app now and let the feast begin!</p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
