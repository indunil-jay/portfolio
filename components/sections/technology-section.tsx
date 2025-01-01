import { Badge } from "../ui/badge";
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
    "shadcn/ui",
    "vercel",
    "testinglibrary",
    "jest",
    "nestjs",
    "docker",
    "git",
    "github",
    "visualstudiocode",
];

const technology = {
    languges: {
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
        "react",
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
    tools: ["visualstudiocode", "github", "docker"],
};

export const TechnologySection = () => {
    return (
        <div>
            <h1>Skills</h1>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <h3 className="text-xl font-semibold">
                        front-end technology
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                        {technology.frontTechnoloy.map((item) => (
                            <Badge key={item}>{item}</Badge>
                        ))}
                    </div>
                    <h3 className="text-xl font-semibold">
                        back-end technology
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                        {technology.backendTechnoloy.map((item) => (
                            <Badge key={item}>{item}</Badge>
                        ))}
                    </div>
                    <h3 className="text-xl font-semibold">
                        databases and orms technology
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                        {technology.databaseAndOrms.map((item) => (
                            <Badge key={item}>{item}</Badge>
                        ))}
                    </div>

                    <h3 className="text-xl font-semibold">other tools</h3>
                    <div className="flex gap-2 flex-wrap">
                        {technology.tools.map((item) => (
                            <Badge key={item}>{item}</Badge>
                        ))}
                    </div>
                </div>

                <div>
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
        </div>
    );
};
