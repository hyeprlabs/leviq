type SectionIntroProps = {
  id: string;
  heading: string;
  subheading?: string;
};

/** Centered heading + subheading block shared by the bordered-grid sections. */
export function SectionIntro({ id, heading, subheading }: SectionIntroProps) {
  return (
    <div className="flex flex-col items-center gap-3 px-4 py-10 text-center md:py-16">
      <h2 id={id} className="font-serif text-3xl tracking-tight md:text-4xl">
        {heading}
      </h2>
      {subheading && (
        <p className="max-w-xl text-balance text-muted-foreground text-sm sm:text-base">
          {subheading}
        </p>
      )}
    </div>
  );
}
