<script lang="ts" setup>
const route = useRoute();
console.log(route.name);
</script>

<template>
    <div class="flex gap-5 items-center self-start py-2 px-5 uppercase">
        <NuxtLink to="/" class="text-2xl font-bold">
            <img
                src="https://i.ytimg.com/vi/8J-wNu6bEuM/maxresdefault.jpg"
                class="w-20 h-14 rounded-3xl"
            />
        </NuxtLink>
        <NuxtLink
            to="/"
            :class="`text-2xl font-bold duration-300 text-secondary hover:text-main ${route.name === 'index' ? 'text-teal-500' : 'text-secondary'}`"
            >Oferty pracy</NuxtLink
        >
        <NuxtLink
            to="/basic"
            :class="`text-2xl
            font-bold
            duration-300
hover:text-main ${route.name === 'basic' ? 'text-teal-500' : 'text-secondary'}`"
            >Start</NuxtLink
        >
    </div>
</template>

<style scoped></style>
