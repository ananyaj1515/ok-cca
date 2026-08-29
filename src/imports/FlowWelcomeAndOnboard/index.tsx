import svgPaths from "./svg-eylzkta54j";
import imgGoogleWebSearch from "./e2fda1aeba59b7fbd12df402f54d6a8e8e1ae80c.png";
import imgFollowing from "./e6e43db6fc98e611e51de55669c2ba7b2bd31f6f.png";
import imgToday from "./9b26dffc715bfc60e0539b590373199088533d5e.png";
import imgProfile from "./3ef698d8e729338a77f0d6ef38930681b509b500.png";
import imgMultiply from "./d2bb6bb4f66c19972255f8638f85d5926ba8035b.png";
import imgSearch from "./a23546083f8167000b25bb4b90c3821f2b1bf1a6.png";
import imgBack from "./5db0687702c36b358fbe28945225f47e373f5a09.png";
import imgFlashOn from "./fcf8c86a84b2a19d3f030b15b81f1cfb0a48138d.png";
import imgFire from "./5e7dd1907f8677660224a5cc413fab5fbf1ba689.png";
import imgSprout from "./73ffed4e2d00f37e0dd8ad44ae00880733dace38.png";
import imgLightOn from "./b4caf9fda1b91cb50903cfb063f47360a0005bd4.png";
import imgNextPage from "./b98abd07a2266036a6f03b72ca3f6f9422ae2a34.png";
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
                    <mask fill="white" id="path-1-inside-1_0_489">
                      <path d={svgPaths.p1a1ef700} />
                    </mask>
                    <path d={svgPaths.p15fcbb00} fill="#B1AFAF" mask="url(#path-1-inside-1_0_489)" />
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
                    <mask fill="white" id="path-1-inside-1_0_531">
                      <path d={svgPaths.p9ead2f0} />
                    </mask>
                    <path d={svgPaths.p361a18c0} fill="#D9D9D9" mask="url(#path-1-inside-1_0_531)" />
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
                    <mask fill="white" id="path-1-inside-1_0_514">
                      <path d={svgPaths.p2be9b980} />
                    </mask>
                    <path d={svgPaths.p2be9b980} fill="#FF045F" />
                    <path d={svgPaths.p3a7a04f9} fill="#FF045F" mask="url(#path-1-inside-1_0_514)" />
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
                    <g filter="url(#filter0_d_0_486)" id="final">
                      <mask fill="white" id="path-1-inside-1_0_486">
                        <path d={svgPaths.p2f562500} />
                      </mask>
                      <path d={svgPaths.p2f562500} fill="#FF045F" />
                      <path d={svgPaths.p16200500} fill="#FF045F" mask="url(#path-1-inside-1_0_486)" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="52.877" id="filter0_d_0_486" width="52.877" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="9" />
                        <feGaussianBlur stdDeviation="7" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.0166667 0 0 0 0 0.370667 0 0 0 0.5 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_486" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_486" mode="normal" result="shape" />
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
                <mask fill="white" id="path-1-inside-1_0_492">
                  <path d={svgPaths.p2aa2ab80} />
                </mask>
                <path d={svgPaths.p35dcd280} fill="black" mask="url(#path-1-inside-1_0_492)" />
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

function EventElipsis({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[13.997px]"} data-name="Event Elipsis">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" height="2.3328" preserveAspectRatio="none" viewBox="0 0 2.3328 2.3328" width="2.3328">
            <path d={svgPaths.p3d8bb700} id="Vector" stroke="#777777" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1664" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" height="2.3328" preserveAspectRatio="none" viewBox="0 0 2.3328 2.3328" width="2.3328">
            <path d={svgPaths.p3d8bb700} id="Vector" stroke="#777777" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1664" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" height="2.3328" preserveAspectRatio="none" viewBox="0 0 2.3328 2.3328" width="2.3328">
            <path d={svgPaths.p3d8bb700} id="Vector" stroke="#777777" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1664" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MessageDots({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="message-dots">
      <div className="absolute inset-[16.67%_12.5%_16.09%_12.5%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="16.1383" preserveAspectRatio="none" viewBox="0 0 18 16.1383" width="18">
          <path clipRule="evenodd" d={svgPaths.p2557fc0} fill="#101828" fillRule="evenodd" id="Vector" />
        </svg>
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

function Welcome() {
  return (
    <div className="absolute bg-white h-[874px] left-[154px] overflow-clip top-[253px] w-[402px]" data-name="Welcome">
      <div className="absolute bg-[#f2f2f2] h-[376px] left-[31px] top-[224px] w-[340px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+132.5px)] not-italic text-[24px] text-black text-center top-[252px] w-[239px]">Discover CCAs that suit you</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+58px)] not-italic text-[48px] text-black top-[154px] whitespace-nowrap">ok!cca</p>
      <div className="absolute h-[58px] left-[31px] top-[661px] w-[338px]" data-name="WF Button">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex-[1_0_52px] h-full min-w-px relative rounded-[6px]" data-name="WF Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#2d3648] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Get Started →
                </p>
              </div>
            </div>
            <div aria-hidden className="absolute border-2 border-[#2d3648] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#999] h-[5px] left-[calc(33.33%+17px)] top-[618px] w-[30px]" />
      <div className="absolute bg-[#c4c4c4] h-[5px] left-[calc(33.33%+52px)] top-[618px] w-[30px]" />
      <div className="absolute bg-[#c4c4c4] h-[5px] left-[calc(50%+20px)] top-[618px] w-[30px]" />
      <CcaCard className="absolute bg-[#e0e0e0] h-[216px] left-[47px] rounded-[20px] top-[328px] w-[150px]" />
      <CcaCard className="absolute bg-[#e0e0e0] h-[216px] left-[calc(50%+6px)] rounded-[20px] top-[328px] w-[150px]" />
    </div>
  );
}

