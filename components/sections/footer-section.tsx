import { Rocket } from "lucide-react";
import { GradientTag } from "@/components/custom/gradient-tag";
import { HoverBox } from "@/components/custom/hover-box";
import BlurFade from "../ui/blur-fade";

const twitterProfile = {
    avatarImage:
        "https://pbs.twimg.com/profile_images/1874796354377236480/snHHTFHI_400x400.jpg",
    userName: "IndunilJayz",
    socialLink:
        "https://x.com/messages/1865277654657830916-1865277654657830916",
    joinedDate: "Joined December 2024",
};

const gmailProfile = {
    avatarImage:
        "https://lh3.googleusercontent.com/a/ACg8ocKpcfzpihx0lZbnWuNXlzF0ojY0jk2N2Q30FyxZg4OayTj5Pes=s288-c-no",
    userName: "IndunilJayz",
    socialLink:
        "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=indunil.jayz@gmail.com",
    joinedDate: "Joined January 2024",
};

export const FooterSection = () => {
    return (
        <footer id="footer" className="text-center pb-20">
            <div className="my-7">
                <BlurFade>
                    <GradientTag Icon={Rocket} tagName="Contact Me" />
                </BlurFade>
            </div>
            <div className="space-y-6">
                <BlurFade>
                    <h1 className="text-4xl">Get in Touch</h1>
                </BlurFade>
                <BlurFade>
                    <div className="text-sm text-muted-foreground">
                        I&apos;m always open to meaningful conversations! Feel
                        free to send me a{" "}
                        <span className="text-primary">
                            <HoverBox
                                triggerText="Twitter"
                                profileData={twitterProfile}
                            />
                            or
                            <HoverBox
                                triggerText="Gmail"
                                profileData={gmailProfile}
                            />
                        </span>
                        , and I&apos;ll respond as soon as I can. Kindly note, I
                        reserve replies for genuine inquiries and collaboration
                        opportunities.
                    </div>
                </BlurFade>
            </div>
        </footer>
    );
};
