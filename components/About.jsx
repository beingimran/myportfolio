import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import TiltCard from "./motion/TiltCard";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <RevealGroup className="col-span-2">
          <RevealItem as="p" className="uppercase text-xl tracking-widest text-accent">
            About
          </RevealItem>
          <RevealItem as="h2" className="py-4">
            Who I Am
          </RevealItem>
          <RevealItem as="p" className="py-2 text-soft">
            I&apos;m a results-driven Full-Stack Software Development Engineer
            with 6+ years of experience designing, building, and scaling
            production software across the entire development lifecycle. I
            currently work as a Software Engineering Practitioner at BT Group,
            where I own ARC (BT&apos;s internal design system and component
            library), lead the React version upgrade across broadband and
            business platforms, and drive front-end delivery for large-scale
            customer-facing rebrands.
          </RevealItem>
          <RevealItem as="p" className="py-2 text-soft">
            My core stack spans React, Next.js, TypeScript, Node.js, GraphQL,
            PostgreSQL, MongoDB, and DynamoDB, backed by containerized and
            serverless cloud architectures on AWS using Docker, Kubernetes,
            Terraform, and Pulumi. I enjoy partnering with product and design
            teams in agile environments, driving architectural decisions,
            troubleshooting production issues, and mentoring engineers to ship
            reliable, high-performing experiences at scale.
          </RevealItem>
          <RevealItem>
            <Link href="/#projects" className="inline-block py-2 text-soft underline">
              Check out some of my latest projects.
            </Link>
          </RevealItem>
        </RevealGroup>
        <Reveal delay={0.2} className="w-full h-auto m-auto">
          <TiltCard max={10} className="rounded-xl">
            <div className="shadow-xl shadow-line rounded-xl flex items-center justify-center p-1 bg-surface">
              <Image src="/assets/about.jpg" className="rounded-xl" alt="Mohammad Imran at work" width={400} height={400} />
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
