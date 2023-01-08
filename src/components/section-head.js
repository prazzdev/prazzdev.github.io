function sectionHead(headText, target) {
    const element = document.getElementById(`${target}`);
    const result = element.innerHTML = `
        <div id="" class="flex flex-col items-center justify-center h-[18px] w-[3px] mr-2">
            <div id="" class="h-[9px] w-[3px] bg-red-400"></div>
            <div id="" class="h-[9px] w-[3px] bg-white"></div>
        </div>
        <h1 id="" class="h-[16px] font-semibold uppercase mb-2 tracking-wider text-white">${headText}</h1>
    </div>
    `;
    return result;
}