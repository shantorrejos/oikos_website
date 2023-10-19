<template>
  <div
    class="flex justify-center items-center gap-[50px] my-[90px] w-[1200px] mx-auto flex-nowrap"
  >
    <div class="flex bg-element-41black h-[3px] w-full"></div>
    <div class="text-[24px] font-bold text-element-41black">
      <slot name="text1"></slot
      ><span class="text-element-b39pink"> <slot name="text2"></slot></span>
    </div>
    <div class="flex bg-element-41black h-[3px] w-full"></div>
  </div>
</template>
