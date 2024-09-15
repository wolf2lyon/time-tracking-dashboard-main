export const Card = ({ title, current, previous }) => {
  const titleLowerCase = title.toLowerCase();
  const templateHtml = `<div class="animate-zoomIn w-[327px] h-[160px] min-h-[160px] relative rounded-2xl overflow-hidden xl:w-[255px] xl:min-h-[245px]">
    <div id="card_load" class="hidden absolute inset-0 bg-neutral_darkBlue z-30  items-center justify-center">
        <div class="z-40">
          <svg class="animate-spin h-5 w-5 text-white z-50" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>  
    <div class="relative w-full h-4/5 bg-primary_${
      titleLowerCase === "self care" ? "selfCare" : titleLowerCase
    }">
        <img src="../images/icon-${
          titleLowerCase === "self care" ? "self-care" : titleLowerCase
        }.svg" alt="icon-work" class="absolute z-0 right-[15px] top-[-10px]">
      </div>
      <div class="grid grid-cols-12 grid-rows-5 w-full h-[122px] bg-neutral_darkBlue top-[38px] absolute z-10 rounded-2xl xl:h-[200px] xl:pb-8 xl:hover:bg-neutral_hover xl:cursor-pointer">
        <p class="row-start-2 col-start-2 font-semibold xl:self-center xl:pb-3  whitespace-nowrap">${title}</p>
        <p class="row-start-3 row-end-5 col-start-2 text-[32px] xl:col-end-9 xl:text-[56px] xl:self-center">${current}hrs</p>
        <div class="row-start-2 col-start-7 col-end-12 justify-self-end self-center xl:self-center xl:pb-3">
          <img src="../images/icon-ellipsis.svg" alt="icon-ellipsis">
        </div>
        <p class="row-start-3 row-end-5 col-start-7 col-end-12 self-center justify-self-end text-neutral_paleBlue whitespace-nowrap xl:row-start-5 xl:row-end-6 xl:col-start-2 xl:col-end-9 xl:justify-self-start xl:self-end">Last Week - ${previous}hrs</p>
      </div>
    </div>`;
  return templateHtml;
};
