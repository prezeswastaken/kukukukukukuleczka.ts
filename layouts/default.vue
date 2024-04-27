<script lang="ts" setup>
useHead({
    title: "kukukukukukuleczka",
    meta: [{ name: "description", content: "Default layout for the app" }],
});
</script>

<template>
    <div
        class="flex flex-col items-center w-full min-h-screen text-main bg-bg font-poppins bg-[url('https://wallpaperaccess.com/full/8881418.gif')] bg-cover"
    >
        <div
            class="flex flex-col items-center p-5 w-full min-h-screen bg-opacity-10 text-main bg-bg font-poppins"
        >
            <NavBar />
            <slot />
        </div>
    </div>
</template>

<style scoped></style>
