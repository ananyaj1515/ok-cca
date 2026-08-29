import svgPaths from "./svg-n8ytoj5l59";
import imgWishlistFilter from "./45d0282f741d25facfe06094b5c6b239210f7216.png";
import imgGoogleWebSearch from "./e2fda1aeba59b7fbd12df402f54d6a8e8e1ae80c.png";
import imgFollowing from "./e6e43db6fc98e611e51de55669c2ba7b2bd31f6f.png";
import imgToday from "./9b26dffc715bfc60e0539b590373199088533d5e.png";
import imgProfile from "./3ef698d8e729338a77f0d6ef38930681b509b500.png";
type CheckboxProps = {
  className?: string;
  selected?: "Default" | "True";
};

function Checkbox({ className, selected = "True" }: CheckboxProps) {
  const isDefault = selected === "Default";
  return (
    <button className={className || "relative"}>
      <div className="content-stretch flex gap-[10px] items-start relative size-full">
        <div className="relative shrink-0 size-[16px]" data-name="charm:tick">
          <div className={`absolute ${isDefault ? "inset-[-6.25%]" : "inset-[-3.13%]"}`}>
            <svg className="block size-full" fill="none" height={isDefault ? "18" : "17"} preserveAspectRatio="none" viewBox={isDefault ? "0 0 18 18" : "0 0 17 17"} width={isDefault ? "18" : "17"}>
              <g id="charm:tick">
                <rect fill={isDefault ? "#FFFBFB" : "black"} height="16" rx="2" width="16" x={isDefault ? "1" : "0.5"} y={isDefault ? "1" : "0.5"} />
                <rect height="16" rx="2" stroke="black" strokeWidth={isDefault ? "2" : undefined} width="16" x={isDefault ? "1" : "0.5"} y={isDefault ? "1" : "0.5"} />
                <path d={isDefault ? svgPaths.p1ee03600 : svgPaths.p2095e400} id="Vector" stroke={isDefault ? "white" : "#F5EEEE"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Remove from Wishlist
        </p>
      </div>
    </button>
  );
}

function CcaCardWishlist({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#e0e0e0] h-[190px] relative rounded-[20px] w-[160px]"} data-name="CCA Card Wishlist">
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
          <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="WF Text Placeholder">
            <div className="content-stretch flex flex-col gap-[8px] h-[78px] items-start relative shrink-0 w-full" data-name="_Text Base">
              <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
              <div className="bg-[#c4c4c4] h-[16px] relative rounded-[3px] shrink-0 w-full" data-name="Line" />
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Short Line">
                <div className="bg-[#c4c4c4] flex-[1_0_0] h-[16px] min-w-px relative rounded-bl-[3px] rounded-tl-[3px]" data-name="Line" />
                <div className="bg-[#c4c4c4] flex-[1_0_0] h-[16px] min-w-px relative rounded-br-[3px] rounded-tr-[3px]" data-name="Line" />
                <div className="flex-[1_0_0] h-[16px] min-w-px relative rounded-[3px]" data-name="Blank" />
              </div>
            </div>
          </div>
          <div className="h-[12px] overflow-clip relative shrink-0 w-full">
            <div className="absolute right-0 size-[16px] top-[-2px]" data-name="nimbus:ellipsis">
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <g id="nimbus:ellipsis">
                  <path d={svgPaths.p3eb71000} fill="black" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
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

function WishlistFilter({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[35px]"} data-name="wishlist filter">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWishlistFilter} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#c4c4c4] border-0 border-black border-solid content-stretch flex items-start left-[calc(33.33%+47px)] px-[10px] py-[5px] rounded-[20px] top-[173px]">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Currently Trying
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56px]">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-28px)] text-[20px] text-black top-[calc(50%-12px)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Count
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start left-[calc(66.67%+9px)] px-[10px] py-[5px] top-[106px] w-[96px]">
      <Frame />
      <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        6
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[402px] left-[31px] top-[235px] w-[342px]">
      <CcaCardWishlist className="absolute bg-[#e0e0e0] h-[190px] left-0 rounded-[20px] top-0 w-[160px]" />
      <CcaCardWishlist className="absolute bg-[#e0e0e0] h-[190px] left-[182px] rounded-[20px] top-0 w-[160px]" />
      <CcaCardWishlist className="absolute bg-[#e0e0e0] h-[190px] left-0 rounded-[20px] top-[212px] w-[160px]" />
      <CcaCardWishlist className="absolute bg-[#e0e0e0] h-[190px] left-[182px] rounded-[20px] top-[212px] w-[160px]" />
      <CcaCardWishlist className="absolute bg-[#e0e0e0] h-[190px] left-0 rounded-[20px] top-[422px] w-[160px]" />
      <CcaCardWishlist className="absolute bg-[#e0e0e0] h-[190px] left-[182px] rounded-[20px] top-[422px] w-[160px]" />
    </div>
  );
}

function ToolbarItem() {
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
    <div className="bg-white flex-[1_0_0] h-[64px] min-w-px relative" data-name="_Toolbar Item">
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

function Frame3() {
  return (
    <div className="absolute bg-[#c4c4c4] border border-black border-solid content-stretch flex items-start left-0 px-[10px] py-[5px] rounded-[20px] top-0">
      <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        All
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#c4c4c4] border-0 border-black border-solid content-stretch flex items-start left-[49px] px-[10px] py-[5px] rounded-[20px] top-px">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Interested
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-0 text-[15px] text-black top-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`\u{10017C}`}</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#c4c4c4] border-0 border-black border-solid content-stretch flex items-start left-[296px] px-[10px] py-[5px] rounded-[20px] top-[2px]">
      <Frame1 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-black w-[62px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Add List
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[30px] left-[33px] top-[172px] w-[310px]">
      <Frame3 />
      <Frame4 />
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute cursor-pointer h-[41px] left-[36px] top-[238px] w-[285px]">
      <button className="absolute left-[215px] top-0 w-[70px]" data-name="WF Button">
        <div className="content-stretch flex items-start relative size-full">
          <div className="bg-[#3a3a3a] h-[41px] relative rounded-[6px] shrink-0 w-[70px]" data-name="WF Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[18px] text-left text-white tracking-[-0.18px] whitespace-nowrap" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Confirm
                </p>
              </div>
            </div>
          </div>
        </div>
      </button>
      <button className="absolute left-0 top-px" data-name="WF Button">
        <div className="content-stretch flex items-start relative size-full">
          <div className="h-[39px] relative rounded-[6px] shrink-0 w-[70px]" data-name="WF Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#2d3648] text-[18px] text-left tracking-[-0.18px] whitespace-nowrap" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Cancel
                </p>
              </div>
            </div>
            <div aria-hidden className="absolute border-2 border-[#2d3648] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[56px] left-[79px] top-[126px] w-[200px]">
      <Checkbox className="absolute cursor-pointer left-0 top-0" />
    </div>
  );
}

function CharmTick() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="charm:tick">
      <div className="absolute inset-[-6.25%]">
        <svg className="block size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
          <g id="charm:tick">
            <rect fill="#FFFBFB" height="16" rx="2" width="16" x="1" y="1" />
            <rect height="16" rx="2" stroke="black" strokeWidth="2" width="16" x="1" y="1" />
            <path d={svgPaths.p1ee03600} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RemoveWishlistOverlay() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[328px] left-[calc(50%+0.5px)] overflow-clip rounded-[10px] top-1/2 w-[371px]" data-name="Remove Wishlist Overlay">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[116.5px] text-[25px] text-black text-center top-[52px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Remove CCA
      </p>
      <Frame10 />
      <Frame9 />
      <button className="absolute cursor-pointer left-[79px] top-[177px]" data-name="Checkbox">
        <div className="content-stretch flex gap-[10px] items-start relative size-full">
          <CharmTick />
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Remove from Interested only
          </p>
        </div>
      </button>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] left-[225.5px] text-[#6c6868] text-[13px] text-center top-[148px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        CCA will be removed from all other lists
      </p>
      <div className="absolute bg-[rgba(109,195,227,0.31)] border-3 border-black border-solid h-[57px] left-[230px] rounded-[16px] top-[230px] w-[116px]" />
    </div>
  );
}

function IPhone() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(148,143,143,0.47)] h-[874px] left-[calc(50%+1px)] overflow-clip top-[calc(50%-1px)] w-[402px]" data-name="iPhone 17 - 2">
      <RemoveWishlistOverlay />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 25 25" width="25">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3b768f80} fill="black" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p26787080} fill="black" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function CuidaEditOutline() {
  return (
    <div className="absolute overflow-clip right-[22px] size-[30px] top-[56px]" data-name="cuida:edit-outline">
      <Group />
    </div>
  );
}

export default function WishlistLandingPage() {
  return (
    <div className="bg-white relative size-full" data-name="Wishlist - Landing Page">
      <Frame5 />
      <Frame2 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Medium',sans-serif] font-[510] h-[17px] leading-[normal] left-[calc(50%-5px)] text-[20px] text-black text-center top-[59px] tracking-[2px] w-[118px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wishlist
      </p>
      <WishlistFilter className="absolute left-[calc(50%+29px)] size-[35px] top-[106px]" />
      <ChevronBackward className="absolute h-[45px] left-0 overflow-clip top-[45px] w-[49px]" />
      <Frame6 />
      <div className="absolute bg-white h-[80px] left-[13px] top-[794px] w-[375px]" data-name="WF Toolbar">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start relative size-full">
            <div className="bg-[#1a202c] h-[2px] relative shrink-0 w-full" data-name="Divider" />
            <ToolbarItems />
          </div>
        </div>
      </div>
      <Frame8 />
      <IPhone />
      <CuidaEditOutline />
    </div>
  );
}