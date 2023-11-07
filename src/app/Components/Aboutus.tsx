import React from "react";
interface aboutustype {
  title: string;
  para1: string;
  para2: string;
  para3: string;
  para4: string;
}
const aboutus = [
  {
    title: "About Us",
    para1:
      "We believe every single person have their own story. Everyone has their own sets of experiences, ups and downs, exciting adventures, achievements, mistakes, realization, heartwarming relationships, turning points, memorable moments and many more. Everyone is different yet might have similar life stories. Some may seem similar, from same family but have different attitude, concept, thinking, and way of living.",
    para2:
      "At News Website, we want to be a platform where we share life stories of such people who have left an impact in everyone’s lives. About those who is one of us but yet is different; who have become a part of our daily lives and anything they do or have done influences us in one way or other.",
    para3:
      "There is no specific category in news website. Along with the Mini bios and Entertainment having interesting, lifechanging and thrilling stories of famous personalities/celebrities, we welcome and share the stories of those who want to be heard and who want to share their life experiences with our readers.",
    para4:
      "Our vision and mission is to be a digital reading platform with real-life stories where one can spend some of their time getting to know about someone who they fancy most, who they love, admire, respect and believe and who they are curious about. As our stories is not based on mere assumptions but contain research-oriented facts.",
  },
];
const Aboutus = () => {
  return (
    <div className="container mx-auto my-6 px-3 md:px-0">
      {aboutus.map((val: aboutustype, index: number) => {
        return (
          <div key={index}>
            <h2 className="text-2xl md:text-3xl font-bold text-black py-2 md:py-4 text-left">
              {val.title}
            </h2>
            <p className="py-2 text-base font-normal ">{val.para1}</p>
            <p className="py-2 text-base font-normal ">{val.para2}</p>
            <p className="py-2 text-base font-normal ">{val.para3}</p>
            <p className="py-2 text-base font-normal ">{val.para4}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Aboutus;
