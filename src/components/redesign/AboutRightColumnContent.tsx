import IntroVideo from "./about/IntroVideo";
import MyStory from "./about/MyStory";
import HowIWork from "./about/HowIWork";
import Experience from "./about/Experience";
import Toolkit from "./about/Toolkit";
import EducationCertifications from "./about/EducationCertifications";
import ContactBlock from "./ContactBlock";
import SiteFooter from "./SiteFooter";

export default function AboutRightColumnContent() {
  return (
    <div className="flex flex-col gap-[28px] lg:gap-[64px] items-start w-full">
      <IntroVideo />
      <MyStory />
      <HowIWork />
      <Experience />
      <Toolkit />
      <EducationCertifications />
      <ContactBlock />
      <SiteFooter />
    </div>
  );
}
