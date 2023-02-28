<script setup>
const { sayHello } = useUtils();
sayHello();

const { $message, $secondMessage }  = useNuxtApp();

$message("WELCOME");
$secondMessage("Hoorey");

const apiData = await $fetch('/api/hello');
console.log("apiData", apiData);
</script>
<template>
  <div>
    <NuxtLayout>
      <Header />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
