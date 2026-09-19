import Image from "next/image";
import React from "react";
import {
  SiAmazondynamodb,
  SiCypress,
  SiDocker,
  SiGitlab,
  SiJenkins,
  SiJest,
  SiKubernetes,
  SiMaterialui,
  SiPulumi,
  SiRedux,
  SiStorybook,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import Javascript from "../public/assets/skills/javascript.png";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import AWS from "../public/assets/skills/aws.png";
import Python from "../public/assets/skills/python.png";
import Flutter from "../public/assets/skills/flutter.png";
import NodeJS from "../public/assets/skills/node.png";
import GraphQL from "../public/assets/skills/GraphQL.svg";
import Mongodb from "../public/assets/skills/mongo.png";
import Postgres from "../public/assets/skills/Postgres.png";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import TiltCard from "./motion/TiltCard";

// Ordered to mirror the resume's competency groups: languages, frontend, backend & data, cloud & DevOps, testing.
const skills = [
  { name: "JavaScript", image: Javascript },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Python", image: Python },
  { name: "HTML5", image: Html },
  { name: "CSS3", image: Css },
  { name: "React", image: ReactImg },
  { name: "Next.js", image: NextJS },
  { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind", image: Tailwind },
  { name: "Material UI", Icon: SiMaterialui, color: "#007FFF" },
  { name: "Flutter", image: Flutter },
  { name: "Node.js", image: NodeJS },
  { name: "GraphQL", image: GraphQL },
  { name: "PostgreSQL", image: Postgres },
  { name: "MongoDB", image: Mongodb },
  { name: "DynamoDB", Icon: SiAmazondynamodb, color: "#4053D6" },
  { name: "Firebase", image: Firebase },
  { name: "AWS", image: AWS },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
  { name: "Pulumi", Icon: SiPulumi, color: "#8A3391" },
  { name: "GitLab CI/CD", Icon: SiGitlab, color: "#FC6D26" },
  { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
  { name: "GitHub", image: Github },
  { name: "Jest", Icon: SiJest, color: "#C21325" },
  { name: "Cypress", Icon: SiCypress, color: "#69D3A7" },
  { name: "Storybook", Icon: SiStorybook, color: "#FF4785" },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full min-h-screen p-2 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <Reveal as="p" className="text-xl tracking-widest uppercase text-accent">
          Skills
        </Reveal>
        <Reveal as="h2" delay={0.1} className="py-4">
          What I Can Do
        </Reveal>
        <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ name, image, Icon, color }) => (
            <RevealItem key={name}>
              <TiltCard max={14} lift={20} className="rounded-xl">
                <div className="p-4 sm:p-6 shadow-xl shadow-line rounded-xl bg-surface">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 justify-center items-center">
                    <div className="m-auto">
                      {Icon ? (
                        <Icon size={56} style={{ color }} aria-label={`${name} logo`} />
                      ) : (
                        <Image src={image} width={64} height={64} alt={`${name} logo`} />
                      )}
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-center">{name}</h3>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
};

export default Skills;
