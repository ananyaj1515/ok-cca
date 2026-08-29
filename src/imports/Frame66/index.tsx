import svgPaths from "./svg-l2ayzdawce";
import imgGoogleWebSearch from "./e2fda1aeba59b7fbd12df402f54d6a8e8e1ae80c.png";
import imgFollowing from "./e6e43db6fc98e611e51de55669c2ba7b2bd31f6f.png";
import imgToday from "./9b26dffc715bfc60e0539b590373199088533d5e.png";
import imgProfile from "./3ef698d8e729338a77f0d6ef38930681b509b500.png";
import imgNextPage from "./b98abd07a2266036a6f03b72ca3f6f9422ae2a34.png";
import imgChevronRight from "./57c143d13283aa412ed45e6386c9761d58e249ec.png";
import imgBack from "./5db0687702c36b358fbe28945225f47e373f5a09.png";

function TextBase({ className }: { className?: string }) {
  return (
    <div className={className || "h-[68px] relative w-[180px]"} data-name="_Text Base">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Short Line">
          <div className="bg-[#999] flex-[1_0_0] h-[16px] min-w-px relative rounded-bl-[3px] rounded-tl-[3px]" data-name="Line" />
          <div className="bg-[#999] flex-[1_0_0] h-[16px] min-w-px relative rounded-br-[3px] rounded-tr-[3px]" data-name="Line" />
          <div className="flex-[1_0_0] h-[16px] min-w-px relative rounded-[3px]" data-name="Blank" />
        </div>
        <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
        <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
      </div>
    </div>
  );
}

