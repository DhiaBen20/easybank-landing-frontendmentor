import PrimaryButton from "./PrimaryButton";
import desktopIntroBg from "../assets/bg-intro-desktop.svg";
import mobileIntroBg from "../assets/bg-intro-mobile.svg";
import mockups from "../assets/image-mockups.png";
import { Container } from "./Container";

function HeroContent() {
  return (
    <div className="z-10 mb-16 flex flex-col items-start justify-center md:z-0 md:mb-0 md:h-full md:w-1/2 lg:pr-16">
      <h1 className="text-center text-[clamp(theme(fontSize.5xl),4vw+0.1rem,theme(fontSize.6xl))] leading-tight text-primary-blue md:text-left">
        Next generation digital banking
      </h1>
      <p className="mt-6 text-center text-zinc-500 md:text-left">
        Take you financial life online. your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing and much more.
      </p>
      <PrimaryButton className="mx-auto mt-8 md:mx-0">
        Request Invite
      </PrimaryButton>
    </div>
  );
}

// function HeroIllustrations() {
//   return (
//     <div className="bottom-0 right-0 top-0 md:absolute md:w-1/2">
//       <div className="-mx-4 overflow-hidden md:absolute md:mx-0 md:size-full">
//         <img
//           src={desktopIntoBg}
//           alt=""
//           className="hidden max-w-[unset] -translate-y-1/4 md:block"
//         />
//         <img src={mobileIntoBg} alt="" className="w-full max-w-[unset]" />
//       </div>
//       <div className="absolute left-0 top-0 md:size-full">
//         <img
//           src={mockups}
//           alt=""
//           className="-translate-y-[20%] md:-translate-y-[13%] md:translate-x-[17%]"
//         />
//       </div>
//     </div>
//   );
// }

function HeroIllustrations() {
  return (
    <>
      <div className="relative mb-[15%] md:hidden">
        <img
          src={mobileIntroBg}
          alt=""
          className="-ml-4 w-[calc(100%_+_theme(spacing.8))] max-w-[unset]"
        />
        <div className="absolute inset-0 overflow-hidden">
          <img src={mockups} alt="" className="absolute bottom-[14%]" />
        </div>
      </div>
      <div className="absolute isolate bottom-0 right-0 top-0 hidden w-1/2 md:block">
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <img src={desktopIntroBg} alt="" className="max-w-[unset] -translate-y-1/4" />
        </div>
        <img src={mockups} alt="" className="-translate-y-[12%] translate-x-[16%]" />
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative md:h-[min(calc(100vh-5rem),700px)]">
      <Container className="flex h-full flex-col-reverse md:block">
        <HeroContent />
        <HeroIllustrations />
      </Container>
    </section>
  );
}