function Review() {
  return (
    <div className="absolute contents left-[65px] top-[341px]" data-name="review 1">
      <div className="absolute bg-[#d9d9d9] h-[90px] left-[65px] rounded-[20px] top-[341px] w-[267px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] h-[16.875px] justify-center leading-[0] left-[calc(16.67%+33px)] not-italic text-[12px] text-black top-[351.69px] tracking-[0.24px] w-[130px]">
        <p className="leading-[25px]">campusotter66</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] h-[16.875px] justify-center leading-[0] left-[calc(16.67%+33px)] not-italic text-[#999] text-[10px] top-[365.19px] tracking-[0.2px] w-[169px]">
        <p className="leading-[25px]">AY25/26 Member</p>
      </div>
      <div className="absolute h-0 left-[65px] top-[373.79px] w-[267px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 267 1" width="267">
            <line id="Line 7" stroke="#727272" x2="267" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <HeroiconsMiniUserCircle className="absolute h-[24.419px] left-[70.05px] overflow-clip top-[345.19px] w-[25.257px]" />
      <div className="absolute flex items-center justify-center left-[calc(66.67%+22.25px)] size-[12.772px] top-[413.45px]">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[12.772px]" data-name="thumbs up">
            <div className="absolute inset-[8.33%_8.33%_8.33%_9.66%]" data-name="Icon">
              <div className="absolute inset-[-11.74%_-11.93%]">
                <svg className="block size-full" fill="none" height="13.1434" preserveAspectRatio="none" viewBox="0 0 12.9743 13.1434" width="12.9743">
                  <path d={svgPaths.p176e6cc0} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[calc(83.33%-23.82px)] overflow-clip size-[12.772px] top-[413.45px]" data-name="Thumbs down">
        <div className="absolute inset-[8.33%_8.33%_8.33%_9.66%]" data-name="Icon">
          <div className="absolute inset-[-11.74%_-11.93%]">
            <svg className="block size-full" fill="none" height="13.1434" preserveAspectRatio="none" viewBox="0 0 12.9743 13.1434" width="12.9743">
              <path d={svgPaths.p176e6cc0} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] h-[17.442px] justify-center leading-[0] left-[calc(66.67%+14.93px)] not-italic text-[10px] text-black text-right top-[420.19px] tracking-[0.2px] w-[18.762px]">
        <p className="leading-[25px]">+18</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] h-[17.442px] justify-center leading-[0] left-[calc(50%+29.97px)] not-italic text-[10px] text-black text-right top-[420.19px] tracking-[0.2px] w-[7.938px]">
        <p className="leading-[25px]">3</p>
      </div>
      <div className="absolute flex h-[11.86px] items-center justify-center left-[calc(66.67%+38.74px)] top-[414.26px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[11.86px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 11.8605 1" width="11.8605">
                <line id="Line 18" stroke="black" x2="11.8605" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[11.86px] items-center justify-center left-[calc(66.67%-8.16px)] top-[414.26px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[11.86px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 11.8605 1" width="11.8605">
                <line id="Line 18" stroke="black" x2="11.8605" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[11.86px] items-center justify-center left-[calc(66.67%-11.77px)] top-[414.26px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[11.86px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 11.8605 1" width="11.8605">
                <line id="Line 18" stroke="black" x2="11.8605" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <MessageDots className="absolute left-[calc(50%+34.45px)] size-[17.029px] top-[412.02px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[65px] top-[341px]">
      <Review />
    </div>
  );
}

function Review1() {
  return (
    <div className="absolute contents left-[70px] top-[443px]" data-name="review 2">
      <div className="absolute bg-[#d9d9d9] h-[90px] left-[70px] rounded-[20px] top-[443px] w-[267px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] h-[16.875px] justify-center leading-[0] left-[calc(16.67%+38px)] not-italic text-[12px] text-black top-[453.69px] tracking-[0.24px] w-[130px]">
        <p className="leading-[25px]">campuscat81</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] h-[28.125px] justify-center leading-[0] left-[calc(16.67%+38px)] not-italic text-[#999] text-[10px] top-[467.19px] tracking-[0.2px] w-[169px]">
        <p className="leading-[25px]">AY24/25 Member</p>
      </div>
      <div className="absolute h-0 left-[70px] top-[475.79px] w-[267px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 267 1" width="267">
            <line id="Line 7" stroke="#727272" x2="267" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <HeroiconsMiniUserCircle className="absolute h-[24.419px] left-[calc(16.67%+8.05px)] overflow-clip top-[447.19px] w-[25.257px]" />
      <div className="absolute flex items-center justify-center left-[calc(66.67%+27.25px)] size-[12.772px] top-[515.45px]">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[12.772px]" data-name="thumbs up">
            <div className="absolute inset-[8.33%_8.33%_8.33%_9.66%]" data-name="Icon">
              <div className="absolute inset-[-11.74%_-11.93%]">
                <svg className="block size-full" fill="none" height="13.1434" preserveAspectRatio="none" viewBox="0 0 12.9743 13.1434" width="12.9743">
                  <path d={svgPaths.p176e6cc0} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[calc(83.33%-18.82px)] overflow-clip size-[12.772px] top-[515.45px]" data-name="Thumbs down">
        <div className="absolute inset-[8.33%_8.33%_8.33%_9.66%]" data-name="Icon">
          <div className="absolute inset-[-11.74%_-11.93%]">
            <svg className="block size-full" fill="none" height="13.1434" preserveAspectRatio="none" viewBox="0 0 12.9743 13.1434" width="12.9743">
              <path d={svgPaths.p176e6cc0} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] h-[17.442px] justify-center leading-[0] left-[calc(66.67%+19.93px)] not-italic text-[10px] text-black text-right top-[522.19px] tracking-[0.2px] w-[18.762px]">
        <p className="leading-[25px]">+12</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] h-[17.442px] justify-center leading-[0] left-[calc(50%+34.97px)] not-italic text-[10px] text-black text-right top-[522.19px] tracking-[0.2px] w-[7.938px]">
        <p className="leading-[25px]">2</p>
      </div>
      <div className="absolute flex h-[11.86px] items-center justify-center left-[calc(83.33%-23.26px)] top-[516.26px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[11.86px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 11.8605 1" width="11.8605">
                <line id="Line 18" stroke="black" x2="11.8605" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[11.86px] items-center justify-center left-[calc(66.67%-3.16px)] top-[516.26px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[11.86px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 11.8605 1" width="11.8605">
                <line id="Line 18" stroke="black" x2="11.8605" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[11.86px] items-center justify-center left-[calc(66.67%-6.77px)] top-[516.26px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[11.86px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 11.8605 1" width="11.8605">
                <line id="Line 18" stroke="black" x2="11.8605" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <MessageDots className="absolute left-[calc(50%+39.45px)] size-[17.029px] top-[514.02px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[70px] top-[443px]">
      <Review1 />
    </div>
  );
}

function ShortLine() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Short Line">
      <div className="bg-[#c4c4c4] flex-[1_0_0] h-[16px] min-w-px relative rounded-bl-[3px] rounded-tl-[3px]" data-name="Line" />
      <div className="flex-[1_0_0] h-[16px] min-w-px relative rounded-[3px]" data-name="Blank" />
    </div>
  );
}

function ShortLine1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Short Line">
      <div className="bg-[#c4c4c4] flex-[1_0_0] h-[16px] min-w-px relative rounded-bl-[3px] rounded-tl-[3px]" data-name="Line" />
      <div className="flex-[1_0_0] h-[16px] min-w-px relative rounded-[3px]" data-name="Blank" />
    </div>
  );
}

