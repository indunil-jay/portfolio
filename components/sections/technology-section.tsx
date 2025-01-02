"use client";
import { Shapes } from "lucide-react";
import { GradientTag } from "../custom/gradient-tag";
import { Badge } from "../ui/badge";
import BlurFade from "../ui/blur-fade";
import { motion } from "motion/react";

import { TechnologyClouds } from "../custom/technology-clouds";

export const TechnologySection = () => {
    return (
        <section>
            <div className="my-7">
                <BlurFade>
                    <GradientTag Icon={Shapes} tagName="Skills" />
                </BlurFade>
            </div>
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-center">
                    Skills & Expertise
                </h2>
                <p className="text-lg text-muted-foreground text-center">
                    I specialize in modern JavaScript technologies, focusing on
                    building scalable and efficient solutions with frameworks
                    like React, Next.js, Node.js, Nest.js, and more. My
                    expertise lies in crafting user-friendly interfaces and
                    seamless back-end services, leveraging TypeScript for type
                    safety and enhanced code quality. I have a solid
                    understanding of REST API principles, allowing me to design
                    and implement lightweight, stateless services that
                    communicate efficiently between clients and servers.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 my-7">
                <TechnologyList />

                <div>
                    <TechnologyClouds />
                </div>
            </div>
        </section>
    );
};

type TechnologyTypeProps = {
    title: string;
    items: string[];
};
const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.05 * index },
    }),
};

const TechnologyType = ({ title, items }: TechnologyTypeProps) => (
    <div>
        <BlurFade>
            <h3 className="text-xl font-semibold">{title}</h3>
        </BlurFade>
        <ul className="flex gap-2 flex-wrap">
            {items.map((item, i) => (
                <motion.li
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={i}
                    key={item}
                >
                    <Badge key={i}>{item}</Badge>
                </motion.li>
            ))}
        </ul>
    </div>
);

const technology = {
    languages: {
        master: ["javascript", "typescript"],
        basic: ["python", "go"],
    },
    frontTechnoloy: [
        "react",
        "nextjs",
        "shadcn/ui",
        "tailwindcss",
        "sass",
        "typescript",
        "javascript",
        "reactquery",
        "reacthookform",
        "html5",
        "css3",
    ],
    databaseAndOrms: [
        "drizzle",
        "typeorm",
        "prisma",
        "mongoose",
        "mongodb",
        "postgresql",
        "mysql",
    ],
    backendTechnoloy: ["nestJs", "nodeJs", "expressJs"],
    testing: ["jest", "vitest", "testinglibrary"],
    tools: ["github", "docker"],
};

const TechnologyList = () => (
    <div className="flex flex-col justify-center space-y-8">
        <TechnologyType
            title="Front-end Technology"
            items={technology.frontTechnoloy}
        />
        <TechnologyType
            title="Back-end Technology"
            items={technology.backendTechnoloy}
        />
        <TechnologyType
            title="Databases and ORMs"
            items={technology.databaseAndOrms}
        />
        <TechnologyType title="Other Tools" items={technology.tools} />
    </div>
);

export default TechnologyList;
