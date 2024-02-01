"use strict";

let cards_wrapper = document.querySelector('cards_wrapper');

for (let i = 0; i < 10; i++) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <div class="card w-[230px] h-[410px]  bg-white rounded-[15px] relative">
        <img class=" px-[43px] pt-[40px] pb-[5px]" src="./assets/image/noutbuk.png" alt="image">
        <p class=" pl-[10px] text-[18px] font-[590px] text-[#0D63F3]">16 114 285 so'm</p>
        <p class="w-[197px] pl-[10px] text-[14px]">Apple Macbook Pro 13" 2.4 2019 Intel core i5 DDR3 8
        GB SSD 256 GB</p>
        <p class="pl-[10px] mt-[33px] mb-[25px] text-[#6C757D]">230 ta buyurtma</p>
        <div class="flex items-center gap-[20px]">
        <button class="py-[8px] w-[130px] bg-[#0D63F3] text-white rounded-[8px] ml-[10px]">Sotib
        olish</button>
        </div>
    </div>`;

    cards_wrapper.append(card);
}