function ShortLine2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Short Line">
      <div className="bg-[#c4c4c4] flex-[1_0_0] h-[16px] min-w-px relative rounded-bl-[3px] rounded-tl-[3px]" data-name="Line" />
      <div className="flex-[1_0_0] h-[16px] min-w-px relative rounded-[3px]" data-name="Blank" />
    </div>
  );
}

function Welcome1() {
  return (
    <div className="absolute bg-white h-[874px] left-[656px] overflow-clip top-[253px] w-[402px]" data-name="Welcome - 2">
      <div className="absolute bg-[#f2f2f2] h-[376px] left-[28px] top-[225px] w-[340px]" />
      <Group3 />
      <Group4 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+132.5px)] not-italic text-[24px] text-black text-center top-[252px] w-[239px]">See what other students say</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+58px)] not-italic text-[48px] text-black top-[154px] whitespace-nowrap">ok!cca</p>
      <div className="absolute h-[58px] left-[31px] top-[661px] w-[338px]" data-name="WF Button">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex-[1_0_52px] h-full min-w-px relative rounded-[6px]" data-name="WF Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#2d3648] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Get Started →
                </p>
              </div>
            </div>
            <div aria-hidden className="absolute border-2 border-[#2d3648] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#c4c4c4] h-[5px] left-[calc(33.33%+17px)] top-[618px] w-[30px]" />
      <div className="absolute bg-[#999] h-[5px] left-[calc(33.33%+52px)] top-[618px] w-[30px]" />
      <div className="absolute bg-[#c4c4c4] h-[5px] left-[calc(50%+20px)] top-[618px] w-[30px]" />
      <div className="absolute left-[calc(16.67%+9px)] top-[380px] w-[251px]" data-name="_Text Base">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
          <ShortLine />
        </div>
      </div>
      <div className="absolute left-[calc(16.67%+9px)] top-[380px] w-[251px]" data-name="_Text Base">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
          <ShortLine1 />
        </div>
      </div>
      <div className="absolute left-[calc(16.67%+11px)] top-[483px] w-[251px]" data-name="_Text Base">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
          <ShortLine2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#b0b0b0] h-[8.991px] relative rounded-[6px] shrink-0 w-[75.991px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <EventElipsis className="overflow-clip relative shrink-0 size-[13.997px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[25px] relative shrink-0 w-[29.996px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24.9999" preserveAspectRatio="none" viewBox="0 0 29.9959 24.9999" width="29.9959">
        <g clipPath="url(#clip0_0_537)" id="Icon">
          <path d={svgPaths.p27b28400} id="Vector" stroke="#888888" strokeWidth="1.49979" />
          <path d={svgPaths.p1e6d1f80} id="Vector_2" stroke="#888888" strokeWidth="1.49979" />
          <path d={svgPaths.p1616ff00} id="Vector_3" stroke="#888888" strokeLinejoin="round" strokeWidth="1.49979" />
        </g>
        <defs>
          <clipPath id="clip0_0_537">
            <rect fill="white" height="24.9999" width="29.9959" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#ebebeb] border-[#666] border-[1.256px] border-solid content-stretch flex h-[69px] items-center justify-center relative rounded-[14px] shrink-0 w-[76px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container7() {
  return <div className="bg-[#555] h-[11px] relative rounded-[6px] shrink-0 w-[84px]" data-name="Container" />;
}

function Container9() {
  return <div className="bg-[#c8c8c8] h-[9px] relative rounded-[6px] shrink-0 w-full" data-name="Container" />;
}

