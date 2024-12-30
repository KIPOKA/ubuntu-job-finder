"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { useGlobalContext } from "@/context/globalContext";
import {
  Briefcase,
  Building,
  CheckCircleIcon,
  SearchIcon,
  Users,
} from "lucide-react";
import Link from "next/link";
import { title } from "process";

export default function Home() {
  const features = [
    {
      icon: <Briefcase className="w-6 h-6 text-[#7263f3]" />,
      title: "Diverse Opportunities",
      description:
        "Access thousands of job listings across various industries and experience levels.",
      benefits: [
        "100,000+ active job listings",
        "50+ job categories",
        "Remote and on-site options",
      ],
      cta: "Explore Jobs",
      ctaLink: "/findwork",
    },
    {
      icon: <Building className="w-6 h-6 text-[#7263f3]" />,
      title: "Top Companies",
      description:
        "Connect with leading companies, from innovative startups to Fortune 500 corporations.",
      benefits: [
        "500+ verified employers",
        "Exclusive partnerships",
        "Direct application process",
      ],
      cta: "View Companies",
      ctaLink: "/findwork",
    },
    {
      icon: <Users className="w-6 h-6 text-[#7263f3]" />,
      title: "Talent Pool",
      description:
        "Employers can access a diverse pool of qualified candidates for their open positions.",
      benefits: [
        "1M+ registered job seekers",
        "Advanced search filters",
        "AI-powered matching",
      ],
      cta: "Post a Job",
      ctaLink: "/post",
    },
  ];

  return (
    <main>
      <Header />

      <section className="py-40 bg-[#0a192f] text-primary-foreground">
        <div className="container mx-auto px-4 text-center text-black">
          <h1 className="text-4xl text-white md:text-5xl font-bold mb-6">
            With Ubuntu Job Finder, your Dream Job or Perfect Candidate
          </h1>
          <p className="text-xl mb-8 text-white">
            Connect with thousands of employers and job seekers on our platform
          </p>
          <div className="max-w-2xl mx-auto flex gap-4">
            <Input
              type="text"
              placeholder="Job title or keyword"
              className="flex-grow bg-white text-black"
            />
            <Button className="bg-green-500 text-white">
              <SearchIcon className="w-6 h-6" />
              Search Jobs
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0a192f] to-green-500">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Why Choose{" "}
            <span className="text-green-500 font-extrabold underline">
              Ubuntu Job Finder
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col h-full rounded-xl border-none"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={feature.ctaLink}>{feature.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center py-4">
            <Badge
              variant={"outline"}
              className="text-sm font-medium border-white text-white  py-4"
            >
              Trusted by 10,000+ companies worldwide
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#0a192f] to-[#1c2a4d]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            How to Find Your Dream Job with{" "}
            <span className="text-yellow-400 font-extrabold underline">
              Ubuntu Job Finder
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Register */}
            <Card className="flex flex-col h-full rounded-xl border-none shadow-lg transition-transform transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  {/* Icon for Register */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path d="M21 12c0-1.1-.9-2-2-2h-5V5c0-1.1-.9-2-2-2s-2 .9-2 2v5H5c-1.1 0-2 .9-2 2s.9 2 2 2h5v5c0 1.1.9 2 2 2s2-.9 2-2v-5h5c1.1 0 2-.9 2-2z" />
                  </svg>
                </div>
                <CardTitle className="text-xl mb-2 text-green-400">
                  Step 1: Register
                </CardTitle>
                <CardDescription className="text-[#0a192f]">
                  Create an account with Ubuntu Job Finder to access job
                  listings, apply options, and notifications for new
                  opportunities.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Step 2: Login */}
            <Card className="flex flex-col h-full rounded-xl border-none shadow-lg transition-transform transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  {/* Icon for Login */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM11 6h2v5h3l-4 4-4-4h3z" />
                  </svg>
                </div>
                <CardTitle className="text-xl mb-2 text-green-400">
                  Step 2: Login
                </CardTitle>
                <CardDescription className="text-[#0a192f]">
                  Log in to access personalized job recommendations, saved
                  searches, and apply options.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Step 3: Find a Job */}
            <Card className="flex flex-col h-full rounded-xl border-none shadow-lg transition-transform transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  {/* Icon for Find Job */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path d="M9 3v5h5V3H9zm-3 7h3v10h-3V10zm6 0h3v10h-3V10zm6 0h3v10h-3V10z" />
                  </svg>
                </div>
                <CardTitle className="text-xl mb-2 text-green-400">
                  Step 3: Find a Job
                </CardTitle>
                <CardDescription className="text-[#0a192f]">
                  Use our powerful search tool to find job listings based on
                  your skills, location, and preferences. Filter results by job
                  type, industry, and more.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Step 4: Apply */}
            <Card className="flex flex-col h-full rounded-xl border-none shadow-lg transition-transform transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  {/* Icon for Apply */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path d="M12 2L3 12h6v6h6v-6h6L12 2z" />
                  </svg>
                </div>
                <CardTitle className="text-xl mb-2 text-green-400">
                  Step 4: Apply
                </CardTitle>
                <CardDescription className="text-[#0a192f]">
                  Click the "Apply" button to submit your resume and cover
                  letter directly to the employer.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Step 5: Interview */}
            <Card className="flex flex-col h-full rounded-xl border-none shadow-lg transition-transform transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  {/* Icon for Interview */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path d="M19 3h-14c-1.1 0-1.99.9-1.99 2L3 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 14H6V7h12v10z" />
                  </svg>
                </div>
                <CardTitle className="text-xl mb-2 text-green-400">
                  Step 5: Interview
                </CardTitle>
                <CardDescription className="text-[#0a192f]">
                  Prepare for your interview by researching the company and
                  reviewing the job requirements.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Step 6: Get the Job */}
            <Card className="flex flex-col h-full rounded-xl border-none shadow-lg transition-transform transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  {/* Icon for Job */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM11 6h2v5h3l-4 4-4-4h3z" />
                  </svg>
                </div>
                <CardTitle className="text-xl mb-2 text-green-400">
                  Step 6: Get the Job
                </CardTitle>
                <CardDescription className="text-[#0a192f]">
                  After a successful interview, you'll receive a job offer!
                  Congratulations on your new opportunity!
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-green-500 to-[#0a192f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Ready to Get Started?
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size={"lg"} asChild>
              <Link href={"/findwork"}>Find Work</Link>
            </Button>
            <Button size={"lg"} variant={"outline"} asChild>
              <Link href={"/post"}>Post a Job</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
