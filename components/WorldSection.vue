<template>
    <div class="sm:p-16 xs:p-8 px-6 -mb-6 -mt-16 py-12">
        <div class="2xl:max-w-[1280px] w-full mx-auto flex flex-col">
            <h2 id="white_grad" class="mt-[8px] font-eudoxus font-bold md:text-[64px] text-[40px] text-center">Choose the lost world you want <br class="md:block hidden"> to explore</h2>
            <div class="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                <template v-for="i in explore" :key="i.id">
                    <div @click="handle_click()" :class="i.active === true ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'" class="relative flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer">
                        <NuxtImg class="absolute w-full h-full object-cover rounded-[24px]" :id="i.id" :src="i.img" :alt="i.title" quality="50" placeholder format="webp" />
                        <div :class="i.active === true ? 'absolute' : 'hidden'" class="bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
                            <div class="flex justify-center items-center bg-gray-500/50 w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]">
                                <NuxtImg src="/images/dinosaur-skull.png" format="webp" quality="80" alt="Dinosaur Skull" class="w-1/2 h-1/2 object-contain" />
                            </div>
                            <p class="font-eudoxus font-normal text-[16px] leading-[20.16px] text-white uppercase">{{ i.enter }}</p>
                            <h2 class="mt-[24px] font-eudoxus font-semibold sm:text-[32px] text-[24px] text-white">{{ i.title }}</h2>
                        </div>
                        <h3 :id="i.id" @click="handle_click()" :class="i.active === true ? 'hidden' : 'absolute'" class="font-eudoxus font-semibold sm:text-[26px] text-[18px] text-white z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">{{ i.title }}</h3>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
          explore: [
              {
                  "id": 1,
                  "active": false,
                  "img": "/neogene/preview.jpg",
                  "title": "Neogene Eon",
                  "enter": "Enter Neogene",
              },
              {
                  "id": 2,
                  "active": true,
                  "img": "/hadean/preview.jpg",
                  "title": "Hadean Eon",
                  "enter": "Enter Hadean",
              },
              {
                  "id": 3,
                  "active": false,
                  "img": "/archean/preview.jpg",
                  "title": "Archean Eon",
                  "enter": "Enter Archean",
              },
              {
                  "id": 4,
                  "active": false,
                  "img": "/carboniferous/preview.jpg",
                  "title": "Cretaceous Eon",
                  "enter": "Enter Cretaceous",
              },
              {
                  "id": 5,
                  "active": false,
                  "img": "/cambrian/preview.jpg",
                  "title": "Cambrian Eon",
                  "enter": "Enter Cambrian",
              },
          ],
        }
    },

    methods: {
        handle_click() {
            window.onclick = e => {
                this.explore.forEach((x) => {
                    if (x.id == e.target.id) {
                        this.explore.forEach((n) => {
                            if (n.active == true) {
                                n.active = false
                            }
                        })
                        x.active = true
                    }
                })
            }
        },
    }
}
</script>