function Container10() {
  return <div className="bg-[#c8c8c8] h-[9px] relative rounded-[6px] shrink-0 w-[45px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[84px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f3f3f3] border-[#d4d4d4] border-[0.628px] border-solid content-stretch flex flex-col gap-[10px] items-start p-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] pt-[12px] px-[16px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[197px] items-start left-[61px] top-[405px] w-[147px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container15() {
  return <div className="bg-[#b0b0b0] h-[8.991px] relative rounded-[6px] shrink-0 w-[75.991px]" data-name="Container" />;
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <EventElipsis className="overflow-clip relative shrink-0 size-[13.997px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[25px] relative shrink-0 w-[29.996px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24.9999" preserveAspectRatio="none" viewBox="0 0 29.9959 24.9999" width="29.9959">
        <g clipPath="url(#clip0_0_537)" id="Icon">
          <path d={svgPaths.p27b28400} id="Vector" stroke="#888888" strokeWidth="1.49979" />
          <path d={svgPaths.p1e6d1f80} id="Vector_2" stroke="#888888" strokeWidth="1.49979" />
          <path d={svgPaths.p1616ff00} id="Vector_3" stroke="#888888" strokeLinejoin="round" strokeWidth="1.49979" />
        </g>
        <defs>
          <clipPath id="clip0_0_537">
            <rect fill="white" height="24.9999" width="29.9959" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#ebebeb] border-[#666] border-[1.256px] border-solid content-stretch flex h-[69px] items-center justify-center relative rounded-[14px] shrink-0 w-[76px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container18() {
  return <div className="bg-[#555] h-[11px] relative rounded-[6px] shrink-0 w-[84px]" data-name="Container" />;
}

function Container20() {
  return <div className="bg-[#c8c8c8] h-[9px] relative rounded-[6px] shrink-0 w-full" data-name="Container" />;
}

