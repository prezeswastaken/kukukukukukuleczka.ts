<script lang="ts" setup>
import type { BasicForm } from "~/types/basicForm";

onMounted(async () => {
    const response = await useFetch("https://wheelwallet.cloud", {
        method: "GET",
    });
    console.log(response.data);
});

const form = ref<BasicForm>({
    full_name: "",
    email: "",
    programming_languages_string: "",
    programming_languages: [],
    education_level: "",
});

async function handleSubmit() {
    form.value.programming_languages = form.value.programming_languages_string
        .split(",")
        .map((lang) => lang.trim());
    const response = await useFetch("https://wheelwallet.cloud/basic/create", {
        method: "POST",
        body: form.value,
    });
    // const response = await fetch("https://wheelwallet.cloud/basic/create", {
    //     method: "POST",
    //     body: JSON.stringify(form.value),
    // });
    console.log("Status code of response:", response);
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-5 items-end">
        <div class="flex gap-5 justify-between items-center">
            <h1 class="text-secondary">Full name</h1>
            <input
                v-model="form.full_name"
                type="text"
                class="py-2 px-3 border bg-bg border-secondary"
            />
        </div>
        <div class="flex gap-5 justify-between items-center">
            <h1 class="text-secondary">Email</h1>
            <input
                v-model="form.email"
                type="email"
                class="py-2 px-3 border bg-bg border-secondary"
            />
        </div>
        <div class="flex gap-5 justify-between items-center">
            <h1 class="text-secondary">
                Programming languages (seperated by commas)
            </h1>
            <input
                v-model="form.programming_languages_string"
                type="text"
                class="py-2 px-3 border bg-bg border-secondary"
            />
        </div>
        <div class="flex gap-5 justify-between items-center">
            <h1 class="text-secondary">Education level</h1>
            <input
                v-model="form.education_level"
                type="text"
                class="py-2 px-3 border bg-bg border-secondary"
            />
        </div>
        <button class="py-2 px-3 text-white rounded-md bg-primary">
            Submit
        </button>
    </form>
</template>

<style scoped></style>