function IconPlaceholder({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="icon-placeholder">
      <div className="absolute inset-[8.33%]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <g id="Shape">
            <path d={svgPaths.p1e77f00} fill="#2D3648" />
            <path d={svgPaths.p343bfec0} fill="#2D3648" />
            <path d={svgPaths.p1da93000} fill="#2D3648" />
            <path d={svgPaths.p22661b00} fill="#2D3648" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Notification({ className }: { className?: string }) {
  return (
    <div className={className || "relative"} data-name="Notification">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[15px] items-center px-[6px] py-[8px] relative size-full">
          <IconPlaceholder className="h-[32px] overflow-clip relative shrink-0 w-[34px]" />
          <TextBase className="h-[70px] relative shrink-0 w-[264px]" />
        </div>
      </div>
    </div>
  );
}
type WfToolbarProps = {
  className?: string;
  property1?: "Home" | "Profile";
};

function WfToolbar({ className, property1 = "Home" }: WfToolbarProps) {
  const isProfile = property1 === "Profile";
  return (
    <div className={className || "bg-white h-[80px] relative w-[375px]"}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start relative size-full">
          <div className="bg-[#1a202c] h-[2px] relative shrink-0 w-full" data-name="Divider" />
          <div className="relative shrink-0 w-full" data-name="Toolbar Items">
            <div className="content-stretch flex gap-[8px] items-start px-[8px] relative size-full">
              <div className={`bg-white flex-[1_0_0] h-[64px] min-w-px relative ${isProfile ? "opacity-40" : "opacity-80"}`} data-name="_Toolbar Item">
                <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Home
                </p>
                <div className={`absolute ${isProfile ? "h-[17px] left-[22px] top-[15px] w-[20px]" : "inset-[20.31%_35.78%_53.13%_33.64%]"}`} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 20 17" width="20">
                    <path d={isProfile ? svgPaths.p3395f100 : svgPaths.p36ed3400} fill="black" id="Vector" />
                  </svg>
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
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
              <div className={`bg-white flex-[1_0_0] h-[64px] min-w-px relative ${isProfile ? "" : "opacity-40"}`} data-name="_Toolbar Item">
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
type HeartProps = {
  className?: string;
  property1?: "state" | "hover" | "presdown" | "expand" | "final";
};

function Heart({ className, property1 = "state" }: HeartProps) {
  if (property1 === "hover") {
    return (
      <div className={className || "cursor-pointer relative w-[40px]"} data-name="Property 1=hover">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex items-center justify-center relative shrink-0 size-[38.836px]">
            <div className="-rotate-45 flex-none">
              <div className="h-[27.757px] relative w-[27.166px]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="27.7568" preserveAspectRatio="none" viewBox="0 0 27.166 27.7568" width="27.166">
                  <g id="Union">
                    <mask fill="white" id="path-1-inside-1_0_640">
                      <path d={svgPaths.p1a1ef700} />
                    </mask>
                    <path d={svgPaths.p15fcbb00} fill="#B1AFAF" mask="url(#path-1-inside-1_0_640)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (property1 === "presdown") {
    return (
      <div className={className || "cursor-pointer h-[37px] relative w-[34px]"} data-name="Property 1=presdown">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex items-center justify-center relative shrink-0 size-[36.431px]">
            <div className="-rotate-45 flex-none">
              <div className="h-[25.622px] relative w-[25.899px]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="25.6221" preserveAspectRatio="none" viewBox="0 0 25.8994 25.6221" width="25.8994">
                  <g id="Union">
                    <mask fill="white" id="path-1-inside-1_0_613">
                      <path d={svgPaths.p9ead2f0} />
                    </mask>
                    <path d={svgPaths.p361a18c0} fill="#D9D9D9" mask="url(#path-1-inside-1_0_613)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (property1 === "expand") {
    return (
      <div className={className || "relative w-[34px]"} data-name="Property 1=expand">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex items-center justify-center relative shrink-0 size-[33.836px]">
            <div className="-rotate-45 flex-none">
              <div className="h-[23.806px] relative w-[24.046px]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="23.8057" preserveAspectRatio="none" viewBox="0 0 24.0459 23.8057" width="24.0459">
                  <g id="Union">
                    <mask fill="white" id="path-1-inside-1_0_662">
                      <path d={svgPaths.p2be9b980} />
                    </mask>
                    <path d={svgPaths.p2be9b980} fill="#19010A" />
                    <path d={svgPaths.p3a7a04f9} fill="#19010A" mask="url(#path-1-inside-1_0_662)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (property1 === "final") {
    return (
      <button className={className || "cursor-pointer relative"} data-name="Property 1=final">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex items-center justify-center relative shrink-0 size-[35.181px]">
            <div className="-rotate-45 flex-none">
              <div className="relative size-[24.877px]" data-name="final">
                <div className="absolute inset-[-20.1%_-56.28%_-92.45%_-56.28%]">
                  <svg className="block size-full" fill="none" height="52.877" preserveAspectRatio="none" viewBox="0 0 52.877 52.877" width="52.877">
                    <g filter="url(#filter0_d_0_603)" id="final">
                      <mask fill="white" id="path-1-inside-1_0_603">
                        <path d={svgPaths.p2f562500} />
                      </mask>
                      <path d={svgPaths.p2f562500} fill="#19010A" />
                      <path d={svgPaths.p16200500} fill="#19010A" mask="url(#path-1-inside-1_0_603)" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="52.877" id="filter0_d_0_603" width="52.877" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="9" />
                        <feGaussianBlur stdDeviation="7" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.0166667 0 0 0 0 0.370667 0 0 0 0.5 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_603" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_603" mode="normal" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "opacity-40 relative size-[40px]"} data-name="Property 1=state">
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(50cqw,50cqh)] w-[hypot(50cqw,-50cqh)]">
          <div className="relative size-full" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="28.2842" preserveAspectRatio="none" viewBox="0 0 28.2842 28.2842" width="28.2842">
              <g id="Union">
                <mask fill="white" id="path-1-inside-1_0_606">
                  <path d={svgPaths.p2aa2ab80} />
                </mask>
                <path d={svgPaths.p35dcd280} fill="black" mask="url(#path-1-inside-1_0_606)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CcaCard({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#e0e0e0] h-[240px] relative rounded-[20px] w-[166px]"} data-name="CCA Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[9px] items-start pl-[9px] pr-[11px] py-[15px] relative size-full">
          <div className="flex-[1_0_0] min-h-px relative w-full" data-name="WF Image Placeholder">
            <div className="absolute bg-[#f2f2f2] inset-0 rounded-[10px]" data-name="WF Image Placeholder">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[40px] top-[calc(50%-1px)]" data-name="icon-image">
                  <div className="absolute inset-[8.33%]" data-name="Shape">
                    <svg className="absolute block inset-0 size-full" fill="none" height="33.3333" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333" width="33.3333">
                      <g id="Shape">
                        <path clipRule="evenodd" d={svgPaths.p2079f640} fill="#3A3A3A" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p3d0d59c0} fill="#3A3A3A" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div aria-hidden className="absolute border-2 border-[#3a3a3a] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="WF Text Placeholder">
            <div className="content-stretch flex flex-col gap-[8px] h-[78px] items-start relative shrink-0 w-full" data-name="_Text Base">
              <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
              <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Short Line">
                <div className="bg-[#c4c4c4] flex-[1_0_0] h-[16px] min-w-px relative rounded-bl-[3px] rounded-tl-[3px]" data-name="Line" />
                <div className="bg-[#c4c4c4] flex-[1_0_0] h-[16px] min-w-px relative rounded-br-[3px] rounded-tr-[3px]" data-name="Line" />
                <div className="flex-[1_0_0] h-[16px] min-w-px relative rounded-[3px]" data-name="Blank" />
                <Heart className="opacity-40 relative shrink-0 size-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WfTextPlaceholder({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[280px]"} data-name="WF Text Placeholder">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="relative shrink-0 w-full" data-name="_Text Base">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
            <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Short Line">
              <div className="bg-[#c4c4c4] flex-[1_0_0] h-[16px] min-w-px relative rounded-bl-[3px] rounded-tl-[3px]" data-name="Line" />
              <div className="bg-[#c4c4c4] flex-[1_0_0] h-[16px] min-w-px relative rounded-br-[3px] rounded-tr-[3px]" data-name="Line" />
              <div className="flex-[1_0_0] h-[16px] min-w-px relative rounded-[3px]" data-name="Blank" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroiconsMiniUserCircle({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[35px]"} data-name="heroicons-mini/user-circle">
      <div className="absolute inset-[10%]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
          <path d={svgPaths.pf6f3d00} fill="black" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

function ToolbarItem() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-80 relative" data-name="_Toolbar Item">
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#1f1f1f] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Home
      </p>
      <div className="absolute inset-[20.31%_35.78%_53.13%_33.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 20 17" width="20">
          <path d={svgPaths.p36ed3400} fill="black" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ToolbarItem1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Discover
      </p>
      <div className="absolute left-[20.6px] size-[24px] top-[11px]" data-name="Google Web Search">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgGoogleWebSearch} />
      </div>
    </div>
  );
}

function ToolbarItem2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <div className="absolute left-[21.2px] size-[24px] top-[11px]" data-name="Following">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFollowing} />
      </div>
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Wishlist
      </p>
    </div>
  );
}

function ToolbarItem3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <div className="absolute left-[20.8px] size-[24px] top-[11px]" data-name="Today">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgToday} />
      </div>
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Events
      </p>
    </div>
  );
}

function ToolbarItem4() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <div className="absolute left-[20.4px] size-[24px] top-[11px]" data-name="Profile">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgProfile} />
      </div>
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Profile
      </p>
    </div>
  );
}