function Container21() {
  return <div className="bg-[#c8c8c8] h-[9px] relative rounded-[6px] shrink-0 w-[45px]" data-name="Container" />;
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[84px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f3f3f3] border-[#d4d4d4] border-[0.628px] border-solid content-stretch flex flex-col gap-[10px] items-start p-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] pt-[12px] px-[16px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[197px] items-start left-[calc(50%-8px)] top-[405px] w-[147px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[13.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.9968" preserveAspectRatio="none" viewBox="0 0 13.9968 13.9968" width="13.9968">
        <g id="Icon">
          <path d={svgPaths.p17ed05e0} id="Vector" stroke="#BBBBBB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1664" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPreviousWeek() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative shrink-0" data-name="Button - Previous week">
      <Icon2 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[21078500px] shrink-0 size-[29.996px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#333] text-[13px] text-center whitespace-nowrap">24</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-full items-center min-w-[38px] py-[3px] relative shrink-0 w-[47.721px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#aaa] text-[10px] text-center whitespace-nowrap">Mon</p>
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-center justify-center relative rounded-[21078500px] shrink-0 size-[29.996px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">25</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-full items-center min-w-[38px] py-[3px] relative shrink-0 w-[47.721px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#aaa] text-[10px] text-center whitespace-nowrap">Tue</p>
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[21078500px] shrink-0 size-[29.996px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#333] text-[13px] text-center whitespace-nowrap">26</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-full items-center min-w-[38px] py-[3px] relative shrink-0 w-[47.721px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#aaa] text-[10px] text-center whitespace-nowrap">Wed</p>
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[21078500px] shrink-0 size-[29.996px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#333] text-[13px] text-center whitespace-nowrap">27</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-full items-center min-w-[38px] py-[3px] relative shrink-0 w-[47.721px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#aaa] text-[10px] text-center whitespace-nowrap">Thu</p>
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[21078500px] shrink-0 size-[29.996px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#333] text-[13px] text-center whitespace-nowrap">28</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-full items-center min-w-[38px] py-[3px] relative shrink-0 w-[47.721px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#aaa] text-[10px] text-center whitespace-nowrap">Fri</p>
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[21078500px] shrink-0 size-[29.996px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#333] text-[13px] text-center whitespace-nowrap">29</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-full items-center min-w-[38px] py-[3px] relative shrink-0 w-[47.721px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#aaa] text-[10px] text-center whitespace-nowrap">Sat</p>
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[21078500px] shrink-0 size-[29.996px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#333] text-[13px] text-center whitespace-nowrap">30</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-full items-center min-w-[38px] py-[3px] relative shrink-0 w-[47.721px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#aaa] text-[10px] text-center whitespace-nowrap">Sun</p>
      <Container31 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[334.058_0_0] h-[53.975px] items-start min-w-px overflow-clip relative" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[13.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.9968" preserveAspectRatio="none" viewBox="0 0 13.9968 13.9968" width="13.9968">
        <g id="Icon">
          <path d={svgPaths.p12741d80} id="Vector" stroke="#BBBBBB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1664" />
        </g>
      </svg>
    </div>
  );
}

function ButtonNextWeek() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative shrink-0" data-name="Button - Next week">
      <Icon3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center pb-[12px] px-[4px] relative shrink-0 w-[255px]" data-name="Container">
      <ButtonPreviousWeek />
      <Container24 />
      <ButtonNextWeek />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-white border-[#e2e2e2] border-b-[0.628px] border-solid content-stretch flex flex-col h-[67px] items-start justify-end left-[73px] top-[314px] w-[260px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container32() {
  return (
    <div className="[word-break:break-word] h-[22.497px] not-italic relative shrink-0 text-center w-[107.253px] whitespace-nowrap" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[22.5px] left-[26px] text-[#1a1a1a] text-[15px] top-0 tracking-[-0.375px]">Today</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-[82.67px] text-[#999] text-[13px] top-[1.88px]">Tuesday</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12.996px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.9956" preserveAspectRatio="none" viewBox="0 0 12.9956 12.9956" width="12.9956">
        <g id="Icon">
          <path d={svgPaths.p1f6e2600} id="Vector" stroke="#C0C0C0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08297" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white border-[#e2e2e2] border-b-[0.628px] border-solid border-t-[0.628px] content-stretch flex h-[28px] items-center justify-between left-[73px] px-[16px] py-[10px] top-[381px] w-[260px]" data-name="Button">
      <Container32 />
      <Icon4 />
    </div>
  );
}

function Welcome2() {
  return (
    <div className="absolute bg-white h-[874px] left-[1158px] overflow-clip top-[258px] w-[402px]" data-name="Welcome - 3">
      <div className="absolute bg-[#f2f2f2] h-[376px] left-[31px] top-[224px] w-[340px]" />
      <Container />
      <Container11 />
      <Container22 />
      <Button7 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+132.5px)] not-italic text-[24px] text-black text-center top-[252px] w-[239px]">Keep track of CCA events</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+58px)] not-italic text-[48px] text-black top-[154px] whitespace-nowrap">ok!cca</p>
      <div className="absolute h-[58px] left-[31px] top-[661px] w-[338px]" data-name="WF Button">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex-[1_0_52px] h-full min-w-px relative rounded-[6px]" data-name="WF Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#2d3648] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Get Started →
                </p>
              </div>
            </div>
            <div aria-hidden className="absolute border-2 border-[#2d3648] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#c4c4c4] h-[5px] left-[calc(33.33%+17px)] top-[618px] w-[30px]" />
      <div className="absolute bg-[#c4c4c4] h-[5px] left-[calc(33.33%+52px)] top-[618px] w-[30px]" />
      <div className="absolute bg-[#999] h-[5px] left-[calc(50%+20px)] top-[618px] w-[30px]" />
    </div>
  );
}

function Onboard2Interests() {
  return (
    <div className="absolute bg-white h-[874px] left-[2664px] overflow-clip top-[252px] w-[402px]" data-name="Onboard 2 - interests">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(16.67%+31px)] not-italic text-[24px] text-black top-[68px] whitespace-nowrap">What are you into?</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+26px)] not-italic text-[16px] text-black top-[120px] whitespace-nowrap">Choose as many as you like.</p>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[36px] not-italic text-[20px] text-black top-[221px] whitespace-nowrap">Popular</p>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[35px] not-italic text-[20px] text-black top-[434px] whitespace-nowrap">More</p>
      <div className="absolute bg-[#c4c4c4] h-[8px] left-[calc(33.33%+17px)] top-[769px] w-[105px]" />
      <div className="absolute bg-[#c4c4c4] h-[8px] left-[calc(66.67%-2px)] top-[769px] w-[105px]" />
      <div className="absolute bg-[#999] h-[8px] left-[36px] top-[769px] w-[105px]" />
      <div className="absolute bg-[#f2f2f2] h-[38px] left-[42px] rounded-[20px] top-[258px] w-[109px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] left-[94px] not-italic text-[20px] text-black text-center top-[266px] w-[108px]">{` Sports`}</p>
      <div className="absolute bg-[#f2f2f2] h-[38px] left-[calc(33.33%+28px)] rounded-[20px] top-[258px] w-[193px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] left-[calc(33.33%+123.5px)] not-italic text-[20px] text-black text-center top-[266px] w-[191px]">Performing Arts</p>
      <div className="absolute bg-[#f2f2f2] h-[38px] left-[42px] rounded-[20px] top-[473px] w-[109px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] left-[94px] not-italic text-[20px] text-black text-center top-[481px] w-[108px]">Faith</p>
      <div className="absolute bg-[#f2f2f2] h-[38px] left-[calc(33.33%+28px)] rounded-[20px] top-[473px] w-[112px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] left-[calc(33.33%+79.5px)] not-italic text-[20px] text-black text-center top-[481px] w-[91px]">Travel</p>
      <div className="absolute bg-[#f2f2f2] h-[38px] left-[44px] rounded-[20px] top-[314px] w-[122px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] left-[105.5px] not-italic text-[20px] text-black text-center top-[322px] w-[121px]">Creative</p>
      <div className="absolute bg-[#f2f2f2] h-[38px] left-[44px] rounded-[20px] top-[529px] w-[157px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] left-[122.5px] not-italic text-[20px] text-black text-center top-[538px] w-[121px]">Technology</p>
      <div className="absolute bg-[#c4c4c4] h-[37px] left-[45px] rounded-[20px] top-[371px] w-[185px]" />
      <div className="absolute bg-[#c4c4c4] h-[38px] left-[calc(33.33%+40px)] rounded-[20px] top-[314px] w-[167px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] left-[128.5px] not-italic text-[20px] text-black text-center top-[378px] w-[185px]">{`Community `}</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[calc(33.33%+113.5px)] not-italic text-[20px] text-black text-center top-[323px] w-[167px]">Academic</p>
      <div className="absolute h-[58px] left-[calc(66.67%+35px)] top-[306px] w-[23px]" data-name="Multiply">
        <img alt="" className="absolute inset-0 max-w-none object-contain opacity-80 pointer-events-none size-full" src={imgMultiply} />
      </div>
      <div className="absolute h-[49px] left-[calc(50%-4px)] top-[365px] w-[21px]" data-name="Multiply">
        <img alt="" className="absolute inset-0 max-w-none object-contain opacity-80 pointer-events-none size-full" src={imgMultiply} />
      </div>
      <div className="absolute h-[36px] left-[34px] top-[162px] w-[336px]" data-name="search">
        <div className="absolute bg-[#f2f2f2] inset-0 rounded-[30px]" />
        <p className="[word-break:break-word] absolute bottom-[22.22%] font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[21.08%] not-italic right-[55.16%] text-[16px] text-black top-1/4 whitespace-nowrap">Search all interests</p>
        <div className="absolute inset-[5.56%_83.86%_8.33%_4.93%]" data-name="Search">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgSearch} />
        </div>
      </div>
      <div className="absolute h-[58px] left-[35px] top-[794px] w-[338px]" data-name="WF Button">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex-[1_0_52px] h-full min-w-px relative rounded-[6px]" data-name="WF Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#2d3648] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Continue
                </p>
              </div>
            </div>
            <div aria-hidden className="absolute border-2 border-[#2d3648] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="absolute left-[25px] size-[40px] top-[62px]" data-name="Back">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBack} />
      </div>
    </div>
  );
}

function Onboard3Commitment() {
  return (
    <div className="absolute bg-white h-[874px] left-[3166px] overflow-clip top-[248px] w-[402px]" data-name="Onboard 3 - Commitment">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(16.67%+136px)] not-italic text-[24px] text-black text-center top-[74px] w-[244px]">How involved do you want to be?</p>
      <div className="absolute h-[31px] left-[-63px] top-[355px] w-[25px]" data-name="Search">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgSearch} />
      </div>
      <div className="absolute bg-[#c4c4c4] h-[100px] left-[32px] rounded-[20px] top-[217px] w-[335px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+38px)] not-italic text-[20px] text-black top-[235px] whitespace-nowrap">Explore</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[35px] leading-[normal] left-[199.5px] not-italic text-[16px] text-black text-center top-[151px] w-[279px]">You can always change this later.</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+38px)] not-italic text-[16px] text-black top-[265px] w-[230px]">Try things out, casual commitment</p>
      <div className="absolute bg-[#f2f2f2] h-[100px] left-[32px] rounded-[20px] top-[331px] w-[335px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+36px)] not-italic text-[20px] text-black top-[357px] whitespace-nowrap">Commit</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+36px)] not-italic text-[16px] text-black top-[386px] whitespace-nowrap">Regular sessions and activities</p>
      <div className="absolute bg-[#f2f2f2] h-[100px] left-[32px] rounded-[20px] top-[447px] w-[335px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+36px)] not-italic text-[20px] text-black top-[465px] whitespace-nowrap">Immerse</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+36px)] not-italic text-[16px] text-black top-[492px] w-[236px]">Deep involvement, competitions, leadership</p>
      <div className="absolute h-[58px] left-[37px] top-[792px] w-[338px]" data-name="WF Button">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex-[1_0_52px] h-full min-w-px relative rounded-[6px]" data-name="WF Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#2d3648] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Continue
                </p>
              </div>
            </div>
            <div aria-hidden className="absolute border-2 border-[#2d3648] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="absolute left-[50px] size-[40px] top-[361px]" data-name="Flash On">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFlashOn} />
      </div>
      <div className="absolute left-[50px] size-[40px] top-[477px]" data-name="Fire">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFire} />
      </div>
      <div className="absolute left-[23px] size-[40px] top-[79px]" data-name="Back">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBack} />
      </div>
      <div className="absolute left-[50px] size-[40px] top-[248px]" data-name="Sprout">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgSprout} />
      </div>
      <div className="absolute bg-[#999] h-[8px] left-[calc(33.33%+15px)] top-[770px] w-[105px]" />
      <div className="absolute bg-[#c4c4c4] h-[8px] left-[calc(66.67%-4px)] top-[770px] w-[105px]" />
      <div className="absolute bg-[#c4c4c4] h-[8px] left-[34px] top-[770px] w-[105px]" />
    </div>
  );
}

