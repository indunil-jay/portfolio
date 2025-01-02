import { CalendarDays, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

interface SocialProfile {
    avatarImage: string;
    userName: string;
    socialLink: string;
    joinedDate: string;
}

interface HoverBoxProps {
    triggerText: string;
    profileData: SocialProfile;
}

export const HoverBox = ({ triggerText, profileData }: HoverBoxProps) => {
    const { avatarImage, userName, socialLink, joinedDate } = profileData;

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <span className="underline underline-offset-2 px-1.5">
                    {triggerText}
                </span>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex space-x-4">
                    <Avatar>
                        <AvatarImage src={avatarImage} />
                        <AvatarFallback>
                            {userName[0].toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <p className="text-sm font-semibold text-start">
                            @{userName}
                        </p>
                        <p className="text-xs flex pt-2">
                            <a
                                href={socialLink}
                                target="_blank"
                                className="underline"
                            >
                                Send a Message
                            </a>
                            <Send className="ml-2 h-4 w-4" />
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-xs text-muted-foreground">
                                {joinedDate}
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};
