import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

interface GradientTagProps {
    Icon: React.ElementType;
    tagName: string;
}

export const GradientTag = ({ Icon, tagName }: GradientTagProps) => {
    return (
        <AnimatedGradientText>
            <Icon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span
                className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
            >
                {tagName}
            </span>
        </AnimatedGradientText>
    );
};
