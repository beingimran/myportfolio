import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Mohammad Imran | Resume</title>
        <meta
          name="description"
          content="Full-Stack Software Development Engineer with 6+ years of experience designing, building, and scaling full-stack production software."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <main id="main-content" className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h1 className="text-center text-3xl sm:text-4xl">Resume</h1>
        <div className="bg-surface border border-line my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">MOHAMMAD IMRAN</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/mohammadimran1802/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} aria-hidden />
            </a>
            <a
              href="https://github.com/beingimran"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} aria-hidden />
            </a>
          </div>
        </div>

        <div className="text-center py-2 text-muted">
          <p>Gurugram, Haryana, India | Open to relocation — Bellevue, WA</p>
          <p className="py-1">
            <a href="mailto:imranben35@gmail.com" className="underline">
              imranben35@gmail.com
            </a>
            <span className="px-2">|</span>{" "}+91-9783655166
          </p>
        </div>

        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Full-Stack Development <span className="px-1">|</span> Cloud
              &amp; Serverless Architecture <span className="px-1">|</span>{" "}
              Technical Mentoring
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Full-Stack Development</p>
            <p className="py-2">Cloud &amp; Serverless Architecture</p>
            <p>Technical Mentoring</p>
          </div>
        </div>
        <p>
          Results-driven Software Development Engineer with 6+ years of
          experience designing, building, and scaling full-stack production
          software across the entire development lifecycle. Recently
          promoted to Software Engineering Practitioner at BT Group for
          strong technical execution and delivery impact. Proven expertise
          in React, RESTful API design, PostgreSQL, NoSQL, and
          containerized/serverless cloud architectures (Docker, AWS Lambda,
          infrastructure as code). Skilled at partnering with product,
          design, and engineering teams in agile environments, driving
          architectural decisions, troubleshooting production issues, and
          mentoring engineers to deliver reliable, high-performing
          experiences at scale.
        </p>

        {/* Core Competencies */}
        <div className="py-4">
          <h3 className="text-center underline text-[18px] py-2">
            Core Competencies
          </h3>
          <p className="py-2">
            <span className="font-bold">Languages</span>
            <span className="px-2">|</span>{" "}JavaScript (ES6+)
            <span className="px-2">|</span>{" "}TypeScript
            <span className="px-2">|</span>{" "}HTML5
            <span className="px-2">|</span>{" "}CSS3
            <span className="px-2">|</span>{" "}Dart
            <span className="px-2">|</span>{" "}Python
            <span className="px-2">|</span>{" "}JSON
          </p>
          <p className="py-2">
            <span className="font-bold">Frontend &amp; Frameworks</span>
            <span className="px-2">|</span>{" "}React.js
            <span className="px-2">|</span>{" "}Next.js
            <span className="px-2">|</span>{" "}Redux Toolkit
            <span className="px-2">|</span>{" "}Context API
            <span className="px-2">|</span>{" "}Tailwind CSS
            <span className="px-2">|</span>{" "}Material UI
            <span className="px-2">|</span>{" "}Bootstrap
            <span className="px-2">|</span>{" "}Flutter
          </p>
          <p className="py-2">
            <span className="font-bold">Backend, APIs &amp; Data</span>
            <span className="px-2">|</span>{" "}Node.js
            <span className="px-2">|</span>{" "}RESTful API Design
            <span className="px-2">|</span>{" "}GraphQL (Apollo Client)
            <span className="px-2">|</span>{" "}PostgreSQL
            <span className="px-2">|</span>{" "}MongoDB
            <span className="px-2">|</span>{" "}DynamoDB
            <span className="px-2">|</span>{" "}Firebase Realtime DB &amp; Firestore
          </p>
          <p className="py-2">
            <span className="font-bold">Cloud, Containers &amp; IaC</span>
            <span className="px-2">|</span>{" "}AWS (Lambda, S3, CloudFront, EC2)
            <span className="px-2">|</span>{" "}Docker
            <span className="px-2">|</span>{" "}Kubernetes
            <span className="px-2">|</span>{" "}Terraform
            <span className="px-2">|</span>{" "}Pulumi
            <span className="px-2">|</span>{" "}Firebase Hosting
            <span className="px-2">|</span>{" "}Vercel
            <span className="px-2">|</span>{" "}Netlify
          </p>
          <p className="py-2">
            <span className="font-bold">Architecture &amp; System Design</span>
            <span className="px-2">|</span>{" "}Clean Architecture
            <span className="px-2">|</span>{" "}Modularization
            <span className="px-2">|</span>{" "}API-First Design
            <span className="px-2">|</span>{" "}Microservices
            <span className="px-2">|</span>{" "}Serverless
            <span className="px-2">|</span>{" "}State Management (Bloc, GetX)
          </p>
          <p className="py-2">
            <span className="font-bold">CI/CD &amp; DevOps</span>
            <span className="px-2">|</span>{" "}GitLab CI/CD
            <span className="px-2">|</span>{" "}Jenkins Pipelines
            <span className="px-2">|</span>{" "}Nx (Monorepo/Build System)
            <span className="px-2">|</span>{" "}Git
            <span className="px-2">|</span>{" "}Husky
            <span className="px-2">|</span>{" "}Infrastructure as Code
          </p>
          <p className="py-2">
            <span className="font-bold">Performance &amp; Quality</span>
            <span className="px-2">|</span>{" "}Lighthouse Audits
            <span className="px-2">|</span>{" "}Core Web Vitals
            <span className="px-2">|</span>{" "}Page Speed Optimization
            <span className="px-2">|</span>{" "}Memoization
            <span className="px-2">|</span>{" "}WCAG Accessibility
            <span className="px-2">|</span>{" "}SEO
          </p>
          <p className="py-2">
            <span className="font-bold">Testing &amp; QA</span>
            <span className="px-2">|</span>{" "}Jest
            <span className="px-2">|</span>{" "}React Testing Library
            <span className="px-2">|</span>{" "}Cypress
            <span className="px-2">|</span>{" "}Storybook
            <span className="px-2">|</span>{" "}UI Snapshot Testing
          </p>
          <p className="py-2">
            <span className="font-bold">Collaboration &amp; Leadership</span>
            <span className="px-2">|</span>{" "}Agile/Scrum
            <span className="px-2">|</span>{" "}Code Reviews
            <span className="px-2">|</span>{" "}Technical Mentoring
            <span className="px-2">|</span>{" "}Cross-Functional Collaboration
            <span className="px-2">|</span>{" "}Architectural Reviews
          </p>
        </div>

        <h3 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h3>

        {/* BT Group */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">BT Group</span>
            <span className="px-2">|</span>{" "}Gurugram, Haryana, India
          </p>
          <p className="py-1 italic">
            Software Engineering Practitioner (Promoted) / Jan 2026 – Present
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Promoted to Software Engineering Practitioner in recognition of
              strong technical execution, delivery impact, and engineering
              leadership.
            </li>
            <li>
              Own and evolve ARC, BT&apos;s internal design system and
              component library, driving consistency, reusability, and
              adoption across multiple product teams.
            </li>
            <li>
              Lead the React version upgrade across broadband and business
              platforms, modernizing the codebase and reducing technical
              debt.
            </li>
            <li>
              Leverage Nx to manage a modular monorepo architecture across
              BT&apos;s front-end applications, streamlining builds, code
              sharing, and CI pipelines.
            </li>
            <li>
              Lead front-end delivery for the full rebrand of
              bt.business.com, partnering with design and product to deliver
              a modernized customer-facing experience end-to-end.
            </li>
            <li>
              Mentor engineers through code reviews and knowledge-sharing
              sessions, promoting engineering best practices, WCAG
              accessibility, and SEO standards.
            </li>
          </ul>

          <p className="py-1 italic pt-4">
            Software Engineer Professional / Nov 2023 – Jan 2026
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Led full-stack feature development for broadband products,
              containerizing backend services with Docker and provisioning
              PostgreSQL-backed data stores to support scalable,
              production-grade deployments.
            </li>
            <li>
              Architected and implemented Component-Driven Development
              (CDDC) and lazy-loading strategies, improving frontend
              performance by 20% and reducing maintenance overhead.
            </li>
            <li>
              Partnered with product, design, and engineering stakeholders
              in architecture and design reviews to evaluate tradeoffs,
              break down complex requirements into scalable technical
              solutions, and drive features from design through production.
            </li>
            <li>
              Troubleshot and resolved production issues across frontend
              and backend services, using SSR, Lighthouse, and Core Web
              Vitals audits to reduce TTI and improve page load speed.
            </li>
            <li>
              Migrated infrastructure as code from Terraform to Pulumi and
              CI/CD pipelines from Jenkins to GitLab, improving deployment
              efficiency by 25% and cutting build times by 20%.
            </li>
          </ul>
        </div>

        {/* ClaimTherapist */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">ClaimTherapist</span>
            <span className="px-2">|</span>{" "}Gurugram, Haryana, India
          </p>
          <p className="py-1 italic">Software Engineer / Jan 2021 – Sep 2023</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Designed and built responsive, full-stack dashboards using
              Next.js, TypeScript, RESTful APIs, and AWS Lambda
              (serverless), reducing claim processing time by 40%.
            </li>
            <li>
              Collaborated with product and design teams in an agile
              environment to deliver a unified design system and adaptive
              UI/UX across mobile and desktop, improving customer
              satisfaction scores.
            </li>
            <li>
              Built and shipped the SWADL platform end-to-end, integrating
              Google Maps SDK and Firebase to estimate treatment costs for
              10,000+ users.
            </li>
            <li>
              Optimized large-scale React applications through code
              splitting and memoization, improving rendering performance
              and maintainability.
            </li>
            <li>
              Automated prefilled form population workflows, cutting manual
              effort by 50% and reducing data-entry errors.
            </li>
            <li>
              Extended platform reach by developing cross-platform mobile
              apps in Flutter, maintaining consistent UI/UX and achieving a
              4.5+ rating on Play Store and App Store.
            </li>
          </ul>
        </div>

        {/* RedPositive Services */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">RedPositive Services</span>
            <span className="px-2">|</span>{" "}Jaipur, Rajasthan, India
          </p>
          <p className="py-1 italic">
            Mobile Application Developer / Jan 2020 – Dec 2020
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Designed and developed the &quot;Blood Wale Bhaiyya&quot; app
              end-to-end using Flutter and Firebase, scaling to 5,000+
              active users.
            </li>
            <li>
              Implemented state management architecture (GetX, Provider,
              Bloc), improving app performance by 25%.
            </li>
            <li>
              Led and mentored a team of engineering interns, planning
              sprints and delivering 3 projects on schedule — early
              experience in technical leadership.
            </li>
          </ul>
        </div>

        {/* Education */}
        <h3 className="text-center underline text-[18px] py-4">Education</h3>
        <div className="py-2">
          <p className="italic">
            <span className="font-bold italic">
              Bachelor of Technology in Computer Science
            </span>
            <span className="px-2">|</span>{" "}Government Engineering College,
            Ajmer, Rajasthan, India
          </p>
          <p className="py-1 italic">Aug 2016 – Nov 2020</p>
        </div>

        {/* Projects */}
        <h3 className="text-center underline text-[18px] py-4">Projects</h3>
        <div className="py-2">
          <p>
            <span className="font-bold">The IT Studio</span>
            <span className="px-2">—</span>
            <span className="italic">
              Next.js, Node.js, Apollo GraphQL, AWS (DynamoDB, EC2, Amplify,
              Route53)
            </span>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built a web app enabling startups to establish an online
              presence, increasing client acquisition by 30%, with a
              blog/forum that grew to 500+ monthly active users.
            </li>
          </ul>
        </div>
        <div className="py-2">
          <p>
            <span className="font-bold">Aivara</span>
            <span className="px-2">—</span>
            <span className="italic">React.js, Node.js, Express.js, MongoDB</span>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built an AI-based water testing platform, reducing analysis
              time by 50% compared to traditional methods.
            </li>
          </ul>
        </div>
        <div className="py-2 pb-16">
          <p>
            <span className="font-bold">Fashion MNIST</span>
            <span className="px-2">—</span>
            <span className="italic">
              Machine Learning, TensorFlow, Keras, Python
            </span>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a multi-class CNN classification model achieving 90%
              accuracy on the Fashion MNIST dataset; visualized results in
              3D.
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Resume;