function ShortLine3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Short Line">
      <div className="bg-[#999] flex-[1_0_0] h-[16px] min-w-px relative rounded-bl-[3px] rounded-tl-[3px]" data-name="Line" />
      <div className="bg-[#999] flex-[1_0_0] h-[16px] min-w-px relative rounded-br-[3px] rounded-tr-[3px]" data-name="Line" />
      <div className="flex-[1_0_0] h-[16px] min-w-px relative rounded-[3px]" data-name="Blank" />
    </div>
  );
}

function ShortLine4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Short Line">
      <div className="bg-[#999] flex-[1_0_0] h-[16px] min-w-px relative rounded-bl-[3px] rounded-tl-[3px]" data-name="Line" />
      <div className="bg-[#999] flex-[1_0_0] h-[16px] min-w-px relative rounded-br-[3px] rounded-tr-[3px]" data-name="Line" />
      <div className="flex-[1_0_0] h-[16px] min-w-px relative rounded-[3px]" data-name="Blank" />
    </div>
  );
}

function Onboard1NusSuccess() {
  return (
    <div className="absolute bg-white h-[874px] left-[2181px] overflow-clip top-[242px] w-[402px]" data-name="Onboard 1 - NUS success">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[32px] not-italic text-[20px] text-black top-[278px] w-[340px]">XXX@u.nus.edu</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[29px] not-italic text-[32px] text-black top-[225px] w-[318px]">{`Hello, <Name>!`}</p>
      <div className="absolute h-[31px] left-[-63px] top-[355px] w-[25px]" data-name="Search">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgSearch} />
      </div>
      <div className="absolute h-[58px] left-[30px] top-[537px] w-[338px]" data-name="WF Button">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex-[1_0_52px] h-full min-w-px relative rounded-[6px]" data-name="WF Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#2d3648] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Create Account
                </p>
              </div>
            </div>
            <div aria-hidden className="absolute border-2 border-[#2d3648] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[29px] not-italic text-[24px] text-black top-[334px] w-[339px]">Current CCA Memberships</p>
      <div className="absolute bg-[#d9d9d9] h-[133px] left-[32px] top-[375px] w-[6px]" />
      <div className="absolute bg-[#999] h-[44px] left-[32px] top-[375px] w-[6px]" />
      <div className="absolute left-[49px] top-[388px] w-[319px]" data-name="_Text Base">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <ShortLine3 />
          <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
        </div>
      </div>
      <div className="absolute left-[49px] top-[452px] w-[319px]" data-name="_Text Base">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <ShortLine4 />
          <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Onboard4Profile() {
  return (
    <div className="absolute bg-white h-[874px] left-[3668px] overflow-clip top-[248px] w-[402px]" data-name="Onboard 4 - Profile">
      <div className="absolute bg-[#f7f7f7] h-[80px] left-[29px] rounded-[20px] top-[357px] w-[340px]" />
      <div className="absolute h-[31px] left-[-63px] top-[355px] w-[25px]" data-name="Search">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgSearch} />
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+49px)] not-italic text-[16px] text-black top-[134px] w-[167px]">Pick your username.</p>
      <div className="absolute h-[58px] left-[41px] top-[789px] w-[338px]" data-name="WF Button">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex-[1_0_52px] h-full min-w-px relative rounded-[6px]" data-name="WF Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#2d3648] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Let’s find something you’ll love
                </p>
              </div>
            </div>
            <div aria-hidden className="absolute border-2 border-[#2d3648] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="absolute h-[58px] left-[32px] top-[222px] w-[338px]" data-name="input">
        <div className="absolute bg-[#e0e0e0] inset-0" />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[31.03%_67.16%_27.59%_5.62%] leading-[normal] not-italic text-[20px] text-black whitespace-nowrap">campusotter66</p>
      </div>
      <div className="absolute flex h-[41.405px] items-center justify-center left-[42px] top-[283px] w-[337.218px]">
        <div className="flex-none rotate-[-0.58deg]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[16px] text-black w-[336.85px]">3-20 characters. Letters, numbers, underscores only</p>
        </div>
      </div>
      <div className="absolute flex h-[59.536px] items-center justify-center left-[calc(16.67%+23px)] top-[370px] w-[251.54px]">
        <div className="flex-none rotate-[-0.58deg]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[16px] text-black w-[250.976px]">This is what other students will see when you contribute to CCA reviews</p>
        </div>
      </div>
      <Pencil className="absolute left-[calc(83.33%-5px)] overflow-clip size-[24px] top-[239px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(16.67%+24px)] not-italic text-[24px] text-black top-[87px] w-[221px]">Create your profile</p>
      <div className="absolute left-[22px] size-[40px] top-[81px]" data-name="Back">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBack} />
      </div>
      <div className="absolute bg-[#c4c4c4] h-[8px] left-[calc(33.33%+24px)] top-[768px] w-[105px]" />
      <div className="absolute bg-[#999] h-[8px] left-[calc(66.67%+5px)] top-[768px] w-[105px]" />
      <div className="absolute bg-[#c4c4c4] h-[8px] left-[43px] top-[768px] w-[105px]" />
      <div className="absolute h-[63px] left-[42px] top-[367px] w-[41px]" data-name="Light On">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLightOn} />
      </div>
    </div>
  );
}

