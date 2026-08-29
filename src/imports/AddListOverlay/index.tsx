export default function AddListOverlay() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] size-full" data-name="Add List Overlay">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[89.5px] text-[25px] text-black text-center top-[42px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Add List
      </p>
      <button className="absolute cursor-pointer left-[259px] top-[189px]" data-name="WF Button">
        <div className="content-stretch flex items-start relative size-full">
          <div className="bg-[#3a3a3a] h-[41px] relative rounded-[6px] shrink-0 w-[70px]" data-name="WF Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[18px] text-left text-white tracking-[-0.18px] whitespace-nowrap" style={{ fontFeatureSettings: '"calt" 0' }}>
                  Create
                </p>
              </div>
            </div>
          </div>
        </div>
      </button>
      <button className="absolute cursor-pointer left-[42px] top-[191px]" data-name="WF Button">
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
      <div className="-translate-y-1/2 absolute h-[51px] left-[42px] top-[calc(50%+0.5px)] w-[287px]" data-name="input">
        <div className="absolute bg-[#f2f2f2] inset-0" />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[31.03%_67.16%_27.59%_5.62%] leading-[normal] not-italic text-[20px] text-black whitespace-nowrap">List Name</p>
      </div>
    </div>
  );
}