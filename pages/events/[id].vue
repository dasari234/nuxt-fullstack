<script setup>
 const nuxt = useNuxtApp();
 const router = useRouter();
 console.log(router.params.id)
 console.log(nuxt)
</script>
<template>
    <div>event id : {{ $route.params.id }}</div>
</template>