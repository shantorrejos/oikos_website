<template>
  <q-layout view="hHh lpR fff">
    <q-header class="flex justify-between bg-white text-black" height-hint="98">
      <div class="flex p-4">
        <a @click="$router.push('/')" class="cursor-pointer">
          <img src="../assets/qweqw.png" width="170" class="ml-4" />
        </a>

        <div
          class="h-auto w-1 rounded bg-element-purple text-center mx-16"
        ></div>

        <!-- styles are overriden in app.scss -->
        <q-tabs align="left" class="text-element-purple">
          <q-route-tab to="/projects" label="Projects" class="mx-8" />
          <q-route-tab to="/page2" label="Community" class="mx-8" />
          <q-route-tab to="/page3" label="Donate" class="mx-8" />
          <q-route-tab to="/page4" label="Volunteer" class="mx-8" />
        </q-tabs>
      </div>

      <div class="flex p-4">
        <q-btn
          flat
          class="w-32 h-12 shadow-none text-nav font-bold text-element-purple"
        >
          Search
        </q-btn>
        <q-btn
          flat
          class="w-32 h-12 shadow-none text-nav font-bold text-element-purple"
        >
          Sign In
        </q-btn>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white text-white">
      <div class="bg-element-purple w-[80vw] h-[2px] mx-auto"></div>
      <div class="flex justify-center m-14">
        <!-- image and copyright -->
        <div class="flex flex-col justify-center">
          <img src="../assets/FooterLogo.png" class="w-[160px]" />
          <p class="text-element-purple text-center text-[10px]">
            ©The Oikos Foundation <br />
            Mandau City Cebu, Philippines
          </p>
        </div>
        <!-- details container -->
        <div class="ml-[70px] flex-col">
          <!-- div that holds the top -->
          <div class="flex gap-[50px]">
            <div class="flex flex-col">
              <p class="text-[18px] font-bold text-element-purple">
                COMMUNITIES
              </p>
              <a class="text-[16px] text-element-purpink">Agriculture</a>
              <a class="text-[16px] text-element-purpink">Education</a>
              <a class="text-[16px] text-element-purpink">Healthcare</a>
              <a class="text-[16px] text-element-purpink">Technology</a>
              <a class="text-[16px] text-element-purpink">Transportation</a>
            </div>

            <div class="flex flex-col">
              <p class="text-[18px] font-bold text-element-purple">OIKOS</p>
              <a class="text-[16px] text-element-purpink">About Us</a>
              <a class="text-[16px] text-element-purpink">Projects</a>
            </div>

            <div class="flex flex-col">
              <p class="text-[18px] font-bold text-element-purple">ACCOUNT</p>
              <a class="text-[16px] text-element-purpink">Profile</a>
              <a class="text-[16px] text-element-purpink">Manage</a>
              <a class="text-[16px] text-element-purpink">Log Out</a>
            </div>

            <div class="flex flex-col">
              <p class="text-[18px] font-bold text-element-purple">SUPPORT</p>
              <a class="text-[16px] text-element-purpink">Donate</a>
              <a class="text-[16px] text-element-purpink">Volunteer</a>
            </div>
          </div>
          <!-- div separator -->
          <div class="bg-element-purple w-[800px] h-[2px] my-8"></div>

          <!-- div that holds the bottom -->
          <div class="flex justify-between">
            <div class="flex flex-col">
              <p class="text-[18px] font-bold text-element-purple">
                CONTACT US
              </p>
              <a class="text-[14px] text-element-purpink font-bold">HOTLINE</a>
              <a class="text-[14px] text-element-purpink">0123456789</a>

              <a class="text-[14px] text-element-purpink font-bold mt-5"
                >EMAIL</a
              >
              <a class="text-[14px] text-element-purpink"
                >theoikosfoundation@gmail.com</a
              >
              <a class="text-[14px] text-element-purpink"
                >theoikosfoundation@yahoo.com</a
              >
            </div>

            <div class="flex flex-col">
              <p class="text-[18px] font-bold text-element-purple">
                FIND US HERE
              </p>
              <a class="text-[14px] text-element-purpink w-[300px]"
                >Lorem ipsum dolor sit amet, Curabitur tempor, Etiam viverra, ut
                molestie nisi varius. ty, 9000, Philippines</a
              >
            </div>

            <div class="flex flex-col">
              <q-btn outline rounded color="primary" class="w-[180px] mb-2"
                >FEEDBACK</q-btn
              >
              <a class="text-[14px] text-element-purpink text-right"
                >Have something to say? <br />
                We'd love to hear your feedback!</a
              >
            </div>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>
