<template>
  <section id="projects" class="w-full py-24 px-8 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-semibold text-gray-900 mb-12 text-center tracking-tight">
        PROJECTS
      </h2>
      <div class="space-y-20">
        <!-- Wabbit Project -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-gray-900">
            Wabbit 🐰 The Job Search Cadence Tool
          </h3>
          <div class="text-base leading-relaxed text-gray-600 space-y-4">
            <p>
              The Job search is hard. It takes a long time and requires patience. Most important is organization,
              which suffers the more "frustrated" we get during our search. We tend to then revert to blasting out resumes with little to no research.
            </p>
            <p>
              This is why I built Wabbit - an application to help job seekers easily stay organized and targeted
              for their job search. Gone are the days of just sending applications without thought.
            </p>
            <p>
              This is a app I felt I needed and will be using throughout my search.
            </p>
            <p>
              Give it a spin at 👉 
              <a 
                href="https://www.wabbit-hunt.com" 
                target="_blank"
                class="inline-block mt-4 px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                www.wabbit-hunt.com
              </a>
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <img 
              src="/assets/dashboard.png" 
              alt="Wabbit Dashboard"
              class="w-full rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
            <iframe
              class="w-full rounded-lg border border-gray-200 shadow-sm"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/J39o3go97gk?si=kFGcnicODBBlN4Is"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
              src="/assets/job.png" 
              alt="Wabbit Job View"
              class="w-full rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
            <img 
              src="/assets/compensation.png" 
              alt="Wabbit Compensation View"
              class="w-full rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
          </div>
        </div>

        <!-- Earn & Burn Project -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-gray-900">
            Earn & Burn 🔥 The Financial Planner
          </h3>
          <div class="text-base leading-relaxed text-gray-600">
            <p>
              This full-stack application helps users easily input and edit simple personal financial data and get
              a quick snapshot of their financial position so the user can make well-informed decisions when
              planning their month.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img 
              src="/assets/earn_burn/dashboard.png" 
              alt="Earn & Burn Dashboard"
              class="w-full rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
            <iframe
              class="w-full rounded-lg border border-gray-200 shadow-sm"
              width="640"
              height="360"
              src="https://www.loom.com/embed/83a8a0c49308483396445cebe7f4ae51?sid=5de9a455-f304-405b-8f4a-8e7395af5ef1"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
            <img 
              src="/assets/earn_burn/login.png" 
              alt="Earn & Burn Login"
              class="w-full rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for this component
</script>