function SignIn() {
  return (
    <div className="absolute bg-white h-[874px] left-[1660px] overflow-clip top-[256px] w-[402px]" data-name="Sign in">
      <div className="absolute bg-[#f2f2f2] h-[58px] left-[37px] top-[500px] w-[338px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[56px] not-italic text-[20px] text-black top-[516px] whitespace-nowrap">NUS Email or Username</p>
      <div className="absolute h-[58px] left-[65px] top-[599px] w-[272px]" data-name="WF Button">
        <div className="content-stretch flex items-start relative size-full">
          <div className="flex-[1_0_52px] h-full min-w-px relative rounded-[6px]" data-name="WF Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#2d3648] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Sign in
                </p>
              </div>
            </div>
            <div aria-hidden className="absolute border-2 border-[#2d3648] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f2f2f2] border border-black border-solid left-[calc(16.67%+30px)] rounded-[40px] size-[217px] top-[244px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(33.33%+12px)] not-italic text-[24px] text-black top-[338px] w-[119px]">App Logo</p>
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

function Frame() {
  return (
    <div className="absolute h-[164px] left-[calc(83.33%-20px)] opacity-70 overflow-clip top-[374px] w-[55px]">
      <CcaCard className="absolute bg-[#e0e0e0] h-[164px] left-[-4px] rounded-[20px] top-[3px] w-[132px]" />
      <div className="absolute h-[54px] left-[24px] opacity-70 top-[60px] w-[27px]" data-name="Next Page">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgNextPage} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[53px] left-0 top-0 w-[358px]">
      <div className="absolute h-[53px] left-[-8px] top-0 w-[373px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="53" preserveAspectRatio="none" viewBox="0 0 373 53" width="373">
          <path d="M0 0H373V53H0V0Z" fill="#D9D9D9" id="Rectangle 46" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-0 text-[11px] text-black top-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        NUS DANCE BLAST ADDED TO WISHLIST
      </p>
      <p className="[text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[315px] text-[11px] text-black top-[20px] underline whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        UNDO
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[53px] left-[26px] top-[741px] w-[358px]">
      <Frame1 />
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

function Frame3() {
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
    <div className="absolute bg-white h-[874px] left-[4170px] overflow-clip top-[252px] w-[402px]" data-name="Home Screen">
      <div className="absolute bg-white h-[80px] left-[13px] top-[794px] w-[375px]" data-name="WF Toolbar">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start relative size-full">
            <div className="bg-[#1a202c] h-[2px] relative shrink-0 w-full" data-name="Divider" />
            <ToolbarItems />
          </div>
        </div>
      </div>
      <Frame />
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
      <Frame2 />
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
      <Frame3 />
      <CodiconBellDot />
    </div>
  );
}

function ForYou() {
  return (
    <div className="absolute bg-white h-[874px] left-[4672px] overflow-clip top-[248px] w-[402px]" data-name="For You">
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

export default function FlowWelcomeAndOnboard() {
  return (
    <div className="bg-[#e0e0e0] relative size-full" data-name="Flow - Welcome and Onboard">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[194px] justify-center leading-[0] left-[529.5px] not-italic text-[64px] text-black text-center top-[97px] tracking-[1.28px] w-[1059px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[25px] underline">Flow - Welcome and Onboard</p>
      </div>
      <Welcome />
      <Welcome1 />
      <Welcome2 />
      <div className="absolute h-0 left-[525px] top-[689px] w-[159px]">
        <div className="absolute inset-[-14.43px_0]">
          <svg className="block size-full" fill="none" height="28.8675" preserveAspectRatio="none" viewBox="0 0 159 28.8675" width="159">
            <path d={svgPaths.p23230500} fill="black" id="Arrow 4" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[55px] justify-center leading-[0] left-[607.5px] not-italic text-[30px] text-black text-center top-[655.5px] tracking-[0.6px] w-[169px]">
        <p className="leading-[35px]">Scroll</p>
      </div>
      <div className="absolute flex h-[2px] items-center justify-center left-[1025px] top-[689px] w-[164px]">
        <div className="flex-none rotate-[0.7deg]">
          <div className="h-0 relative w-[164.012px]">
            <div className="absolute inset-[-14.43px_0]">
              <svg className="block size-full" fill="none" height="28.8675" preserveAspectRatio="none" viewBox="0 0 164.012 28.8675" width="164.012">
                <path d={svgPaths.p2ce7700} fill="black" id="Arrow 5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[55px] justify-center leading-[0] left-[1109.5px] not-italic text-[30px] text-black text-center top-[656.5px] tracking-[0.6px] w-[169px]">
        <p className="leading-[35px]">Scroll</p>
      </div>
      <Onboard2Interests />
      <Onboard3Commitment />
      <Onboard1NusSuccess />
      <Onboard4Profile />
      <SignIn />
      <div className="absolute flex h-[213px] items-center justify-center left-[1527px] top-[735px] w-[133px]">
        <div className="flex-none rotate-[-58.02deg]">
          <div className="h-0 relative w-[251.113px]">
            <div className="absolute inset-[-14.43px_0]">
              <svg className="block size-full" fill="none" height="28.8675" preserveAspectRatio="none" viewBox="0 0 251.113 28.8675" width="251.113">
                <path d={svgPaths.p3e171800} fill="black" id="Arrow 10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[209px] items-center justify-center left-[1996px] top-[679px] w-[166px]">
        <div className="flex-none rotate-[-51.54deg]">
          <div className="h-0 relative w-[266.903px]">
            <div className="absolute inset-[-14.43px_0]">
              <svg className="block size-full" fill="none" height="28.8675" preserveAspectRatio="none" viewBox="0 0 266.903 28.8675" width="266.903">
                <path d={svgPaths.p2e051210} fill="black" id="Arrow 11" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[144px] items-center justify-center left-[2531px] top-[684px] w-[133px]">
        <div className="flex-none rotate-[-47.27deg]">
          <div className="h-0 relative w-[196.023px]">
            <div className="absolute inset-[-14.43px_0]">
              <svg className="block size-full" fill="none" height="28.8675" preserveAspectRatio="none" viewBox="0 0 196.023 28.8675" width="196.023">
                <path d={svgPaths.p1307b400} fill="black" id="Arrow 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[376px] items-center justify-center left-[3037px] top-[693px] w-[129px]">
        <div className="flex-none rotate-[-71.06deg]">
          <div className="h-0 relative w-[397.513px]">
            <div className="absolute inset-[-14.43px_0]">
              <svg className="block size-full" fill="none" height="28.8675" preserveAspectRatio="none" viewBox="0 0 397.513 28.8675" width="397.513">
                <path d={svgPaths.p3b1c3700} fill="black" id="Arrow 13" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <HomeScreen />
      <div className="absolute flex h-[118px] items-center justify-center left-[4378px] top-[1126px] w-0">
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[118px]">
            <div className="absolute inset-[-14.43px_0]">
              <svg className="block size-full" fill="none" height="28.8675" preserveAspectRatio="none" viewBox="0 0 118 28.8675" width="118">
                <path d={svgPaths.p2f6dd580} fill="black" id="Arrow 17" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[376px] items-center justify-center left-[4047px] top-[690px] w-[129px]">
        <div className="flex-none rotate-[-71.06deg]">
          <div className="h-0 relative w-[397.513px]">
            <div className="absolute inset-[-14.43px_0]">
              <svg className="block size-full" fill="none" height="28.8675" preserveAspectRatio="none" viewBox="0 0 397.513 28.8675" width="397.513">
                <path d={svgPaths.p3b1c3700} fill="black" id="Arrow 13" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[376px] items-center justify-center left-[3541px] top-[693px] w-[129px]">
        <div className="flex-none rotate-[-71.06deg]">
          <div className="h-0 relative w-[397.513px]">
            <div className="absolute inset-[-14.43px_0]">
              <svg className="block size-full" fill="none" height="28.8675" preserveAspectRatio="none" viewBox="0 0 397.513 28.8675" width="397.513">
                <path d={svgPaths.p3b1c3700} fill="black" id="Arrow 13" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ForYou />
      <div className="absolute h-[50px] left-[4462px] top-[579px] w-[96px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 96 50" width="96">
          <path d={svgPaths.p1c3d9880} id="Ellipse 2" stroke="black" strokeWidth="3" />
        </svg>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[4558px] top-[592px] w-[114px]">
        <div className="flex-none rotate-[-8.48deg]">
          <div className="h-0 relative w-[115.261px]">
            <div className="absolute inset-[-14.43px_0]">
              <svg className="block size-full" fill="none" height="28.8675" preserveAspectRatio="none" viewBox="0 0 115.261 28.8675" width="115.261">
                <path d={svgPaths.p34f60280} fill="black" id="Arrow 16" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[337px] items-center justify-center left-[1876px] top-[909px] w-[2px]">
        <div className="flex-none rotate-[89.66deg]">
          <div className="h-0 relative w-[337.006px]">
            <div className="absolute inset-[-3px_0_0_0]">
              <svg className="block size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 337.006 3" width="337.006">
                <line id="Line 36" stroke="black" strokeWidth="3" x2="337.006" y1="1.5" y2="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[1878px] top-[1245px] w-[2500px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 2500 3" width="2500">
            <line id="Line 37" stroke="black" strokeWidth="3" x2="2500" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[2132.5px] not-italic text-[32px] text-black text-center top-[1213.5px] tracking-[0.64px] whitespace-nowrap">
        <p className="leading-[25px]">If already have an account</p>
      </div>
    </div>
  );
}