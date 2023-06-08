<template>
  <div class=" w-full bg-white">
    <div class="p-4">
      <img class=" w-48" src="../img/SRAbout-a515fb4bc8724313ae51fa1d483572c6.jpeg" alt="" srcset="">
    </div>
    <h1 class="font-serif text-5xl p-4">The Simply Recipes Team</h1>
    <div class="grid md:grid-cols-1 sm:grid-cols-1 gap-3 m-auto">
      <div class=" w-[80%] p-5 ">
        <p class=" text-2xl leading-normal">Simply Recipes 是家庭廚師值得信賴的資源，
          擁有 3,000 多種經過測試的食譜、指南和膳食計劃，
          每月吸引來自世界各地的超過 1500 万讀者。 
          我們得到了一群食譜開發人員、美食作家、
          食譜和產品測試員、攝影師和其他創意專業人士的支持。
        </p>
      </div>
      <div class=" w-full h-58  flex items-center justify-center gap-10 p-4
      md:gap-20">

        <div class=" text-center">
            <img class="team" src="../img/team-1.jpg">
            <h1 class="text-[#004d4d] font-bold">Lori Rice</h1>
            <h2 class="text-[#117777] text-sm ">CONTRIBUTING WRITER</h2>
        </div>
        <div class=" text-center">
            <img class="team " src="../img/team-2.jpg">
              <h1 class="text-[#004d4d] font-bold"> Mike Lang</h1>
              <h2 class="text-[#117777] text-sm">CONTRIBUTING WRITER</h2>
             
        </div>
        <div class=" text-center">
            <img class="team " src="../img/team-3.jpg">
              <h1 class="text-[#004d4d] font-bold"> Kristy Mucci</h1>
              <h2  class="text-[#117777] text-sm">CONTRIBUTING WRITER</h2>
        </div>
        
      </div>
              
    </div>
  </div>
  
</template>
<style scoped>
  .team{
    width: 200px;
    height: 200px;
    border-radius: 100%;
    margin: 20px;
    background-color: beige;
    border: 1px #117777 solid ;
  }
  .team img{
    width: 100%;
    height: 100%;
  }
  
  @media not all and (min-width: 640px) { 
    .team{
    width: 120px;
    height: 120px;
    }
    h1,h2{
      padding-left: 20px;
    }
  }
</style>  

 