function ToolbarItems() {
  return (
    <div className="relative shrink-0 w-full" data-name="Toolbar Items">
      <div className="content-stretch flex gap-[8px] items-start px-[8px] relative size-full">
        <ToolbarItem />
        <ToolbarItem1 />
        <ToolbarItem2 />
        <ToolbarItem3 />
        <ToolbarItem4 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[164px] left-[calc(83.33%-20px)] opacity-70 overflow-clip top-[374px] w-[55px]">
      <CcaCard className="absolute bg-[#e0e0e0] h-[164px] left-[-4px] rounded-[20px] top-[3px] w-[132px]" />
      <div className="absolute h-[54px] left-[24px] opacity-70 top-[60px] w-[27px]" data-name="Next Page">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgNextPage} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[53px] left-0 top-0 w-[358px]">
      <div className="absolute h-[53px] left-[-8px] top-0 w-[373px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="53" preserveAspectRatio="none" viewBox="0 0 373 53" width="373">
          <path d="M0 0H373V53H0V0Z" fill="#D9D9D9" id="Rectangle 46" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[0] left-0 text-[11px] text-black top-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[normal]">{`NUS DANCE BLAST ADDED TO `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">WISHLIST</span>
      </p>
      <p className="[text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[315px] text-[11px] text-black top-[20px] underline whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        UNDO
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[53px] left-[26px] top-[741px] w-[358px]">
      <Frame4 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[37.5%_21.35%_35.71%_21.35%]">
      <div className="absolute bg-[#fffdfd] inset-[37.5%_21.35%_35.71%_21.35%]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.86%_21.35%_41.07%_21.35%] leading-[normal] not-italic text-[16px] text-black text-center">Category</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[37.5%_21.35%_35.71%_21.35%]">
      <div className="absolute bg-[#fffdfd] inset-[37.5%_21.35%_35.71%_21.35%]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.86%_21.35%_41.07%_21.35%] leading-[normal] not-italic text-[16px] text-black text-center">Category</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[37.5%_21.35%_35.71%_21.35%]">
      <div className="absolute bg-[#fffdfd] inset-[37.5%_21.35%_35.71%_21.35%]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.86%_21.35%_41.07%_21.35%] leading-[normal] not-italic text-[16px] text-black text-center">Category</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[130px] left-[calc(66.67%+39px)] opacity-80 overflow-clip top-[602px] w-[68px]">
      <div className="absolute left-0 size-[130px] top-0" data-name="Category Card">
        <svg className="absolute block inset-0 size-full" fill="none" height="130" preserveAspectRatio="none" viewBox="0 0 130 130" width="130">
          <g id="Group 4">
            <rect fill="#E0E0E0" height="130" id="Rectangle 17" rx="20" width="130" />
            <line id="Line 1" stroke="black" transform="matrix(0.725787 0.68792 -0.351332 0.936251 3.65169 8.125)" x2="167.041" y1="-0.5" y2="-0.5" />
            <line id="Line 2" stroke="black" transform="matrix(0.718123 -0.695916 0.358207 0.933642 5.11236 124.196)" x2="166.789" y1="-0.5" y2="-0.5" />
          </g>
        </svg>
        <Group2 />
      </div>
      <div className="absolute h-[54px] left-[37px] opacity-70 top-[44px] w-[27px]" data-name="Next Page">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgNextPage} />
      </div>
    </div>
  );
}

