import svgPaths from "./svg-7ypeme3rzr";
import imgGoogleWebSearch from "./e2fda1aeba59b7fbd12df402f54d6a8e8e1ae80c.png";
import imgFollowing from "./e6e43db6fc98e611e51de55669c2ba7b2bd31f6f.png";
import imgToday from "./9b26dffc715bfc60e0539b590373199088533d5e.png";
import imgProfile from "./3ef698d8e729338a77f0d6ef38930681b509b500.png";
type WfToolbarProps = {
  className?: string;
  property1?: "Discover";
};

function WfToolbar({ className, property1 = "Discover" }: WfToolbarProps) {
  return (
    <div className={className || "bg-white h-[80px] relative w-[375px]"}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start relative size-full">
          <div className="bg-[#1a202c] h-[2px] relative shrink-0 w-full" data-name="Divider" />
          <div className="relative shrink-0 w-full" data-name="Toolbar Items">
            <div className="content-stretch flex gap-[8px] items-start px-[8px] relative size-full">
              <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
                <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Home
                </p>
                <div className="absolute h-[17px] left-[22px] top-[15px] w-[20px]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 20 17" width="20">
                    <path d={svgPaths.p3395f100} fill="black" id="Vector" />
                  </svg>
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] h-[64px] min-w-px relative" data-name="_Toolbar Item">
                <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Discover
                </p>
                <div className="absolute left-[20.6px] size-[24px] top-[11px]" data-name="Google Web Search">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgGoogleWebSearch} />
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
                <div className="absolute left-[21.2px] size-[24px] top-[11px]" data-name="Following">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFollowing} />
                </div>
                <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Wishlist
                </p>
              </div>
              <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
                <div className="absolute left-[20.8px] size-[24px] top-[11px]" data-name="Today">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgToday} />
                </div>
                <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Events
                </p>
              </div>
              <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
                <div className="absolute left-[20.4px] size-[24px] top-[11px]" data-name="Profile">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgProfile} />
                </div>
                <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pencil({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="pencil">
      <div className="absolute inset-[-0.09%_-0.03%_0.09%_0.02%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="24.001" preserveAspectRatio="none" viewBox="0 0 24.001 24.001" width="24.001">
          <path clipRule="evenodd" d={svgPaths.p939acc0} fill="black" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function PlusSquare({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="plus-square">
      <div className="absolute inset-[35.42%]" data-name="Vector">
        <div className="absolute inset-[-6.43%]">
          <svg className="block size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 13.1667 13.1667" width="13.1667">
            <path d={svgPaths.p8a36000} id="Vector" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-2.5%]">
          <svg className="block size-full" fill="none" height="31.5" preserveAspectRatio="none" viewBox="0 0 31.5 31.5" width="31.5">
            <path d={svgPaths.p11928c80} id="Vector" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChevronBackward({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="chevron_backward">
      <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.4 12" width="7.4">
          <path d={svgPaths.p1cc3a100} fill="#1D1B20" id="icon" />
        </svg>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="absolute contents left-0 top-0" data-name="header section">
      <div className="absolute bg-[#f2f2f2] h-[85px] left-0 top-0 w-[402px]" />
      <ChevronBackward className="absolute h-[45px] left-0 overflow-clip top-[21px] w-[49px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[24px] leading-[25px] left-[201px] not-italic text-[26px] text-black text-center top-[31px] tracking-[0.52px] w-[274px]">NUS Dance Blast</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[16px] top-[625px]">
      <div className="absolute bg-white h-[142px] left-[16px] rounded-[20px] top-[625px] w-[370px]">
        <div aria-hidden className="absolute border border-black border-dashed inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Italic',sans-serif] font-normal h-[67px] italic justify-center leading-[0] left-[200.5px] text-[18px] text-black text-center top-[675.5px] tracking-[0.36px] w-[263px]">
        <p className="leading-[25px]">add a section</p>
      </div>
      <PlusSquare className="absolute left-[181px] size-[40px] top-[694px]" />
    </div>
  );
}

function ShortLine() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Short Line">
      <div className="bg-[#e0e0e0] flex-[1_0_0] h-[16px] min-w-px relative rounded-bl-[3px] rounded-tl-[3px]" data-name="Line" />
      <div className="bg-[#e0e0e0] flex-[1_0_0] h-[16px] min-w-px relative rounded-br-[3px] rounded-tr-[3px]" data-name="Line" />
      <div className="flex-[1_0_0] h-[16px] min-w-px relative rounded-[3px]" data-name="Blank" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[25px] top-[139px]">
      <div className="absolute bg-[#e0e0e0] h-[16px] left-[25px] rounded-[3px] top-[139px] w-[339px]" data-name="Line" />
      <div className="absolute bg-[#e0e0e0] h-[16px] left-[25px] rounded-[3px] top-[164px] w-[312.349px]" data-name="Line" />
      <div className="absolute bg-[#e0e0e0] h-[16px] left-[25px] rounded-[3px] top-[189px] w-[278.236px]" data-name="Line" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[25px] top-[139px]">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[24px] top-[411px]">
      <div className="absolute bg-[#e0e0e0] h-[16px] left-[24px] rounded-[3px] top-[411px] w-[339px]" data-name="Line" />
      <div className="absolute bg-[#e0e0e0] h-[16px] left-[24px] rounded-[3px] top-[436px] w-[312.349px]" data-name="Line" />
      <div className="absolute bg-[#e0e0e0] h-[16px] left-[24px] rounded-[3px] top-[461px] w-[278.236px]" data-name="Line" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[24px] top-[411px]">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[24px] top-[550px]">
      <div className="absolute bg-[#e0e0e0] h-[16px] left-[24px] rounded-[3px] top-[550px] w-[312.349px]" data-name="Line" />
      <div className="absolute bg-[#e0e0e0] h-[16px] left-[24px] rounded-[3px] top-[575px] w-[278.236px]" data-name="Line" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[24px] top-[550px]">
      <Group2 />
    </div>
  );
}

export default function CcaAboutExco() {
  return (
    <div className="bg-white relative size-full" data-name="CCA About - Exco">
      <HeaderSection />
      <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[133px] leading-[0] left-[16px] not-italic text-[0px] text-black top-[97px] tracking-[0.32px] w-[370px] whitespace-pre-wrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[25px] mb-0 text-[20px]">About</p>
        <p className="leading-[25px] mb-0 text-[16px]">​</p>
        <p className="leading-[25px] text-[16px]">​</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[133px] leading-[0] left-[16px] not-italic text-[18px] text-black top-[375px] tracking-[0.36px] w-[370px]">
        <p className="leading-[25px] mb-0">Commitment Level</p>
        <p className="leading-[25px]">​</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[133px] leading-[0] left-[16px] not-italic text-[18px] text-black top-[513px] tracking-[0.36px] w-[370px]">
        <p className="leading-[25px] mb-0">Financial Costs</p>
        <p className="leading-[25px]">​</p>
      </div>
      <Group6 />
      <Pencil className="absolute left-[169px] overflow-clip size-[24px] top-[513px]" />
      <Pencil className="absolute left-[85px] overflow-clip size-[24px] top-[97px]" />
      <Pencil className="absolute left-[201px] overflow-clip size-[24px] top-[375px]" />
      <div className="absolute left-[25px] top-[230px] w-[331px]" data-name="WF Text Placeholder">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="relative shrink-0 w-full" data-name="_Text Base">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
              <div className="bg-[#e0e0e0] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
              <div className="bg-[#e0e0e0] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
              <div className="bg-[#e0e0e0] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
              <div className="bg-[#e0e0e0] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
              <ShortLine />
            </div>
          </div>
        </div>
      </div>
      <Group3 />
      <Group4 />
      <Group5 />
      <WfToolbar className="absolute bg-white h-[80px] left-[12px] top-[794px] w-[375px]" />
    </div>
  );
}