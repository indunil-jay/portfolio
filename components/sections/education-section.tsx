import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/ui/blur-fade";
const BLUR_FADE_DELAY = 0.04;

export const EducationSection = () => {
    return (
        <section id="education" className="">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                    <h2 className="text-2xl font-bold">Education</h2>
                </BlurFade>
                <div className="space-y-8 relative">
                    {/* Dynamic Vertical Line */}
                    {Array.from({ length: 5 }).length > 1 && (
                        <>
                            <div
                                className="absolute left-[22px] w-[1px] bg-muted-foreground/50 z-0"
                                style={{
                                    top: "calc(3rem + 2px)",
                                    height: `calc(100% - 6rem)`,
                                }}
                            />
                        </>
                    )}

                    {Array.from({ length: 5 }, (_, index) => (
                        <BlurFade key={index}>
                            <div
                                className="absolute left-[22px] h-[1px] bg-gradient-to-r from-muted-foreground/30 to-muted-foreground/0 z-0 "
                                style={{
                                    top: "calc(3.8rem + 4px)",
                                    width: `calc(100% - 22px)`,
                                }}
                            />
                            <div className="flex gap-4 items-center relative z-10 ">
                                <div className="flex flex-col items-center">
                                    <Avatar className="size-12 outline  outline-1 outline-muted-foreground/50">
                                        <AvatarImage
                                            className="size-12"
                                            src="https://github.com/shadcn.png"
                                            alt="@shadcn"
                                        />
                                        <AvatarFallback className="size-12">
                                            CN
                                        </AvatarFallback>
                                    </Avatar>
                                </div>

                                <div>
                                    <p>The Open university, Sri Lanka</p>
                                    <p className="text-xs text-muted-foreground">
                                        Bachelor&apos;s Degree of Software
                                        Engineering (BSE)
                                    </p>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};
