import rimsha from "@/assets/images/rimsha.webp";
import zain from "@/assets/images/zain.webp";
import hamas from "@/assets/images/hamas.webp";
import kamran from "@/assets/images/kamran.webp";
import asif from "@/assets/images/asif.webp";
import abdullah from "@/assets/images/abdullah.webp";
import hesham from "@/assets/images/hesham.webp";
import sidra from "@/assets/images/sidra.webp";
import laiba from "@/assets/images/laiba.webp";
import Image from "next/image";
const teamsConst = [
  {
    name: "Rimsha",
    imageSrc: rimsha,
    designation: "SQA Engineer",
    experience: "4 years",
  },
  {
    name: "Zain",
    imageSrc: zain,
    designation: ".Net Developer",
    experience: "4 years",
  },
  {
    name: "Hamas",
    imageSrc: hamas,
    designation: "COO",
    experience: "4 years",
  },
  {
    name: "Kamran",
    imageSrc: kamran,
    designation: "Performance marketer",
    experience: "4 years",
  },
  {
    name: "Asif",
    imageSrc: asif,
    designation: "Digital marketer",
    experience: "4 years",
  },
  {
    name: "Abdullah",
    imageSrc: abdullah,
    designation: "Junior Data Scientist",
    experience: "4 years",
  },
  {
    name: "Buttler",
    imageSrc: hesham,
    designation: "Software Engineer",
    experience: "4 years",
  },
  {
    name: "Laiba",
    imageSrc: laiba,
    designation: "Flutter Developer",
    experience: "4 years",
  },
];
const page = () => {
  return (
    <section className="py-10">
      <div className="container">
        <h1 className="text-center text-4xl font-bold mb-10">Core Team</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4">
          {teamsConst.map((item) => {
            return (
              <div key={item.name} className="rounded-md shadow-md p-4">
                <div className="mb-3">
                  <Image src={item.imageSrc} alt={item.name} />
                </div>
                <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                <div className="flex flex-row justify-between">
                  <p className="text-purple-500">{item.designation}</p>
                  <p>{item.experience}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
