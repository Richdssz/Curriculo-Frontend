import Image from "next/image";
import {
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  DesktopIcon,
  DeviceMobileIcon,
  GearIcon,
  GithubLogoIcon,
  GlobeIcon,
  GraduationCapIcon,
  HardDrivesIcon,
  HeadsetIcon,
  PaletteIcon,
  SparkleIcon,
} from "@phosphor-icons/react/ssr";

const MAPA_LOGOS: Record<string, string> = {
  Java: "/logos/tech/java.svg",
  "Spring Boot": "/logos/tech/spring.svg",
  "Node.js": "/logos/tech/nodejs.svg",
  Fastify: "/logos/tech/fastify.svg",
  React: "/logos/tech/react.svg",
  "Next.js": "/logos/tech/nextjs.svg",
  TypeScript: "/logos/tech/typescript.svg",
  JavaScript: "/logos/tech/javascript.svg",
  HTML: "/logos/tech/html5.svg",
  HTML5: "/logos/tech/html5.svg",
  CSS: "/logos/tech/css3.svg",
  CSS3: "/logos/tech/css3.svg",
  "CSS Modules": "/logos/tech/css3.svg",
  Go: "/logos/tech/golang.svg",
  Golang: "/logos/tech/golang.svg",
  Flutter: "/logos/tech/flutter.svg",
  Dart: "/logos/tech/dart.svg",
  Figma: "/logos/tech/figma.svg",
  PostgreSQL: "/logos/tech/postgresql.svg",
  Vercel: "/logos/tech/vercel.svg",
  "C#": "/logos/tech/csharp.svg",
  ".NET": "/logos/tech/dotnet.svg",
};

interface LogoTecnologiaProps {
  nome: string;
  tamanho?: number;
}

export default function LogoTecnologia({
  nome,
  tamanho = 18,
}: LogoTecnologiaProps) {
  const caminhoLogo = MAPA_LOGOS[nome];

  if (caminhoLogo) {
    return (
      <Image
        src={caminhoLogo}
        alt={`Logo ${nome}`}
        width={tamanho}
        height={tamanho}
        unoptimized
        style={{ objectFit: "contain", flexShrink: 0 }}
      />
    );
  }

  if (nome.includes("GitHub")) {
    return <GithubLogoIcon size={tamanho} weight="bold" color="#F0644F" />;
  }
  if (nome === "IA" || nome === "AI") {
    return <SparkleIcon size={tamanho} weight="duotone" color="#F0644F" />;
  }
  if (nome === "Serverless") {
    return <CloudIcon size={tamanho} weight="duotone" color="#F0644F" />;
  }
  if (nome === "Mobile") {
    return <DeviceMobileIcon size={tamanho} weight="duotone" color="#F0644F" />;
  }
  if (nome === "UI/UX" || nome === "@phosphor-icons/react") {
    return <PaletteIcon size={tamanho} weight="duotone" color="#F0644F" />;
  }
  if (nome === "CRUD" || nome === "Back4App") {
    return <DatabaseIcon size={tamanho} weight="duotone" color="#F0644F" />;
  }
  if (nome === "INEP") {
    return <GraduationCapIcon size={tamanho} weight="duotone" color="#F0644F" />;
  }
  if (nome === "Web") {
    return <GlobeIcon size={tamanho} weight="duotone" color="#F0644F" />;
  }
  if (nome === "Desktop" || nome === "Windows API") {
    return <DesktopIcon size={tamanho} weight="duotone" color="#F0644F" />;
  }
  if (nome === "Web Scraping" || nome === "Automação") {
    return <GearIcon size={tamanho} weight="duotone" color="#F0644F" />;
  }
  if (nome === "Suporte N1" || nome === "Suporte" || nome === "Atendimento") {
    return <HeadsetIcon size={tamanho} weight="duotone" color="#F0644F" />;
  }
  if (nome === "Redes" || nome === "Infraestrutura" || nome === "Sistemas") {
    return <HardDrivesIcon size={tamanho} weight="duotone" color="#F0644F" />;
  }

  return <CodeIcon size={tamanho} weight="duotone" color="#F0644F" />;
}
