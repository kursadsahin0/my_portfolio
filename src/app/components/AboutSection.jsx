'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>ReactJs</li>
        <li>JavaScript</li>
        <li>NextJs</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>Tailwind</li>
        <li>ChartJs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bartın University English Prep Class (2016- 2017)</li>
        <li>Bartın University- Management Information System (2017- 2021)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Beginner Frontend Web Development Path (Patika.dev)</li>
        <li>HTML (Sololearn)</li>
        <li>Javascript</li>
        <li>Responsive Web Design</li>
        <li>API and API Test</li>
        <li>Software Test Automation</li>
        <li>Information Security</li>
        <li>Robotic Programming</li>
        <li>Python</li>
        <li>AWS Compute Services Overview </li>
        <li>Innovation</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a frontend  developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, NextJs, ChartJs
            HTML, CSS, SCSS, Tailwind and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
