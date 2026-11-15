import Image from "next/image";
import { HardDrivesIcon, PaletteIcon } from "@phosphor-icons/react/ssr";

const MAPA_LOGOS: Record<string, string> = {
  Java: "/logos/tech/java.svg",
  "Spring Boot": "/logos/tech/spring.svg",
  "Node.js": "/logos/tech/nodejs.svg",
  Fastify: "/logos/tech/fastify.svg",
  React: "/logos/tech/react.svg",
  "Next.js": "/logos/tech/nextjs.svg",
  TypeScript: "/logos/tech/typescript.svg",
  Flutter: "/logos/tech/flutter.svg",
  PostgreSQL: "/logos/tech/postgresql.svg",
  "CSS Modules": "/logos/tech/css3.svg",
  Vercel: "/logos/tech/vercel.svg",
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

  if (nome === "@phosphor-icons/react") {
    return <PaletteIcon size={tamanho} weight="duotone" color="#F0644F" />;
  }

  return <HardDrivesIcon size={tamanho} weight="duotone" color="#F0644F" />;
}
