"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Bot,
  CircleAlert,
  CircleAlertIcon,
  DoorClosedIcon,
  FileCheck2,
  LucideCircleAlert,
  OctagonAlert,
  Plus,
  Settings,
  TriangleAlert,
} from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";
import { useState } from "react";
import { useChat } from "ai/react";
import ReportComponent from "@/components/ReportComponent";
// import { toast } from "sonner";
import { useToast } from "@/components/ui/use-toast"
import ChatComponent from "@/components/chatcomponent";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Home = () => {
  const { toast } = useToast()

  const [reportData, setreportData] = useState("");
  const onReportConfirmation = (data: string) => {
    setreportData(data);
    toast({
      description: "Updated!"
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">MedReport AI</h1>
              <p className="text-sm opacity-90">Intelligent Medical Report Analysis</p>
            </div>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 text-white">
              <Link 
                href="/" 
                className="hover:text-gray-200 transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                href="/profile" 
                className="hover:text-gray-200 transition-colors font-medium"
              >
                Profile
              </Link>
              <Link 
                href="/about" 
                className="hover:text-gray-200 transition-colors font-medium"
              >
                About
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:text-gray-200">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col space-y-4 mt-6">
                    <Link 
                      href="/" 
                      className="text-lg hover:text-gray-500 transition-colors"
                    >
                      Home
                    </Link>
                    <Link 
                      href="/profile" 
                      className="text-lg hover:text-gray-500 transition-colors"
                    >
                      Profile
                    </Link>
                    <Link 
                      href="/about" 
                      className="text-lg hover:text-gray-500 transition-colors"
                    >
                      About
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            <div className="flex items-center gap-3">
              <ModeToggle />
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-white">
                    <Settings />
                    <span className="sr-only">Settings</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="max-h-[80vh]">
                  <ReportComponent onReportConfirmation={onReportConfirmation} />
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="hidden md:flex flex-col">
            <ReportComponent onReportConfirmation={onReportConfirmation} />
          </div>
          <div className="lg:col-span-2">
            <ChatComponent reportData={reportData} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 MedReport AI. All rights reserved.
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">Privacy Policy</a>
              <a href="#" className="hover:text-foreground">Terms of Service</a>
              <a href="#" className="hover:text-foreground">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
