import { Landing } from "@/components/hero";
import MiniChartsCollection from "@/components/miniCharts";
import Nav from "@/components/nav-bar";
import { RouteText } from "@/components/routetext";
import SideHero from "@/components/ui/heroside";
import Minichart from "@/components/ui/minichart";
import Image from "next/image";

export default function Home() {
  return (
    <main className="" >
    
      <Landing />
        
      <MiniChartsCollection />
      <div className=" md:hidden flex items-center justify-center px-3  ">
        <SideHero />
        
      </div>
    </main>
  );
}
