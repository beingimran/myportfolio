import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Mohammad Imran | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">MOHAMMAD IMRAN</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/mohammadimran1802/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/beingimran"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Full Stack
              Development <span className="px-1">|</span> Complex Problem
              Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        Results-driven Software Engineer with 4+ years of experience in full-stack development, cloud infrastructure, and
DevOps. Skilled in building scalable web and mobile applications, optimizing cloud deployments, and leading infrastructure
migrations. Proficient in technologies like AWS (CloudFront, Lambda, Pulumi), AEM, Next.js, Flutter, Node.js, and DevOps
tools like Terraform, Jenkins, and GitLab CI/CD. Demonstrated expertise in designing efficient systems, enhancing
application performance, and collaborating on large-scale projects in the Telecom and healthcare domains.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span> Full-Stack Developer(Web)
            <span className="px-2">|</span>Mobile Application Developer
            <span className="px-2">|</span>Django
            <span className="px-2">|</span>Python
            <span className="px-2">|</span>Flutter
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>TypeScript
            <span className="px-2">|</span>React JS
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>GraphQL
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RESTAPI
            <span className="px-2">|</span> Serverless
            <span className="px-2">|</span> MongoDB
            <span className="px-2">|</span> GIT
            <span className="px-2">|</span> DynamoDB
            <span className="px-2">|</span> Adobe Experience Manager (AEM)
          </p>
          <p className="py-2">
            <span className="font-bold">Cloud</span>
            <span className="px-2">|</span>Amazon Web Services
            <span className="px-2">|</span>GCP
            <span className="px-2">|</span>Firebase
          </p>
          <p className="py-2">
            <span className="font-bold">DevOps</span>
            <span className="px-2">|</span>Jenkins
            <span className="px-2">|</span>Gitlab CI-CD
            <span className="px-2">|</span>Terraform
            <span className="px-2">|</span>Pulumi
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">BT Groups</span>
            <span className="px-2">|</span>Gurugram, HR
          </p>
          <p className="py-1 italic">Software Engineer(Full-Stack/ Nov 2023 - Present)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
            Worked on Adobe Experience Manager (AEM) with frontend frameworks and participated in design discussions for
broadband products.
            </li>
            <li>Individually managed end-to-end development and deployment of the Product Catalog Repository, which houses all
            product information.
            </li>
            <li>
            Participating in creating a cloud infrastructure for EE Business, focusing on AWS CloudFront setup and optimization
using Pulumi.
            </li>
            <li>
            Collaborated with the DevOps team to support application DevOps activities and cloud infrastructure deployment
using Terraform and Jenkins.
            </li>
            <li>
            Led and contributed to the migration of DevOps workflows:
            <ul>
              <li>
              Migrated infrastructure from Terraform to Pulumi.
              </li>
              <li> Transitioned CI/CD pipelines from Jenkins to GitLab. </li>
            </ul>
            </li>
            <li>
            Ensured efficient cloud deployment practices and supported infrastructure scalability and reliability using AWS
services.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">CLAIMTHERAPIST</span>
            <span className="px-2">|</span>Gurugram, HR
          </p>
          <p className="py-1 italic">Software Engineer(Full-Stack/ JUN 2022 - Present)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
            Improved and enhanced ClaimTherapist Dashboard features for Patients, Hospitals and Corporate’s which helps in
providing a seamless Medi-Claim journey using NextJs, NodeJS,GraphQL,MongoDB
            </li>
            <li>Integrated Razor-pay Collection API for Payment Collection.
            </li>
            <li>
            Created Bucket Management System for automatic task allocation.
            </li>
            <li>
            Developed a rule engine for automatic validation of bills for Fast Discharge Process which increase efficiency by 80%.
            </li>
            <li>
            Built a unique Web and App platform (SWADL) that helps you discover treatment cost estimates across hospitals
based on health policy.
            </li>
            <li>
            Designed and implemented a MongoDB schema for SWADL using Mongo-engine and Python.  
            </li>
            <li>
            Developed APIs for SWADL using Serverless Architecture (AWS Lambda).
            </li>
            <li>Develop SWADL mobile application using Flutter for both IOS and Android.</li>
            <li>SWADL app give you the power to choose hospital with cost estimate based on treatment and policy .</li>
            <li>Integrated Google Maps and firebase (Messeging and Dynamic link/Deep link)</li>
            <li>Integrate OTP-Less login in CLaimTherapist Mobile App</li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              RED POSITIVE SERVICES PVT. LTD.
            </span>
            <span className="px-2">|</span>Jaipur, RAJ
          </p>
          <p className="py-1 italic">
            Senior Mobile Application Developer(JAN 2020 - DEC 2020)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
            Develop and Desgin (Blood wale Bhaiyya) Mobile Application and software using Flutter and Firebase for both
Android and IOS platform.
            </li>
            <li>
            By Using different State management technique (GetX, Provider,
Bloc).
            </li>
            <li>
            Leading a team of 4 to 5 members on different projects.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">CDAC</span>
            <span className="px-2">|</span>Jaipur, Raj
          </p>
          <p className="py-1 italic">Paramedic / Firefighter (MAY 2019 – JUN 2019)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
            I solved the multi-class classification problem. There were 10 different types of fashion articles in the dataset.
The trained model was able to perform classification on the different type of articles.
            </li>
            <li>
            I used TensorFlow sub-library Keras for better visualization of multiple classes in 3-D.
            </li>
            <li>
              Awarded as best summer intern.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
