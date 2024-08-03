import job from "@/app/components/JobInterface"
import {PrimaryTag, SecondaryTag } from "@/app/jobs/components/Tag"
interface props {
    data:job
}
const About = ({data}:props) => {
  return (
    <>
    <section className="border-b border-b-gray-400 my-[10px]">
          <h2 className="font-black text-[24px]  text-textPrimary ">About</h2>
          <div className="flex items-center my-[20px]">
            <div className="border  border-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]">
              <img src="/Images/plus-circle.svg" alt="plus svg file" />
            </div>
            <div className="ml-4">
              <div>Posted On</div>
              <div>{data.about.posted_on}</div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <div className="border  border-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]">
              <img src="/Images/Icon-fire.svg" alt="plus svg file" />
            </div>
            <div className="ml-4">
              <div>DeadLine</div>
              <div>{data.about.deadline}</div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <div className="border  border-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]">
              <img src="/Images/Icon-location.svg" alt="plus svg file" />
            </div>
            <div className="ml-4">
              <div>Location</div>
              <div>{data.about.location}</div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <div className="border  border-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]">
              <img src="/Images/calendar-vid.svg" alt="plus svg file" />
            </div>
            <div className="ml-4">
              <div>Start Date</div>
              <div>{data.about.start_date}</div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <div className="border  border-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]">
              <img src="/Images/calendar-right.svg" alt="plus svg file" />
            </div>
            <div className="ml-4">
              <div>End Date</div>
              <div>{data.about.end_date}</div>
            </div>
          </div>
        </section>


        <section className="border-b border-b-gray-400 my-[10px]">
          <h2  className="font-black text-[24px]  text-textPrimary " > Categories</h2>
          <div className="flex my-[20px]">
            <PrimaryTag categorie = {data.about.categories[0]}/>
            <SecondaryTag categorie = {data.about.categories[1]}/>
          </div>
        </section>

        <section className="my-[10px]">
            <h2 className="font-black text-[24px]  text-textPrimary " > Required Skills</h2>
          <div className="flex flex-wrap mt-4 ">
            {
              data.about.required_skills.map((val)=>{
                return(
                  <SecondaryTag categorie = {val}/>
                )
              })
            }
          </div>

        </section>
        </>
  )
}

export default About