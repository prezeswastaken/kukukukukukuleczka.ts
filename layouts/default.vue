<script lang="ts" setup>
useHead({
    title: "kukukukukukuleczka",
    meta: [{ name: "description", content: "Default layout for the app" }],
});
</script>

<template>
    <div
        class="flex flex-col items-center p-5 w-full min-h-screen text-main bg-bg font-poppins"
    >
        <NavBar />
        Layout: default
        <slot />
    </div>
</template>

<style scoped></style>
