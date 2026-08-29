import svgPaths from "./svg-h0q35c0gsl";
import imgGoogleWebSearch from "./e2fda1aeba59b7fbd12df402f54d6a8e8e1ae80c.png";
import imgFollowing from "./e6e43db6fc98e611e51de55669c2ba7b2bd31f6f.png";
import imgToday from "./9b26dffc715bfc60e0539b590373199088533d5e.png";
import imgProfile from "./3ef698d8e729338a77f0d6ef38930681b509b500.png";
import imgBack from "./5db0687702c36b358fbe28945225f47e373f5a09.png";
type WfToolbarProps = {
  className?: string;
  property1?: "Home";
};

function WfToolbar({ className, property1 = "Home" }: WfToolbarProps) {
  return (
    <div className={className || "bg-white h-[80px] relative w-[375px]"}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start relative size-full">
          <div className="bg-[#1a202c] h-[2px] relative shrink-0 w-full" data-name="Divider" />
          <div className="relative shrink-0 w-full" data-name="Toolbar Items">
            <div className="content-stretch flex gap-[8px] items-start px-[8px] relative size-full">
              <div className="bg-white flex-[1_0_0] h-[64px] min-w-px opacity-80 relative" data-name="_Toolbar Item">
                <p className="[word-break:break-word] absolute bottom-[21px] font-['Inter:Medium',sans-serif] font-medium leading-none left-0 not-italic right-[0.4px] text-[#2d3648] text-[12px] text-center tracking-[-0.12px] translate-y-full" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Home
                </p>
                <div className="absolute inset-[20.31%_35.78%_53.13%_33.64%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 20 17" width="20">
                    <path d={svgPaths.p36ed3400} fill="black" id="Vector" />
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
                    <mask fill="white" id="path-1-inside-1_0_174">
                      <path d={svgPaths.p1a1ef700} />
                    </mask>
                    <path d={svgPaths.p15fcbb00} fill="#B1AFAF" mask="url(#path-1-inside-1_0_174)" />
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
                    <mask fill="white" id="path-1-inside-1_0_184">
                      <path d={svgPaths.p9ead2f0} />
                    </mask>
                    <path d={svgPaths.p361a18c0} fill="#D9D9D9" mask="url(#path-1-inside-1_0_184)" />
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
                    <mask fill="white" id="path-1-inside-1_0_170">
                      <path d={svgPaths.p2be9b980} />
                    </mask>
                    <path d={svgPaths.p2be9b980} fill="#19010A" />
                    <path d={svgPaths.p3a7a04f9} fill="#19010A" mask="url(#path-1-inside-1_0_170)" />
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
                    <g filter="url(#filter0_d_0_160)" id="final">
                      <mask fill="white" id="path-1-inside-1_0_160">
                        <path d={svgPaths.p2f562500} />
                      </mask>
                      <path d={svgPaths.p2f562500} fill="#19010A" />
                      <path d={svgPaths.p16200500} fill="#19010A" mask="url(#path-1-inside-1_0_160)" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="52.877" id="filter0_d_0_160" width="52.877" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="9" />
                        <feGaussianBlur stdDeviation="7" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.0166667 0 0 0 0 0.370667 0 0 0 0.5 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_160" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_160" mode="normal" result="shape" />
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
                <mask fill="white" id="path-1-inside-1_0_164">
                  <path d={svgPaths.p2aa2ab80} />
                </mask>
                <path d={svgPaths.p35dcd280} fill="black" mask="url(#path-1-inside-1_0_164)" />
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

export default function ForYou() {
  return (
    <div className="bg-white relative size-full" data-name="For You">
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