export default function ExperienceItem({ 
  company, 
  companyUrl, 
  roles, 
  linkColor = "rgba(61,123,164,0.8)",
  lineColor = "rgba(61,123,164,0.2)"
}) {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[5px] md:gap-[80px] items-start relative shrink-0 w-full">
      {/* Company Column */}
      <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 w-full md:w-[275px] md:text-nowrap">
        <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[16px]">
          {Array.isArray(company) ? (
            company.map((line, index) => (
              <p key={index} className={index === 0 ? "mb-0 leading-[24px] md:text-nowrap" : "leading-[24px] md:text-nowrap"}>
                {line}
              </p>
            ))
          ) : (
            <p className="leading-[24px] md:text-nowrap">{company}</p>
          )}
        </div>
        {companyUrl && (
          <a 
            className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[14px] cursor-pointer" 
            href={companyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: linkColor }}
          >
            <p className="leading-[24px] md:text-nowrap">
              {companyUrl.replace(/^https?:\/\//, '').replace(/^www\./, '')}
            </p>
          </a>
        )}
      </div>
      
      {/* Roles Column */}
      <div className={`content-stretch flex flex-col items-start ${roles.length > 1 ? 'gap-[12px]' : 'gap-[5px]'} justify-center leading-[0] relative shrink-0 w-full md:text-nowrap`}>
        {/* Vertical line - only on mobile */}
        <div className="flex md:hidden absolute left-0 top-0 bottom-0 w-[2px] rounded-full" style={{ backgroundColor: lineColor }}></div>
        {roles.map((role, index) => (
          <div key={index} className="content-stretch flex flex-row md:flex-col gap-[12px] items-start leading-[0] relative shrink-0 w-full md:text-nowrap pl-[15px] md:pl-0">
            {/* Role Content */}
            <div className="flex flex-col gap-[5px] items-start relative shrink-0 flex-1">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[16px]">
                  <p className="leading-[24px] md:text-nowrap">{role.title}</p>
                </div>
                <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[14px] text-[rgba(61,123,164,0.8)]">
                  <p className="leading-[24px] md:text-nowrap">{role.date}</p>
                </div>
              </div>
              {role.description && (
                <div className="flex flex-col font-manrope font-normal justify-center leading-[24px] relative shrink-0 text-[#3d7ba4] text-[16px]">
                  {Array.isArray(role.description) ? (
                    role.description.map((line, lineIndex) => (
                      <p key={lineIndex} className={lineIndex < role.description.length - 1 ? "mb-0" : ""}>
                        {line}
                      </p>
                    ))
                  ) : (
                      <p className="leading-[24px]">{role.description}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

