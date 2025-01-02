import { EducationSection } from "@/components/sections/education-section";
import { FooterSection } from "@/components/sections/footer-section";
import { LandingSection } from "@/components/sections/landing-section";
import { TechnologySection } from "@/components/sections/technology-section";

export default function Home() {
    return (
        <div className="space-y-20">
            {/* landing section */}
            <LandingSection />
            {/* section-education*/}
            <EducationSection />
            {/* technology */}
            <TechnologySection />
            {/* footer */}
            <FooterSection />
        </div>
    );
}
