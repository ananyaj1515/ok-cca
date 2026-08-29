import svgPaths from "./svg-bfwiyd31z8";
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

function Reply({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[26px]"} data-name="reply">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[2px] py-[3px] relative size-full">
          <div className="h-[16.251px] relative shrink-0 w-[21.288px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="16.2508" preserveAspectRatio="none" viewBox="0 0 21.2875 16.2508" width="21.2875">
              <path d={svgPaths.p1814af00} fill="#212529" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SizeXsTypeTwitterBlue({ className }: { className?: string }) {
  return (
    <div className={className || "relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(103,110,118,0.08)] size-[12px]"} data-name="Size=xs, Type=Twitter Blue">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <path d={svgPaths.p1fa04d80} fill="#1F1F1F" id="Vector" />
      </svg>
      <div className="absolute left-[3px] overflow-clip size-[6px] top-[3px]" data-name="heroicons-outline/check">
        <div className="absolute inset-[21.88%_18.75%]">
          <div className="absolute inset-[-14.82%_-13.33%_-14.81%_-13.33%]">
            <svg className="block size-full" fill="none" height="4.37506" preserveAspectRatio="none" viewBox="0 0 4.75005 4.37506" width="4.75005">
              <path d={svgPaths.p27d5d580} id="Vector 616" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function VuesaxBoldDanger({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="vuesax/bold/danger">
      <div className="absolute contents inset-0" data-name="vuesax/bold/danger">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <g id="danger">
            <path d={svgPaths.p18d36180} fill="#292D32" id="Vector" />
            <g id="Vector_2" opacity="0" />
          </g>
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

function Review() {
  return (
    <div className="absolute contents left-[16px] top-[115px]" data-name="review 1">
      <div className="absolute bg-[#d9d9d9] h-[129px] left-[16px] rounded-[20px] top-[115px] w-[370px]" />
      <div className="absolute bg-[#d9d9d9] h-[129px] left-[16px] rounded-[20px] top-[115px] w-[370px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] left-[64px] not-italic text-[16px] text-black top-[130.5px] tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[25px]">bestdancer_123</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] left-[64px] not-italic text-[#999] text-[12px] top-[149.5px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[25px]">AY25/26 Member</p>
      </div>
      <div className="absolute h-0 left-[16px] top-[162px] w-[370px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 370 1" width="370">
            <line id="Line 7" stroke="#727272" x2="370" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <HeroiconsMiniUserCircle className="absolute left-[23px] overflow-clip size-[35px] top-[121px]" />
      <VuesaxBoldDanger className="absolute left-[349px] size-[24px] top-[127px]" />
    </div>
  );
}

function VuesaxBoldDanger1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/danger">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.175" preserveAspectRatio="none" viewBox="0 0 23.175 23.175" width="23.175">
        <g id="danger">
          <path d={svgPaths.p2bcf5600} fill="#292D32" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Review1() {
  return (
    <div className="absolute contents left-[47px] top-[274px]" data-name="review 2">
      <div className="absolute bg-[#d9d9d9] h-[129px] left-[47px] rounded-[20px] top-[274px] w-[345px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] left-[92.04px] not-italic text-[16px] text-black top-[289.5px] tracking-[0.32px] w-[135.134px]">
        <p className="leading-[25px]">worstdancer_123</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] left-[92.04px] not-italic text-[#999] text-[12px] top-[308.5px] tracking-[0.24px] w-[126.944px]">
        <p className="leading-[25px]">AY25/26 Member</p>
      </div>
      <div className="absolute h-0 left-[47px] top-[321px] w-[345px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 345 1" width="345">
            <line id="Line 7" stroke="#727272" x2="345" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[52.95px] overflow-clip size-[33.797px] top-[280.6px]" data-name="heroicons-mini/user-circle">
        <div className="absolute inset-[10%]" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" height="27.0371" preserveAspectRatio="none" viewBox="0 0 27.0371 27.0371" width="27.0371">
            <path d={svgPaths.p2cfe9000} fill="black" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[357.1px] size-[23.175px] top-[286.41px]" data-name="vuesax/bold/danger">
        <VuesaxBoldDanger1 />
      </div>
    </div>
  );
}

function VuesaxBoldDanger2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/danger">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.175" preserveAspectRatio="none" viewBox="0 0 23.175 23.175" width="23.175">
        <g id="danger">
          <path d={svgPaths.p2bcf5600} fill="#292D32" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Review2() {
  return (
    <div className="absolute contents left-[41px] top-[433px]" data-name="review 3">
      <div className="absolute bg-[#d9d9d9] h-[129px] left-[41px] rounded-[20px] top-[433px] w-[345px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] left-[86.04px] not-italic text-[16px] text-black top-[448.5px] tracking-[0.32px] w-[135.134px]">
        <p className="leading-[25px]">ilovedance_001</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] left-[86.04px] not-italic text-[#999] text-[12px] top-[467.5px] tracking-[0.24px] w-[126.944px]">
        <p className="leading-[25px]">AY25/26 Member</p>
      </div>
      <div className="absolute h-0 left-[41px] top-[480px] w-[345px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 345 1" width="345">
            <line id="Line 7" stroke="#727272" x2="345" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[46.95px] overflow-clip size-[33.797px] top-[439.6px]" data-name="heroicons-mini/user-circle">
        <div className="absolute inset-[10%]" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" height="27.0371" preserveAspectRatio="none" viewBox="0 0 27.0371 27.0371" width="27.0371">
            <path d={svgPaths.p2cfe9000} fill="black" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[351.1px] size-[23.175px] top-[445.41px]" data-name="vuesax/bold/danger">
        <VuesaxBoldDanger2 />
      </div>
    </div>
  );
}

function VuesaxBoldDanger3() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/danger">
      <svg className="absolute block inset-0 size-full" fill="none" height="22.3544" preserveAspectRatio="none" viewBox="0 0 22.3544 22.3544" width="22.3544">
        <g id="danger">
          <path d={svgPaths.p3fb4c680} fill="#292D32" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Review3() {
  return (
    <div className="absolute contents left-[65px] top-[592px]" data-name="review 4">
      <div className="absolute bg-[#d9d9d9] h-[129px] left-[65px] rounded-[20px] top-[592px] w-[321px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] left-[107px] not-italic text-[16px] text-black top-[607.5px] tracking-[0.32px] w-[206px]">
        <p className="leading-[25px]">Peter Tan Yong Hern</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] left-[107px] not-italic text-[#999] text-[12px] top-[626.5px] tracking-[0.24px] w-[178px]">
        <p className="leading-[25px]">AY24/25 Finance Head</p>
      </div>
      <div className="absolute h-0 left-[65px] top-[639px] w-[321px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 321 1" width="321">
            <line id="Line 7" stroke="#727272" x2="321" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[69.96px] overflow-clip size-[32.6px] top-[599.2px]" data-name="heroicons-mini/user-circle">
        <div className="absolute inset-[10%]" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" height="26.0801" preserveAspectRatio="none" viewBox="0 0 26.0801 26.0801" width="26.0801">
            <path d={svgPaths.pfa1e00} fill="black" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[353.13px] size-[22.354px] top-[604.82px]" data-name="vuesax/bold/danger">
        <VuesaxBoldDanger3 />
      </div>
      <SizeXsTypeTwitterBlue className="absolute left-[238px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(103,110,118,0.08)] size-[12px] top-[621px]" />
    </div>
  );
}

export default function CcaProfileReviewThread() {
  return (
    <div className="bg-white relative size-full" data-name="CCA Profile - Review Thread">
      <div className="absolute bg-[#d9d9d9] h-[85px] left-0 top-0 w-[402px]" />
      <ChevronBackward className="absolute h-[45px] left-0 overflow-clip top-[21px] w-[49px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[24px] leading-[25px] left-[201px] not-italic text-[26px] text-black text-center top-[31px] tracking-[0.52px] w-[274px]">NUS Dance Blast</p>
      <div className="absolute bg-[#d9d9d9] h-[85px] left-0 top-0 w-[402px]" />
      <ChevronBackward className="absolute h-[45px] left-0 overflow-clip top-[21px] w-[49px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[24px] leading-[25px] left-[201px] not-italic text-[26px] text-black text-center top-[31px] tracking-[0.52px] w-[274px]">NUS Dance Blast</p>
      <Review />
      <Review1 />
      <div className="absolute flex h-[447px] items-center justify-center left-[16px] top-[274px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[447px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 447 1" width="447">
                <line id="Line 16" stroke="black" x2="447" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[129px] items-center justify-center left-[41px] top-[592px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[129px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 129 1" width="129">
                <line id="Line 17" stroke="black" x2="129" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Review2 />
      <Review3 />
      <div className="absolute flex items-center justify-center left-[324px] size-[18px] top-[218px]">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[18px]" data-name="thumbs up">
            <div className="absolute inset-[8.33%_8.33%_8.33%_9.66%]" data-name="Icon">
              <div className="absolute inset-[-8.33%_-8.47%]">
                <svg className="block size-full" fill="none" height="17.5003" preserveAspectRatio="none" viewBox="0 0 17.262 17.5003" width="17.262">
                  <path d={svgPaths.p2b986a80} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[353px] overflow-clip size-[18px] top-[218px]" data-name="Thumbs down">
        <div className="absolute inset-[8.33%_8.33%_8.33%_9.66%]" data-name="Icon">
          <div className="absolute inset-[-8.33%_-8.47%]">
            <svg className="block size-full" fill="none" height="17.5003" preserveAspectRatio="none" viewBox="0 0 17.262 17.5003" width="17.262">
              <path d={svgPaths.p2b986a80} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] left-[314px] not-italic text-[16px] text-black text-right top-[227.5px] tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[25px]">+18</p>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[347px] top-[219px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 17 1" width="17">
                <line id="Line 19" stroke="black" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[274px] top-[219px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 17 1" width="17">
                <line id="Line 19" stroke="black" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[279px] top-[219px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 17 1" width="17">
                <line id="Line 19" stroke="black" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[324px] size-[18px] top-[378px]">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[18px]" data-name="thumbs up">
            <div className="absolute inset-[8.33%_8.33%_8.33%_9.66%]" data-name="Icon">
              <div className="absolute inset-[-8.33%_-8.47%]">
                <svg className="block size-full" fill="none" height="17.5003" preserveAspectRatio="none" viewBox="0 0 17.262 17.5003" width="17.262">
                  <path d={svgPaths.p2b986a80} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[353px] overflow-clip size-[18px] top-[378px]" data-name="Thumbs down">
        <div className="absolute inset-[8.33%_8.33%_8.33%_9.66%]" data-name="Icon">
          <div className="absolute inset-[-8.33%_-8.47%]">
            <svg className="block size-full" fill="none" height="17.5003" preserveAspectRatio="none" viewBox="0 0 17.262 17.5003" width="17.262">
              <path d={svgPaths.p2b986a80} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] left-[314px] not-italic text-[16px] text-black text-right top-[387.5px] tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[25px]">+6</p>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[347px] top-[379px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 17 1" width="17">
                <line id="Line 19" stroke="black" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[324px] size-[18px] top-[537px]">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[18px]" data-name="thumbs up">
            <div className="absolute inset-[8.33%_8.33%_8.33%_9.66%]" data-name="Icon">
              <div className="absolute inset-[-8.33%_-8.47%]">
                <svg className="block size-full" fill="none" height="17.5003" preserveAspectRatio="none" viewBox="0 0 17.262 17.5003" width="17.262">
                  <path d={svgPaths.p2b986a80} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[353px] overflow-clip size-[18px] top-[537px]" data-name="Thumbs down">
        <div className="absolute inset-[8.33%_8.33%_8.33%_9.66%]" data-name="Icon">
          <div className="absolute inset-[-8.33%_-8.47%]">
            <svg className="block size-full" fill="none" height="17.5003" preserveAspectRatio="none" viewBox="0 0 17.262 17.5003" width="17.262">
              <path d={svgPaths.p2b986a80} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] left-[314px] not-italic text-[16px] text-black text-right top-[546.5px] tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[25px]">-2</p>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[347px] top-[538px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 17 1" width="17">
                <line id="Line 19" stroke="black" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[324px] size-[18px] top-[696px]">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[18px]" data-name="thumbs up">
            <div className="absolute inset-[8.33%_8.33%_8.33%_9.66%]" data-name="Icon">
              <div className="absolute inset-[-8.33%_-8.47%]">
                <svg className="block size-full" fill="none" height="17.5003" preserveAspectRatio="none" viewBox="0 0 17.262 17.5003" width="17.262">
                  <path d={svgPaths.p2b986a80} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[353px] overflow-clip size-[18px] top-[696px]" data-name="Thumbs down">
        <div className="absolute inset-[8.33%_8.33%_8.33%_9.66%]" data-name="Icon">
          <div className="absolute inset-[-8.33%_-8.47%]">
            <svg className="block size-full" fill="none" height="17.5003" preserveAspectRatio="none" viewBox="0 0 17.262 17.5003" width="17.262">
              <path d={svgPaths.p2b986a80} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Alata:Regular',sans-serif] justify-center leading-[0] left-[314px] not-italic text-[16px] text-black text-right top-[705.5px] tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[25px]">+8</p>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[347px] top-[697px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 17 1" width="17">
                <line id="Line 19" stroke="black" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[280px] top-[379px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 17 1" width="17">
                <line id="Line 19" stroke="black" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[285px] top-[379px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 17 1" width="17">
                <line id="Line 19" stroke="black" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[280px] top-[537px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 17 1" width="17">
                <line id="Line 19" stroke="black" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[285px] top-[537px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 17 1" width="17">
                <line id="Line 19" stroke="black" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[280px] top-[697px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 17 1" width="17">
                <line id="Line 19" stroke="black" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[285px] top-[697px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 17 1" width="17">
                <line id="Line 19" stroke="black" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Reply className="absolute left-[237px] top-[216px] w-[26px]" />
      <Reply className="absolute left-[243px] top-[376px] w-[26px]" />
      <Reply className="absolute left-[243px] top-[694px] w-[26px]" />
      <Reply className="absolute left-[243px] top-[534px] w-[26px]" />
      <WfToolbar className="absolute bg-white h-[80px] left-[13px] top-[794px] w-[375px]" />
    </div>
  );
}