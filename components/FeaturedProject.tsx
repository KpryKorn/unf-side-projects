import Image from "next/image";
import defaultProject from "@/assets/keith-zhang-vJmlEqowqb8-unsplash.jpg";

interface FeaturedProjectProps {}

export default async function FeaturedProject({}: FeaturedProjectProps) {
  return (
    <article>
      <h2 className="mb-4 font-medium text-xl tracking-tight leading-none">
        Featured Project
      </h2>
      <figure>
        <Image
          src={defaultProject}
          alt={"Project"}
          width={1000}
          height={500}
          className="mb-4 aspect-video h-full w-full rounded-lg"
        />
        <figcaption>
          Description du projet mis en avant <br /> Description du projet mis en
          avant
        </figcaption>
      </figure>
    </article>
  );
}
