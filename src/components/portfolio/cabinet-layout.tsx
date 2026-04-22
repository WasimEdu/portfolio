import type React from "react";
import ContactFile from "@/components/portfolio/cabinet-files/contact-file";
import DividerFile from "@/components/portfolio/cabinet-files/divider-file";
import ExperienceFile from "@/components/portfolio/cabinet-files/experience-file";
import IntroFile from "@/components/portfolio/cabinet-files/intro-file";
import PlaceholderFile from "@/components/portfolio/cabinet-files/placeholder-file";
import ProjectsFile from "./cabinet-files/projects-file";
import SkillsFile from "./cabinet-files/skills-file";

export type File = {
    tabLocation: 0 | 1 | 2;
    isDivider?: boolean;
    title: string;
    content: React.ReactNode;
};

const cabinetLayout: File[] = [
    {
        tabLocation: 0,
        isDivider: true,
        title: "Profile",
        content: <DividerFile title="Profile" />,
    },
    {
        tabLocation: 1,
        title: "Intro",
        content: <IntroFile />,
    },
    {
        tabLocation: 2,
        title: "---",
        content: <PlaceholderFile />,
    },
    {
        tabLocation: 0,
        title: "---",
        content: <PlaceholderFile />,
    },
    {
        tabLocation: 1,
        isDivider: true,
        title: "Experience",
        content: <DividerFile title="Experience" />,
    },
    {
        tabLocation: 2,
        title: "Work",
        content: <ExperienceFile />,
    },
    {
        tabLocation: 0,
        title: "Skills",
        content: <SkillsFile />,
    },
    {
        tabLocation: 1,
        title: "Contact",
        content: <ContactFile />,
    },
    {
        tabLocation: 0,
        title: "---",
        content: <PlaceholderFile />,
    },
    {
        tabLocation: 2,
        isDivider: true,
        title: "Projects",
        content: <DividerFile title="Projects" />,
    },
    {
        tabLocation: 1,
        title: "Selected",
        content: <ProjectsFile />,
    },
    {
        tabLocation: 2,
        title: "---",
        content: <PlaceholderFile />,
    },
    {
        tabLocation: 0,
        title: "---",
        content: <PlaceholderFile />,
    },
    {
        tabLocation: 1,
        title: "---",
        content: <PlaceholderFile />,
    },
    {
        tabLocation: 2,
        title: "---",
        content: <PlaceholderFile />,
    },
];

export default cabinetLayout;
