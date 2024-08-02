import React from "react";
interface props{
    categorie: string;
}
export const PrimaryTag = ({categorie}: props) => {
    return <div className="text-[#FFB836]  text-center font-normal min-w-20  text-sm border border-[#FFB836]  px-2.5 py-1.5 rounded-full mr-2" >
    {categorie}
  </div>
};

export const SecondaryTag = ({categorie}: props) => {
  return <div className="text-[#4640DE] text-center  font-normal text-sm border border-[#4640DE]  min-w-20 px-2.5 py-1.5 rounded-full mr-2" >
  {categorie}
</div>
};
