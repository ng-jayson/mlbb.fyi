import { GradiantCard } from "@/components/shared/gradiant-card";
import { Hero } from "@prisma/client";
import Image from "next/image";

export default function HeroFyi({ hero }: { hero: Hero | null }) {
  return (
    <>
      <div className="flex flex-col">
        <GradiantCard className="my-4 h-fit w-full">
          <Image
            src={hero?.img || "/nana.jpg"}
            alt={hero?.name || ""}
            width={2160}
            height={3840}
            className="h-[178px] w-[100px] overflow-hidden rounded-lg bg-cover bg-top bg-no-repeat md:h-[355px] md:w-[200px]"
          />
          <p className="font-heading  text-xl md:text-3xl">{hero?.name}</p>
        </GradiantCard>
      </div>
    </>
  );
}