function CodiconBellDot() {
  return (
    <div className="absolute left-[calc(83.33%-14px)] overflow-clip size-[47px] top-[34px]" data-name="codicon:bell-dot">
      <div className="absolute inset-[6.25%_6.25%_6.26%_12.5%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="41.1221" preserveAspectRatio="none" viewBox="0 0 38.1872 41.1221" width="38.1872">
          <path d={svgPaths.p2d5a0700} fill="#595959" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[6%_8%_60%_66%] leading-[normal] not-italic text-[16px] text-white">3</p>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="absolute bg-white h-[874px] left-[544px] overflow-clip top-[147px] w-[402px]" data-name="Home Screen">
      <div className="absolute bg-white h-[80px] left-[13px] top-[794px] w-[375px]" data-name="WF Toolbar">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start relative size-full">
            <div className="bg-[#1a202c] h-[2px] relative shrink-0 w-full" data-name="Divider" />
            <ToolbarItems />
          </div>
        </div>
      </div>
      <Frame2 />
      <CcaCard className="absolute bg-[#e0e0e0] h-[164px] left-[29px] rounded-[20px] top-[377px] w-[132px]" />
      <CcaCard className="absolute bg-[#e0e0e0] h-[164px] left-[calc(33.33%+38px)] rounded-[20px] top-[377px] w-[132px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[29px] not-italic text-[20px] text-black top-[340px] whitespace-nowrap">For You</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[32px] not-italic text-[20px] text-black top-[102px] whitespace-nowrap">Upcoming</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[36px] leading-[normal] left-[32px] not-italic text-[20px] text-black top-[46px] w-[386px]">{`Hello, <User>! `}</p>
      <div className="absolute bg-[#e0e0e0] h-[76px] left-[53px] rounded-[10px] top-[147px] w-[317px]" />
      <div className="absolute bg-[#c4c4c4] h-[52px] left-[65px] rounded-[10px] top-[159px] w-[55px]" />
      <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[35px] leading-[0] left-[calc(16.67%+11px)] not-italic text-[16px] text-black top-[169px] w-[42px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">Aug</p>
        <p className="leading-[normal]">{` 31`}</p>
      </div>
      <div className="absolute bg-[#e0e0e0] h-[76px] left-[53px] rounded-[10px] top-[234px] w-[317px]" />
      <div className="absolute bg-[#c4c4c4] h-[52px] left-[65px] rounded-[10px] top-[246px] w-[55px]" />
      <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[35px] leading-[0] left-[calc(16.67%+11px)] not-italic text-[16px] text-black top-[256px] w-[42px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">Sep</p>
        <p className="leading-[normal]">{`  4`}</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[164px] left-[32px] top-[146px] w-[6px]" />
      <div className="absolute bg-[#999] h-[44px] left-[32px] top-[146px] w-[6px]" />
      <WfTextPlaceholder className="absolute h-[39px] left-[33.33%] top-[166px] w-[213px]" />
      <WfTextPlaceholder className="absolute h-[40px] left-[33.33%] top-[253px] w-[213px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[38px] not-italic text-[20px] text-black top-[569px] whitespace-nowrap">Explore</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(66.67%+34px)] not-italic text-[16px] text-black top-[340px] tracking-[-0.16px] whitespace-nowrap">See all →</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(66.67%+39px)] not-italic text-[16px] text-black top-[102px] tracking-[-0.16px] whitespace-nowrap">See all →</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(66.67%+39px)] not-italic text-[16px] text-black top-[567px] tracking-[-0.16px] whitespace-nowrap">See all →</p>
      <Frame6 />
      <div className="absolute left-[33px] size-[130px] top-[602px]" data-name="Category Card">
        <svg className="absolute block inset-0 size-full" fill="none" height="130" preserveAspectRatio="none" viewBox="0 0 130 130" width="130">
          <g id="Group 4">
            <rect fill="#E0E0E0" height="130" id="Rectangle 17" rx="20" width="130" />
            <line id="Line 1" stroke="black" transform="matrix(0.725787 0.68792 -0.351332 0.936251 3.65169 8.125)" x2="167.041" y1="-0.5" y2="-0.5" />
            <line id="Line 2" stroke="black" transform="matrix(0.718123 -0.695916 0.358207 0.933642 5.11236 124.196)" x2="166.789" y1="-0.5" y2="-0.5" />
          </g>
        </svg>
        <Group />
      </div>
      <div className="absolute left-[calc(33.33%+36px)] size-[130px] top-[602px]" data-name="Category Card">
        <svg className="absolute block inset-0 size-full" fill="none" height="130" preserveAspectRatio="none" viewBox="0 0 130 130" width="130">
          <g id="Group 4">
            <rect fill="#E0E0E0" height="130" id="Rectangle 17" rx="20" width="130" />
            <line id="Line 1" stroke="black" transform="matrix(0.725787 0.68792 -0.351332 0.936251 3.65169 8.125)" x2="167.041" y1="-0.5" y2="-0.5" />
            <line id="Line 2" stroke="black" transform="matrix(0.718123 -0.695916 0.358207 0.933642 5.11236 124.196)" x2="166.789" y1="-0.5" y2="-0.5" />
          </g>
        </svg>
        <Group1 />
      </div>
      <Frame8 />
      <CodiconBellDot />
    </div>
  );
}

function ToolbarItem5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-80 relative" data-name="_Toolbar Item">
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#1f1f1f] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Home
      </p>
      <div className="absolute inset-[20.31%_35.78%_53.13%_33.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 20 17" width="20">
          <path d={svgPaths.p36ed3400} fill="black" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ToolbarItem6() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Discover
      </p>
      <div className="absolute left-[20.6px] size-[24px] top-[11px]" data-name="Google Web Search">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgGoogleWebSearch} />
      </div>
    </div>
  );
}

function ToolbarItem7() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <div className="absolute left-[21.2px] size-[24px] top-[11px]" data-name="Following">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFollowing} />
      </div>
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Wishlist
      </p>
    </div>
  );
}

function ToolbarItem8() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <div className="absolute left-[20.8px] size-[24px] top-[11px]" data-name="Today">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgToday} />
      </div>
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Events
      </p>
    </div>
  );
}

function ToolbarItem9() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <div className="absolute left-[20.4px] size-[24px] top-[11px]" data-name="Profile">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgProfile} />
      </div>
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Profile
      </p>
    </div>
  );
}

function ToolbarItems1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Toolbar Items">
      <div className="content-stretch flex gap-[8px] items-start px-[8px] relative size-full">
        <ToolbarItem5 />
        <ToolbarItem6 />
        <ToolbarItem7 />
        <ToolbarItem8 />
        <ToolbarItem9 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[164px] left-[calc(83.33%-20px)] opacity-70 overflow-clip top-[374px] w-[55px]">
      <CcaCard className="absolute bg-[#e0e0e0] h-[164px] left-[-4px] rounded-[20px] top-[3px] w-[132px]" />
      <div className="absolute h-[54px] left-[24px] opacity-70 top-[60px] w-[27px]" data-name="Next Page">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgNextPage} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[53px] left-0 top-0 w-[358px]">
      <div className="absolute h-[53px] left-[-8px] top-0 w-[373px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="53" preserveAspectRatio="none" viewBox="0 0 373 53" width="373">
          <path d="M0 0H373V53H0V0Z" fill="#D9D9D9" id="Rectangle 46" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[0] left-0 text-[11px] text-black top-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[normal]">{`NUS DANCE BLAST ADDED TO `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">WISHLIST</span>
      </p>
      <p className="[text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[315px] text-[11px] text-black top-[20px] underline whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        UNDO
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[53px] left-[26px] top-[741px] w-[358px]">
      <Frame5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[37.5%_21.35%_35.71%_21.35%]">
      <div className="absolute bg-[#fffdfd] inset-[37.5%_21.35%_35.71%_21.35%]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.86%_21.35%_41.07%_21.35%] leading-[normal] not-italic text-[16px] text-black text-center">Category</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[37.5%_21.35%_35.71%_21.35%]">
      <div className="absolute bg-[#fffdfd] inset-[37.5%_21.35%_35.71%_21.35%]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.86%_21.35%_41.07%_21.35%] leading-[normal] not-italic text-[16px] text-black text-center">Category</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[37.5%_21.35%_35.71%_21.35%]">
      <div className="absolute bg-[#fffdfd] inset-[37.5%_21.35%_35.71%_21.35%]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.86%_21.35%_41.07%_21.35%] leading-[normal] not-italic text-[16px] text-black text-center">Category</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[130px] left-[calc(66.67%+39px)] opacity-80 overflow-clip top-[602px] w-[68px]">
      <div className="absolute left-0 size-[130px] top-0" data-name="Category Card">
        <svg className="absolute block inset-0 size-full" fill="none" height="130" preserveAspectRatio="none" viewBox="0 0 130 130" width="130">
          <g id="Group 4">
            <rect fill="#E0E0E0" height="130" id="Rectangle 17" rx="20" width="130" />
            <line id="Line 1" stroke="black" transform="matrix(0.725787 0.68792 -0.351332 0.936251 3.65169 8.125)" x2="167.041" y1="-0.5" y2="-0.5" />
            <line id="Line 2" stroke="black" transform="matrix(0.718123 -0.695916 0.358207 0.933642 5.11236 124.196)" x2="166.789" y1="-0.5" y2="-0.5" />
          </g>
        </svg>
        <Group5 />
      </div>
      <div className="absolute h-[54px] left-[37px] opacity-70 top-[44px] w-[27px]" data-name="Next Page">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgNextPage} />
      </div>
    </div>
  );
}

