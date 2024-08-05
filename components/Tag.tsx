import React from "react";
interface props{
    categorie: string;
}
export const PrimaryTag = ({categorie}: props) => {
    return <div className="text-[#FFB836]  text-center font-normal min-w-20 inline  text-[12px] border border-[#FFB836]  my-2 px-2.5 py-1.5 rounded-full mr-2" >
    {categorie}
  </div>
};

export const SecondaryTag = ({categorie}: props) => {
  return <div className="text-[#4640DE] text-center inline font-normal text-[12px] border border-[#4640DE] my-2  min-w-20 px-2.5 py-1.5 rounded-full mr-2" >
  {categorie}
</div>
};
