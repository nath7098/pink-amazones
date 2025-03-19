<template>
  <div class="container mx-auto p-4 max-w-full">
    <!-- Title section with logo -->
    <div class="flex items-center mb-8">
      <USkeleton class="w-20 h-20 rounded-full" />
      <div class="ml-4 flex-1">
        <USkeleton class="h-7 w-64 mb-2" />
        <USkeleton class="h-5 w-40" />
      </div>
      <div class="flex space-x-2">
        <USkeleton class="w-8 h-6" />
        <USkeleton class="w-8 h-6" />
      </div>
    </div>

    <!-- Tabs section -->
    <div class="grid grid-cols-3 gap-4 mb-6">
      <USkeleton class="h-14 rounded-md bg-pink-100" />
      <USkeleton class="h-14 rounded-md" />
      <USkeleton class="h-14 rounded-md" />
    </div>

    <!-- Main form section - two columns on larger screens -->
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Left column - donation options -->
      <div class="space-y-6">
        <!-- Donation frequency buttons -->
        <div class="flex mb-4">
          <USkeleton class="h-10 w-32 rounded-md mr-2" />
          <USkeleton class="h-10 w-32 rounded-md" />
        </div>

        <!-- Amount buttons -->
        <div class="grid grid-cols-4 gap-2 mb-4">
          <USkeleton class="h-12 rounded-md" />
          <USkeleton class="h-12 rounded-md" />
          <USkeleton class="h-12 rounded-md" />
          <USkeleton class="h-12 rounded-md" />
        </div>

        <!-- Custom amount field -->
        <div class="flex items-center">
          <USkeleton class="h-10 flex-1 rounded-md mr-2" />
          <USkeleton class="h-10 w-8 rounded-md" />
        </div>
      </div>

      <!-- Right column - form fields -->
      <div class="space-y-6">
        <!-- Checkbox -->
        <div class="flex items-start">
          <USkeleton class="w-5 h-5 mt-1 mr-2" />
          <USkeleton class="h-6 w-full" />
        </div>

        <!-- Form fields -->
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <USkeleton class="h-5 w-20 mb-2" />
              <USkeleton class="h-12 w-full rounded-md" />
            </div>
            <div>
              <USkeleton class="h-5 w-20 mb-2" />
              <USkeleton class="h-12 w-full rounded-md" />
            </div>
          </div>

          <div>
            <USkeleton class="h-5 w-20 mb-2" />
            <USkeleton class="h-12 w-full rounded-md" />
          </div>

          <div>
            <USkeleton class="h-5 w-20 mb-2" />
            <USkeleton class="h-12 w-full rounded-md" />
          </div>

          <div>
            <USkeleton class="h-5 w-20 mb-2" />
            <USkeleton class="h-12 w-full rounded-md" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <USkeleton class="h-5 w-20 mb-2" />
              <USkeleton class="h-12 w-full rounded-md" />
            </div>
            <div>
              <USkeleton class="h-5 w-20 mb-2" />
              <USkeleton class="h-12 w-full rounded-md" />
            </div>
          </div>

          <div>
            <USkeleton class="h-5 w-20 mb-2" />
            <USkeleton class="h-12 w-full rounded-md" />
          </div>
        </div>

        <!-- Summary table -->
        <div class="border rounded-lg p-4 mt-6">
          <USkeleton class="h-6 w-32 mb-4" />
          <div class="space-y-2">
            <div class="flex justify-between">
              <USkeleton class="h-5 w-24" />
              <USkeleton class="h-5 w-16" />
            </div>
            <div class="flex justify-between">
              <USkeleton class="h-5 w-40" />
              <USkeleton class="h-5 w-16" />
            </div>
            <div class="flex justify-between">
              <USkeleton class="h-5 w-20" />
              <USkeleton class="h-5 w-16" />
            </div>
          </div>
        </div>

        <!-- Terms and pay button -->
        <div class="space-y-4">
          <div class="flex items-start">
            <USkeleton class="w-5 h-5 mt-1 mr-2" />
            <USkeleton class="h-5 w-full" />
          </div>
          <USkeleton class="h-12 w-full bg-gray-100 rounded-md" />
        </div>

        <!-- Payment security -->
        <div class="flex items-center justify-between mt-4">
          <USkeleton class="h-6 w-32" />
          <div class="flex space-x-2">
            <USkeleton class="h-8 w-12" />
            <USkeleton class="h-8 w-12" />
            <USkeleton class="h-8 w-12" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>