function CodiconBellDot1() {
  return (
    <div className="absolute left-[calc(83.33%-14px)] overflow-clip size-[47px] top-[34px]" data-name="codicon:bell-dot">
      <div className="absolute inset-[6.25%_6.25%_6.26%_12.5%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="41.1221" preserveAspectRatio="none" viewBox="0 0 38.1872 41.1221" width="38.1872">
          <path d={svgPaths.p2d5a0700} fill="#595959" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[6%_8%_60%_66%] leading-[normal] not-italic text-[16px] text-white">3</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] absolute bg-white h-[192px] left-[50px] not-italic overflow-clip rounded-[20px] text-black top-[280px] w-[306px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[52px] text-[20px] top-[28px] whitespace-nowrap">Turn on Notifications</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[153px] text-[16px] text-center top-[60px] tracking-[-0.16px] w-[256px]">Don’t miss important updates like new CCA events and recruitment deadlines.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[217px] text-[16px] top-[157px] tracking-[-0.16px] w-[28px]">Ok</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[35px] text-[16px] top-[157px] tracking-[-0.16px] w-[85px]">Don’t allow</p>
    </div>
  );
}

function TurnOnNotifications() {
  return (
    <div className="absolute bg-white h-[874px] left-[958px] overflow-clip top-[147px] w-[402px]" data-name="Turn on Notifications">
      <div className="absolute bg-white h-[80px] left-[13px] top-[794px] w-[375px]" data-name="WF Toolbar">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start relative size-full">
            <div className="bg-[#1a202c] h-[2px] relative shrink-0 w-full" data-name="Divider" />
            <ToolbarItems1 />
          </div>
        </div>
      </div>
      <Frame3 />
      <CcaCard className="absolute bg-[#e0e0e0] h-[164px] left-[29px] rounded-[20px] top-[377px] w-[132px]" />
      <CcaCard className="absolute bg-[#e0e0e0] h-[164px] left-[calc(33.33%+38px)] rounded-[20px] top-[377px] w-[132px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[29px] not-italic text-[20px] text-black top-[340px] whitespace-nowrap">Recommended for you</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[32px] not-italic text-[20px] text-black top-[102px] whitespace-nowrap">Upcoming</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[36px] leading-[normal] left-[32px] not-italic text-[20px] text-black top-[46px] w-[386px]">{`Hello, <User>! `}</p>
      <div className="absolute bg-[#e0e0e0] h-[76px] left-[53px] rounded-[10px] top-[147px] w-[317px]" />
      <div className="absolute bg-[#c4c4c4] h-[52px] left-[65px] rounded-[10px] top-[159px] w-[55px]" />
      <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[35px] leading-[0] left-[calc(16.67%+11px)] not-italic text-[16px] text-black top-[169px] w-[42px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">Aug</p>
        <p className="leading-[normal]">{` 31`}</p>
      </div>
      <div className="absolute bg-[#e0e0e0] h-[76px] left-[53px] rounded-[10px] top-[234px] w-[317px]" />
      <div className="absolute bg-[#c4c4c4] h-[52px] left-[65px] rounded-[10px] top-[246px] w-[55px]" />
      <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[35px] leading-[0] left-[calc(16.67%+11px)] not-italic text-[16px] text-black top-[256px] w-[42px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">Sep</p>
        <p className="leading-[normal]">{`  4`}</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[164px] left-[32px] top-[146px] w-[6px]" />
      <div className="absolute bg-[#999] h-[44px] left-[32px] top-[146px] w-[6px]" />
      <WfTextPlaceholder className="absolute h-[39px] left-[33.33%] top-[166px] w-[213px]" />
      <WfTextPlaceholder className="absolute h-[40px] left-[33.33%] top-[253px] w-[213px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[38px] not-italic text-[20px] text-black top-[569px] whitespace-nowrap">Explore</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(66.67%+34px)] not-italic text-[16px] text-black top-[340px] tracking-[-0.16px] whitespace-nowrap">See all →</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(66.67%+39px)] not-italic text-[16px] text-black top-[102px] tracking-[-0.16px] whitespace-nowrap">See all →</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(66.67%+39px)] not-italic text-[16px] text-black top-[567px] tracking-[-0.16px] whitespace-nowrap">See all →</p>
      <Frame7 />
      <div className="absolute left-[33px] size-[130px] top-[602px]" data-name="Category Card">
        <svg className="absolute block inset-0 size-full" fill="none" height="130" preserveAspectRatio="none" viewBox="0 0 130 130" width="130">
          <g id="Group 4">
            <rect fill="#E0E0E0" height="130" id="Rectangle 17" rx="20" width="130" />
            <line id="Line 1" stroke="black" transform="matrix(0.725787 0.68792 -0.351332 0.936251 3.65169 8.125)" x2="167.041" y1="-0.5" y2="-0.5" />
            <line id="Line 2" stroke="black" transform="matrix(0.718123 -0.695916 0.358207 0.933642 5.11236 124.196)" x2="166.789" y1="-0.5" y2="-0.5" />
          </g>
        </svg>
        <Group3 />
      </div>
      <div className="absolute left-[calc(33.33%+36px)] size-[130px] top-[602px]" data-name="Category Card">
        <svg className="absolute block inset-0 size-full" fill="none" height="130" preserveAspectRatio="none" viewBox="0 0 130 130" width="130">
          <g id="Group 4">
            <rect fill="#E0E0E0" height="130" id="Rectangle 17" rx="20" width="130" />
            <line id="Line 1" stroke="black" transform="matrix(0.725787 0.68792 -0.351332 0.936251 3.65169 8.125)" x2="167.041" y1="-0.5" y2="-0.5" />
            <line id="Line 2" stroke="black" transform="matrix(0.718123 -0.695916 0.358207 0.933642 5.11236 124.196)" x2="166.789" y1="-0.5" y2="-0.5" />
          </g>
        </svg>
        <Group4 />
      </div>
      <Frame9 />
      <CodiconBellDot1 />
      <Frame10 />
      <div className="absolute h-0 left-[50px] top-[424px] w-[307px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 307 2" width="307">
            <path d="M0 1H153.5H307" id="Line 34" stroke="#C4C4C4" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[48px] items-center justify-center left-1/2 top-[424px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[48px]">
            <div className="absolute inset-[-1px_0]">
              <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 48 2" width="48">
                <path d="M0 1H24H48" id="Line 35" stroke="#C4C4C4" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#737373] left-1/2 rounded-[9999px] size-[16px] top-1/2" />;
}

function Frame1() {
  return (
    <div className="absolute left-0 size-[24px] top-0">
      <Frame />
    </div>
  );
}

function SettingItem() {
  return (
    <div className="h-[71px] relative shrink-0 w-full" data-name="setting item">
      <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
      <div className="absolute h-[24px] left-[270px] top-[25px] w-[40px]" data-name="_Toggle Base">
        <button className="absolute block cursor-pointer inset-0 rounded-[999px]" data-name="_Toggle Base">
          <div aria-hidden className="absolute border-2 border-[#737373] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <Frame1 />
        </button>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[35.21%_14.5%_14.08%_23.08%] leading-[normal] not-italic text-[20px] text-black">Dark Mode</p>
      <IconPlaceholder className="absolute inset-[35.21%_84.91%_30.99%_7.99%] overflow-clip" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-[30px] top-[297px] w-[339px]">
      <div className="h-[71px] relative shrink-0 w-full" data-name="setting item">
        <div className="absolute bg-[#e0e0e0] inset-0 rounded-[10px]" />
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[35.21%_14.5%_14.08%_23.08%] leading-[normal] not-italic text-[20px] text-black">Notifications</p>
        <IconPlaceholder className="absolute inset-[35.21%_84.91%_30.99%_7.99%] overflow-clip" />
        <div className="absolute inset-[28.17%_5.62%_29.58%_85.5%]" data-name="Chevron Right">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgChevronRight} />
        </div>
      </div>
      <SettingItem />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] h-[261px] items-start left-[30px] top-[513px] w-[338px]">
      <div className="h-[71px] relative shrink-0 w-full" data-name="setting item">
        <div className="absolute bg-[#e0e0e0] inset-0 rounded-[10px]" />
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[35.21%_14.5%_14.08%_23.08%] leading-[normal] not-italic text-[20px] text-black">About app</p>
        <IconPlaceholder className="absolute inset-[35.21%_84.91%_30.99%_7.99%] overflow-clip" />
        <div className="absolute inset-[28.17%_5.62%_29.58%_85.5%]" data-name="Chevron Right">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgChevronRight} />
        </div>
      </div>
      <div className="h-[71px] relative shrink-0 w-full" data-name="setting item">
        <div className="absolute bg-[#e0e0e0] inset-0 rounded-[10px]" />
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[35.21%_14.5%_14.08%_23.08%] leading-[normal] not-italic text-[20px] text-black">Deactivate account</p>
        <div className="absolute inset-[35.21%_84.91%_30.99%_7.99%] overflow-clip" data-name="icon-placeholder">
          <div className="absolute inset-[8.33%]" data-name="Shape">
            <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
              <g id="Shape">
                <path d={svgPaths.p1e77f00} fill="#2D3648" />
                <path d={svgPaths.p343bfec0} fill="#2D3648" />
                <path d={svgPaths.p1da93000} fill="#2D3648" />
                <path d={svgPaths.p22661b00} fill="#2D3648" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[28.17%_5.62%_29.58%_85.5%]" data-name="Chevron Right">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgChevronRight} />
        </div>
      </div>
      <div className="h-[71px] relative shrink-0 w-[338px]" data-name="setting item">
        <div className="absolute bg-[#e0e0e0] inset-0 rounded-[10px]" />
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[35.21%_14.5%_14.08%_23.08%] leading-[normal] not-italic text-[20px] text-black">Help/FAQ</p>
        <IconPlaceholder className="absolute inset-[35.21%_84.91%_30.99%_7.99%] overflow-clip" />
        <div className="absolute inset-[28.17%_5.62%_29.58%_85.5%]" data-name="Chevron Right">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgChevronRight} />
        </div>
      </div>
    </div>
  );
}

