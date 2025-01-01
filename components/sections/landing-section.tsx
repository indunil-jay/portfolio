import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
export const LandingSection = () => {
    return (
        <div className="relative min-h-screen">
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen  place-content-center">
                <div>
                    <h1 className="text-6xl font-semibold pointer-events-none whitespace-pre-wrap ">
                        Hi there! I&apos;m Indunil Jay
                    </h1>
                    <p className="text-muted-foreground my-7">
                        I&apos;m a software engineering undergraduate based in
                        Kandy, Sri Lanka. Passionate about crafting solutions,
                        building innovative things, and making an impact by
                        helping people.
                    </p>
                </div>
            </div>
        </div>
    );
};
