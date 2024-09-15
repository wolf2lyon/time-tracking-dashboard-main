export const FirstCard = () => {
    const templateHtml = `<div class="animate-zoomIn flex flex-col w-[327px] h-[203px] min-h-[203px] bg-neutral_darkBlue text-neutral_desaturated rounded-2xl gap-6 xl:row-start-1  xl:row-end-3 xl:min-h-[518px] xl:max-w-[255px] ">
      <div class="flex gap-5 w-full justify-center items-center h-[133px] bg-primary rounded-2xl xl:flex-col xl:min-h-[354px]">
        <div class="flex gap-5 xl:flex-col xl:w-4/5 xl:h-4/5">
          <div class="xl:mb-5">
            <img src="../images/image-jeremy.png" alt="image-jeremy" class="w-16 rounded-full border-4 border-white xl:w-20">
          </div>
          <div>
            <h1 class="text-neutral_paleBlue">
              Report for
            </br>
              <strong class="font-thin text-2xl text-white xl:text-4xl">Jeremy Robson</strong>
            </h1>
          </div>
        </div>
      </div>
      <div id="buttons" class="grid grid-cols-3 grid-rows-1 justify-items-center items-center xl:grid-cols-1 xl:grid-rows-3 xl:h-full xl:justify-items-start xl:items-start">
        <button class="xl:ml-8 hover:text-white cursor-pointer text-white" data-value="daily">Daily</button>
        <button class="xl:ml-8 hover:text-white cursor-pointer" data-value="weekly">Weekly</button>
        <button class="xl:ml-8 hover:text-white cursor-pointer" data-value="monthly">Monthly</button>
      </div>
    </div>`

    return templateHtml
}