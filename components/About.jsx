import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building end to end Software applications other
            backend technologies. I’m passionate about learning new technologies
            and understand there is more than one way to accomplish a task.
            Though I am most proficient in building front-end and backend
            applications using React,Nextjs,flutter,Django,Flask,Nodejs,GraphQl
            and other front-end and backend Techonology .I am a quick learner
            and can pick up new tech stacks as needed. I believe that being a
            great developer is not using one specific language, but choosing the
            best tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            I started App and web developement in 2020 managing multiple mobile
            Application and Web Application on multiple platforms such as AWS,
            Graphql, Google and Apple Store and varcel and netlify. I have
            experience working directly with clients and taking mock wireframes
            all the way to deployed applications. In my spare time I invest in
            learning new technologies, a and try to building a optimize working
            techique to BUILD better product which produce impact on system and
            product.
          </p>
          <Link href="/#projects" legacyBehavior>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
