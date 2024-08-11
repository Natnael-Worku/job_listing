import { JobPosting } from "@/Types/Jobs";
import { TiTick } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";

interface props {
  data: JobPosting | null;
}

const Body = ({ data }: props) => {
  const listResponsibilities = data?.responsibilities
    ? data?.responsibilities.split("\n")
    : [];

  return (
    <div className="md:col-span-4 mr-10">
      <section className="my-[27px]">
        <h2 className="font-black text-[24px]  text-textPrimary ">
          Description
        </h2>
        <p className="mt-[16px] text-gray-800  text-[16px] font-normal text-justify mr-2 ">
          {data?.description}
        </p>
      </section>
      <section className="my-[27px]">
        <h2 className="font-black text-[24px]  text-textPrimary">
          {" "}
          Responsibilites
        </h2>

        {listResponsibilities
          ? listResponsibilities.map((val) => {
              return (
                <div className="flex items-center my-2">
                  <TiTick className="text-green-400 text-[20px] border-2 border-green-400 rounded-full" />
                  <div className="ml-2 text-gray-800  text-[16px] font-normal text-justify ">
                    {val}
                  </div>
                </div>
              );
            })
          : ""}
      </section>
      <section className="my-[27px]">
        <h2 className="font-black text-[24px]  text-textPrimary">
          Ideal candidate we want
        </h2>
        <ul className="mt-4">
          <div className="flex items-end"></div>

          <div className="flex items-center">
            <div className="font-black text-lg">.</div>
            <span className="font-normal  ">{data?.idealCandidate}</span>
          </div>
        </ul>
      </section>
      <section className="my-[27px]">
        <h2 className="font-black text-[24px]  text-textPrimary mb-[23px]">
          When & Where
        </h2>
        <div className=" flex items-center">
          <div className="border  border-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]">
            <img src="/Images/Icon-location.svg" alt="loaction svg element" />
          </div>
          <div className="ml-4">{data?.whenAndWhere}</div>
        </div>
      </section>
    </div>
  );
};

export default Body;
