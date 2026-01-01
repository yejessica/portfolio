import ExperienceItem from './ExperienceItem';

export default function ExperienceSection({ title, experiences, linkColor }) {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-editorial-new font-[200] justify-center leading-[0] not-italic relative shrink-0 text-[#3d7ba4] text-[40px] w-[400px]">
        <p className="leading-[60px]">{title}</p>
      </div>
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[5px] py-[10px] relative shrink-0 w-full">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            company={experience.company}
            companyUrl={experience.companyUrl}
            roles={experience.roles}
            linkColor={linkColor || experience.linkColor}
          />
        ))}
      </div>
    </div>
  );
}

