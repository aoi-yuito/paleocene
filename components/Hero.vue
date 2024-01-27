<template>
    <div class="dark:bg-transparent bg-white pb-6 sm:pb-8 lg:pb-12">
       <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
             <!-- logo - start -->
             <NuxtLink to="/" class="inline-flex items-center text-2xl font-bold dark:text-white text-black md:text-3xl">
                <NuxtImg class="h-auto w-6 mr-2" src="/images/dinosaur-skull.png" format="webp" quality="80" alt="Dinosaur-Skull Logo" />
                Paleocene<span class="text-blue-600">.</span>
             </NuxtLink>
             <!-- logo - end -->
             <!-- nav - start -->
             <nav class="hidden gap-12 lg:flex">
                <NuxtLink to="/articles" class="text-lg group font-semibold text-gray-400 transition duration-100 hover:text-blue-600 active:text-blue-700">
                  Articles
                  <div class="bg-[radial-gradient(closest-side,#7c3aed,#2563eb,transparent)] h-1 transition duration-100 opacity-0 group-hover:opacity-100"></div>
                </NuxtLink>

                <NuxtLink to="#" class="text-lg group font-semibold text-gray-400 transition duration-100 hover:text-blue-600 active:text-blue-700">
                  Teams
                  <div class="bg-[radial-gradient(closest-side,#7c3aed,#2563eb,transparent)] h-1 transition duration-100 opacity-0 group-hover:opacity-100"></div>
                </NuxtLink>

                <NuxtLink to="#" class="text-lg group font-semibold text-gray-400 transition duration-100 hover:text-blue-600 active:text-blue-700">
                  Pricing
                  <div class="bg-[radial-gradient(closest-side,#7c3aed,#2563eb,transparent)] h-1 transition duration-100 opacity-0 group-hover:opacity-100"></div>
                </NuxtLink>

                <NuxtLink to="#" class="text-lg group font-semibold text-gray-400 transition duration-100 hover:text-blue-600 active:text-blue-700">
                  About
                  <div class="bg-[radial-gradient(closest-side,#7c3aed,#2563eb,transparent)] h-1 transition duration-100 opacity-0 group-hover:opacity-100"></div>
                </NuxtLink>
             </nav>
             <!-- nav - end -->
             <!-- buttons - start -->
             <a href="#" class="hidden rounded-lg bg-blue-700 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-blue-800 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact Sales</a>
             <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                   <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                Menu
             </button>
             <!-- buttons - end -->
          </header>

          <section class="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
             <!-- content - start -->
             <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
                <span class="mb-4 font-semibold w-72 rounded-3xl p-2 text-blue-600 md:mb-6 md:text-lg xl:text-xl">
                  <div class="inline-block">
                     <svg class="sparkle rotate-180 text-blue-600 mr-1 -mb-2 h-auto w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </div>
                  Very proud to introduce
                  </span>
                <h1 class="mb-4 text-4xl font-bold dark:text-white text-black sm:text-5xl md:mb-6 md:text-6xl">Explore the most ancient creatures</h1>
                <p class="mb-4 text-justify font-semibold tracking-wide md:mb-12 text-[#798193] md:text-lg lg:text-base dark:text-gray-400">Welcome to the Lost World! Our fully virtual interactive platform will take you back to the time when these fantastic creatures ruled the entire planet. Discover Earth's ancient history with us.</p>
                <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                   <NuxtLink href="#" class="button inline-flex rounded-lg bg-blue-700 px-4 py-3 text-center items-center justify-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-800 focus-visible:ring active:bg-blue-700 md:text-base">
                     <NuxtImg class="w-7 h-7 mr-2" src="/images/dinosaur-skull.png" format="webp" quality="80" alt="Dino Skull" />
                     <!--<img id="button__cone" class="im" src="/images/skull.png" alt="" />-->
                     <NuxtImg id="button__torus" class="im" src="/images/bones.png" format="webp" quality="80" alt="Bone" />
                     <NuxtImg id="button__icosahedron" class="im" src="/images/primitive.png" format="webp" quality="80" alt="Primitive" />
                     <NuxtImg id="button__sphere" class="im" src="/images/amber.png" format="webp" quality="80" alt="Amber" />
                     Get Started
                   </NuxtLink>
                   <NuxtLink href="#" class="button inline-flex rounded-lg text-gray-100 bg-[#171C26] hover:bg-[#30353d] px-4 py-3 text-center items-center justify-center text-sm font-semibold outline-none ring-indigo-300 transition duration-100 focus-visible:ring active:text-gray-700 md:text-base">
                     <NuxtImg class="w-7 h-7 mr-2" src="/images/play.png" format="webp" quality="80" alt="Play Button" />
                     <NuxtImg class="im" id="button__cone" src="/images/cone.png" format="webp" quality="80" alt="Cone" />
                     <NuxtImg class="im" id="button__torus" src="/images/torus.png" format="webp" quality="80" alt="Torus" />
                     <NuxtImg class="im" id="button__icosahedron" src="/images/icosahedron.png" format="webp" quality="80" alt="Icosahedron" />
                     <NuxtImg class="im" id="button__sphere" src="/images/sphere.png" format="webp" quality="80" alt="Sphere" />
                     Watch Intro
                   </NuxtLink>
                </div>
             </div>
             <!-- content - end -->
             <!-- image - start -->
             <div class="h-48 overflow-hidden rounded-lg lg:mt-[52px] xl:mt-[53px] bg-gray-100 shadow-lg lg:h-96 xl:w-5/12">
                <NuxtImg src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000" format="webp" quality="80"  alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
             </div>
             <!-- image - end -->
          </section>

          <section class="flex flex-col items-center justify-between gap-10 dark:border-gray-700 border-t pt-8 lg:flex-row lg:gap-8">
             <!-- stats - start -->
             <div class="-mx-6 grid grid-cols-2 gap-4 dark:divide-gray-700 md:-mx-8 md:flex md:divide-x">
                <div class="px-6 md:px-8">
                   <span class="block text-center text-lg font-bold text-blue-600 md:text-left md:text-xl">200</span>
                   <span class="block text-center text-sm font-extrabold text-gray-400 md:text-left md:text-base">People</span>
                </div>

                <div class="px-6 md:px-8">
                   <span class="block text-center text-lg font-bold text-blue-600 md:text-left md:text-xl">500+</span>
                   <span class="block text-center text-sm font-extrabold text-gray-400 md:text-left md:text-base">Projects</span>
                </div>

                <div class="px-6 md:px-8">
                   <span class="block text-center text-lg font-bold text-blue-600 md:text-left md:text-xl">250+</span>
                   <span class="block text-center text-sm font-extrabold text-gray-400 md:text-left md:text-base">Customers</span>
                </div>

                <div class="px-6 md:px-8">
                   <span class="block text-center text-lg font-bold text-blue-600 md:text-left md:text-xl">A couple</span>
                   <span class="block text-center text-sm font-extrabold text-gray-400 md:text-left md:text-base">Coffee breaks</span>
                </div>
             </div>
             <!-- stats - end -->
             <!-- social - start -->
             <div class="flex items-center justify-center gap-4 lg:justify-start">
                <span class="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">Social</span>

                <span class="h-px w-12 bg-gray-200"></span>

                <div class="flex gap-4">
                   <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" aria-label="instagram">
                      <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                   </a>
                   <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" aria-label="twitter">
                      <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                   </a>
                   <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" aria-label="linkedIn">
                      <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                   </a>
                   <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" aria-label="github">
                      <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                   </a>
                </div>
             </div>
             <!-- social - end -->
          </section>
       </div>
    </div>
</template>

<script setup>
useHead({
   title: "Paleocene",
   meta: [
      { name: "description", content: "A nice cozy interactive educational website built for learning paleontology with a dedicated community working behind." },
      {
         hid: "og:image",
         property: "og:image",
         content: `/home.jpg`,
      },
   ],
})
</script>