function ManageAccount() {
  return (
    <div className="absolute bg-white h-[874px] left-[2390px] overflow-clip top-[147px] w-[402px]" data-name="Manage Account">
      <WfToolbar className="absolute bg-white h-[80px] left-[13px] top-[794px] w-[375px]" property1="Profile" />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[31px] not-italic text-[20px] text-black top-[257px] whitespace-nowrap">Other settings</p>
      <div className="absolute h-[71px] left-[32px] top-[145px] w-[338px]" data-name="setting item">
        <div className="absolute bg-[#e0e0e0] inset-0 rounded-[10px]" />
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[35.21%_14.5%_14.08%_23.08%] leading-[normal] not-italic text-[20px] text-black">Username</p>
        <div className="absolute inset-[28.17%_5.62%_29.58%_85.5%]" data-name="Chevron Right" />
      </div>
      <HeroiconsMiniUserCircle className="absolute left-[47px] overflow-clip size-[50px] top-[155px]" />
      <div className="absolute inset-[36.5%_12.94%_60.07%_79.6%]" data-name="Chevron Right">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgChevronRight} />
      </div>
      <div className="absolute inset-[18.88%_13.18%_77.69%_79.35%]" data-name="Chevron Right">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgChevronRight} />
      </div>
      <Frame12 />
      <Frame11 />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(16.67%+35px)] not-italic text-[24px] text-black top-[68px] whitespace-nowrap">Manage Account</p>
      <div className="absolute left-[23px] size-[40px] top-[62px]" data-name="Back">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBack} />
      </div>
    </div>
  );
}

