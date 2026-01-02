export default function Footer() {
  return (
    <footer className="bg-[#3d7ba4] content-stretch flex font-manrope font-normal items-center justify-center md:justify-between leading-[0] overflow-clip px-[30px] md:px-[80px] py-[20px] relative shrink-0 text-[14px] md:text-nowrap text-white w-full border-t border-white/30">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] md:text-nowrap text-center md:text-left">Last dusted in January 2026. Thank you for visiting!</p>
      </div>
      {/* <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">[x]th visitor!</p>
      </div> */}
    </footer>
  )
}
