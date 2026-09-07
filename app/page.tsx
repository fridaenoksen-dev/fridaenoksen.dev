import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ArrowDown, ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <section className="text-center">
        <Avatar className="mx-auto mb-8 h-24 w-24">
          <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-2xl font-semibold text-primary-foreground">
            FE
          </AvatarFallback>
        </Avatar>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Frontend-utvikler med markedsføringsbakgrunn
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Jeg bygger nettbutikker på Shopify og skriver innholdet som skal fylle
          dem.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hei@fridaenoksen.no"
            className={buttonVariants({ size: "lg" })}
          >
            <Mail className="mr-2 h-4 w-4" />
            Ta kontakt
          </a>
          <a
            href="#prosjekter"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Se prosjekter
            <ArrowDown className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="https://github.com/fridaenoksen-dev"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "secondary", size: "icon" }),
              "rounded-full",
            )}
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/frida-elvestrand-enoksen"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "secondary", size: "icon" }),
              "rounded-full",
            )}
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:hei@fridaenoksen.no"
            className={cn(
              buttonVariants({ variant: "secondary", size: "icon" }),
              "rounded-full",
            )}
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <a
          href="#prosjekter"
          className="mt-16 inline-block text-muted-foreground animate-bounce"
          aria-label="Scroll til prosjekter"
        >
          <ChevronDown className="h-5 w-5" />
        </a>
      </section>
    </main>
  );
}