function ToolbarItem10() {
  return (
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
  );
}

function ToolbarItem11() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Discover
      </p>
      <div className="absolute left-[20.6px] size-[24px] top-[11px]" data-name="Google Web Search">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgGoogleWebSearch} />
      </div>
    </div>
  );
}

function ToolbarItem12() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <div className="absolute left-[21.2px] size-[24px] top-[11px]" data-name="Following">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFollowing} />
      </div>
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Wishlist
      </p>
    </div>
  );
}

function ToolbarItem13() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <div className="absolute left-[20.8px] size-[24px] top-[11px]" data-name="Today">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgToday} />
      </div>
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Events
      </p>
    </div>
  );
}

function ToolbarItem14() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px relative" data-name="_Toolbar Item">
      <div className="absolute left-[20.4px] size-[24px] top-[11px]" data-name="Profile">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgProfile} />
      </div>
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Profile
      </p>
    </div>
  );
}

function ToolbarItems2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Toolbar Items">
      <div className="content-stretch flex gap-[8px] items-start px-[8px] relative size-full">
        <ToolbarItem10 />
        <ToolbarItem11 />
        <ToolbarItem12 />
        <ToolbarItem13 />
        <ToolbarItem14 />
      </div>
    </div>
  );
}

function ShortLine() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Short Line">
      <div className="bg-[#999] flex-[1_0_0] h-[16px] min-w-px relative rounded-bl-[3px] rounded-tl-[3px]" data-name="Line" />
      <div className="bg-[#999] flex-[1_0_0] h-[16px] min-w-px relative rounded-br-[3px] rounded-tr-[3px]" data-name="Line" />
      <div className="flex-[1_0_0] h-[16px] min-w-px relative rounded-[3px]" data-name="Blank" />
    </div>
  );
}

function ShortLine1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Short Line">
      <div className="bg-[#999] flex-[1_0_0] h-[16px] min-w-px relative rounded-bl-[3px] rounded-tl-[3px]" data-name="Line" />
      <div className="bg-[#999] flex-[1_0_0] h-[16px] min-w-px relative rounded-br-[3px] rounded-tr-[3px]" data-name="Line" />
      <div className="flex-[1_0_0] h-[16px] min-w-px relative rounded-[3px]" data-name="Blank" />
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute bg-white h-[874px] left-[1954px] overflow-clip top-[147px] w-[402px]" data-name="Profile">
      <div className="absolute bg-white h-[80px] left-[13px] top-[794px] w-[375px]" data-name="WF Toolbar">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start relative size-full">
            <div className="bg-[#1a202c] h-[2px] relative shrink-0 w-full" data-name="Divider" />
            <ToolbarItems2 />
          </div>
        </div>
      </div>
      <HeroiconsMiniUserCircle className="absolute left-[calc(33.33%+11px)] overflow-clip size-[100px] top-[76px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(33.33%+1px)] not-italic text-[24px] text-black top-[194px] whitespace-nowrap">Username</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[26px] not-italic text-[24px] text-black top-[492px] w-[303px]">CCA Memberships</p>
      <div className="absolute bg-[#d9d9d9] h-[133px] left-[30px] top-[532px] w-[6px]" />
      <div className="absolute bg-[#999] h-[44px] left-[30px] top-[532px] w-[6px]" />
      <div className="absolute left-[46px] top-[546px] w-[319px]" data-name="_Text Base">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <ShortLine />
          <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
        </div>
      </div>
      <div className="absolute left-[46px] top-[610px] w-[319px]" data-name="_Text Base">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <ShortLine1 />
          <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(16.67%+128px)] not-italic text-[20px] text-black text-center top-[293px] tracking-[-0.2px] whitespace-nowrap">{`Manage account >`}</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[155px] not-italic text-[20px] text-black text-center top-[445px] tracking-[-0.2px] whitespace-nowrap">{`Refine your preferences >`}</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(16.67%+127.5px)] not-italic text-[20px] text-black text-center top-[241px] tracking-[-0.2px] whitespace-nowrap">XXX@u.nus.edu</p>
      <div className="absolute h-[58px] left-[29px] top-[702px] w-[338px]" data-name="WF Button">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex-[1_0_52px] h-full min-w-px relative rounded-[6px]" data-name="WF Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#2d3648] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Log Out
                </p>
              </div>
            </div>
            <div aria-hidden className="absolute border-2 border-[#2d3648] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[35px] not-italic text-[24px] text-black top-[348px] w-[303px]">Your preferences</p>
      <WfTextPlaceholder className="absolute left-[33px] top-[394px] w-[341px]" />
    </div>
  );
}

