import Features from "@/components/home-page/Features";
import Hero from "@/components/home-page/Hero";
import HowItWorks from "@/components/home-page/HowItWorks";
import Pricing from "@/components/home-page/Pricing";
import Templates from "@/components/home-page/Templates";
import PageWrapper from "@/components/wrapper/page-wrapper";
import config from "@/config";
import ComparisonTable from "@/components/home-page/ComparisonTable";

export default function Home() {
  return (
    <PageWrapper>
      <div className="bg-dot-pattern" aria-hidden="true" />
      
      <div className="relative z-10">
        <div id="top" className="flex flex-col justify-center items-center w-full min-h-[calc(100vh-4rem)] bg-gradient">
          <Hero />
        </div>
        <div className="w-full bg-alternate">
          <Features />
        </div>
        <div className="w-full bg-gradient">
          <HowItWorks />
        </div>
        <div className="w-full bg-alternate">
          <Templates />
        </div>
        <div className="w-full bg-alternate">
          <ComparisonTable />
        </div>
      </div>
    </PageWrapper>
  );
}
