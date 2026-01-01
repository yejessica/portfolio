export default function ExperienceItem({ 
  company, 
  companyUrl, 
  roles, 
  linkColor = "rgba(61,123,164,0.8)" 
}) {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0">
      {/* Company Column */}
      <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-nowrap w-[275px]">
        <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
          {Array.isArray(company) ? (
            company.map((line, index) => (
              <p key={index} className={index === 0 ? "mb-0 leading-[30px] text-nowrap" : "leading-[30px] text-nowrap"}>
                {line}
              </p>
            ))
          ) : (
            <p className="leading-[30px] text-nowrap">{company}</p>
          )}
        </div>
        {companyUrl && (
          <a 
            className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] cursor-pointer" 
            href={companyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: linkColor }}
          >
            <p className="leading-[30px] text-nowrap">
              {companyUrl.replace(/^https?:\/\//, '').replace(/^www\./, '')}
            </p>
          </a>
        )}
      </div>
      
      {/* Roles Column */}
      <div className={`content-stretch flex flex-col items-start ${roles.length > 1 ? 'gap-[15px]' : 'gap-[5px]'} justify-center leading-[0] relative shrink-0 text-nowrap`}>
        {roles.map((role, index) => (
          <div key={index} className="content-stretch flex flex-col gap-[5px] items-start leading-[0] relative shrink-0 text-nowrap">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                <p className="leading-[30px] text-nowrap">{role.title}</p>
              </div>
              <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]">
                <p className="leading-[30px] text-nowrap">{role.date}</p>
              </div>
            </div>
            {role.description && (
              <div className="flex flex-col font-manrope font-normal justify-center leading-[30px] relative shrink-0 text-[#3d7ba4] text-[24px]">
                {Array.isArray(role.description) ? (
                  role.description.map((line, lineIndex) => (
                    <p key={lineIndex} className={lineIndex < role.description.length - 1 ? "mb-0" : ""}>
                      {line}
                    </p>
                  ))
                ) : (
                  <p className="leading-[30px]">{role.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

