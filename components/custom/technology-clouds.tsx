import IconCloud from "../ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "react",
    "reactquery",
    "reacthookform",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "tailwindcss",
    "sass",
    "prisma",
    "drizzle",
    "typeorm",
    "mongoose",
    "mongodb",
    "postgresql",
    "mysql",
    // "shadcn/ui",
    "vercel",
    "testinglibrary",
    "jest",
    "nestjs",
    "docker",
    "git",
    "github",
    // "visualstudiocode",
];

export const TechnologyClouds = () => {
    return <IconCloud iconSlugs={slugs} />;
};