function ForYou() {
  return (
    <div className="absolute bg-white h-[874px] left-[1372px] overflow-clip top-[147px] w-[402px]" data-name="For You">
      <CcaCard className="absolute bg-[#e0e0e0] h-[240px] left-[29px] rounded-[20px] top-[71px] w-[166px]" />
      <CcaCard className="absolute bg-[#e0e0e0] h-[240px] left-[206px] rounded-[20px] top-[71px] w-[166px]" />
      <CcaCard className="absolute bg-[#e0e0e0] h-[240px] left-[30px] rounded-[20px] top-[317px] w-[166px]" />
      <CcaCard className="absolute bg-[#e0e0e0] h-[240px] left-[206px] rounded-[20px] top-[317px] w-[166px]" />
      <CcaCard className="absolute bg-[#e0e0e0] h-[240px] left-[30px] rounded-[20px] top-[563px] w-[166px]" />
      <CcaCard className="absolute bg-[#e0e0e0] h-[240px] left-[206px] rounded-[20px] top-[563px] w-[166px]" />
      <WfToolbar className="absolute bg-white h-[80px] left-[13px] top-[798px] w-[375px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[163px] not-italic text-[24px] text-black top-[27px] whitespace-nowrap">For You</p>
      <div className="absolute left-[21px] size-[40px] top-[21px]" data-name="Back">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBack} />
      </div>
    </div>
  );
}

function ToolbarItem15() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-80 relative" data-name="_Toolbar Item">
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#1f1f1f] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Home
      </p>
      <div className="absolute inset-[20.31%_35.78%_53.13%_33.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 20 17" width="20">
          <path d={svgPaths.p36ed3400} fill="black" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ToolbarItem16() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Discover
      </p>
      <div className="absolute left-[20.6px] size-[24px] top-[11px]" data-name="Google Web Search">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgGoogleWebSearch} />
      </div>
    </div>
  );
}

function ToolbarItem17() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <div className="absolute left-[21.2px] size-[24px] top-[11px]" data-name="Following">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFollowing} />
      </div>
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Wishlist
      </p>
    </div>
  );
}

function ToolbarItem18() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <div className="absolute left-[20.8px] size-[24px] top-[11px]" data-name="Today">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgToday} />
      </div>
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Events
      </p>
    </div>
  );
}

function ToolbarItem19() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-40 relative" data-name="_Toolbar Item">
      <div className="absolute left-[20.4px] size-[24px] top-[11px]" data-name="Profile">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgProfile} />
      </div>
      <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
        Profile
      </p>
    </div>
  );
}

function ToolbarItems3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Toolbar Items">
      <div className="content-stretch flex gap-[8px] items-start px-[8px] relative size-full">
        <ToolbarItem15 />
        <ToolbarItem16 />
        <ToolbarItem17 />
        <ToolbarItem18 />
        <ToolbarItem19 />
      </div>
    </div>
  );
}

function Notifications() {
  return (
    <div className="absolute bg-white h-[874px] left-[120px] overflow-clip top-[147px] w-[402px]" data-name="Notifications">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[127px] not-italic text-[24px] text-black top-[27px] whitespace-nowrap">Notifications</p>
      <button className="absolute block cursor-pointer left-[21px] size-[40px] top-[21px]" data-name="Back">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBack} />
      </button>
      <Notification className="absolute left-[35px] top-[136px]" />
      <Notification className="absolute left-[35px] top-[254px]" />
      <Notification className="absolute left-[35px] top-[365px]" />
      <div className="absolute bg-white h-[80px] left-[14px] top-[794px] w-[375px]" data-name="WF Toolbar">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start relative size-full">
            <div className="bg-[#1a202c] h-[2px] relative shrink-0 w-full" data-name="Divider" />
            <ToolbarItems3 />
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-px top-[115px] w-[402.005px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 402.005 2" width="402.005">
            <line id="Line 32" stroke="#C4C4C4" strokeWidth="2" x2="402.005" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[21px] top-[115px] w-[106px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 106 2" width="106">
            <line id="Line 33" stroke="#3A3A3A" strokeWidth="2" x2="106" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[63.5px] not-italic text-[18px] text-black text-center top-[93.5px] tracking-[0.36px] whitespace-nowrap">
        <p className="leading-[25px]">Updates</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[193.5px] not-italic text-[18px] text-[rgba(60,60,67,0.6)] text-center top-[93.5px] tracking-[0.36px] whitespace-nowrap">
        <p className="leading-[25px]">Messages</p>
      </div>
      <div className="absolute left-[108px] size-[19px] top-[86px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
          <circle cx="9.5" cy="9.5" fill="#737373" id="Ellipse 2" r="9.5" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[117.5px] not-italic text-[14px] text-center text-white top-[95.5px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[25px]">3</p>
      </div>
    </div>
  );
}

export default function Frame13() {
  return (
    <div className="bg-white relative size-full">
      <HomeScreen />
      <TurnOnNotifications />
      <ManageAccount />
      <Profile />
      <ForYou />
      <Notifications />
    </div>
  );
}