import React,{useState} from "react";

function Product(macDetails){
    const productName=macDetails.macDetails.name;
    const productDisc=macDetails.macDetails.dic;
    const imgSrc=macDetails.macDetails.imgSrc;
    return(
    <div className="flex justify-center items-center m-20">
        <div className="w-[300px] rounded-md border">
            <img
                src={imgSrc}
                alt="Laptop"
                className="h-[200px] w-full rounded-md object-cover "
            />
            <div className="">
                <h1 className="text-lg font-semibold text-black p-2">{productName}</h1>
                <p className="mt-3 text-sm text-gray-600 p-2">
                {productDisc}
                </p>
                <div className="">
                    <button
                    type="button"
                    className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                    Read
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Product;