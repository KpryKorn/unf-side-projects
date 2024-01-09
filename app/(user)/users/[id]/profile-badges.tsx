interface ProfileBadgeProps {
  projects?: number;
  experience?: number;
}

export async function ProjectsProfileBadge({ projects }: ProfileBadgeProps) {
  return (
    <p className="font-serif font-medium p-4 bg-violet-100 rounded-md text-sm">
      <span className="font-semibold text-2xl text-violet-600">{projects}</span>
      <br />
      projects on the platform
    </p>
  );
}

export async function ExperienceProfileBadge({
  experience,
}: ProfileBadgeProps) {
  return (
    <p className="font-serif font-medium p-4 bg-blue-100 rounded-md text-sm">
      <span className="font-semibold text-2xl text-blue-600">
        {experience}+
      </span>
      <br />
      years of experience
    </p>
  );
}
