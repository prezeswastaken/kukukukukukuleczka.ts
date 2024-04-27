<script lang="ts" setup>
import type { basicCreateResponse } from "~/types/basicCreateResponse";
import type { BasicForm } from "~/types/basicForm";

const cvString = useState("cvString", () => "");
const cvForm = useState("cvForm", () => ({
    full_name: "",
    email: "",
    programming_languages: [""],
    education_level: "",
    programming_languages_string: "",
}));

onMounted(async () => {
    const response = await useFetch("https://wheelwallet.cloud", {
        method: "GET",
    });
    console.log(response.data);
});

const loading = ref(false);

const form = ref<BasicForm>({
    full_name: "",
    email: "",
    programming_languages_string: "",
    programming_languages: [],
    education_level: "",
});

async function handleSubmit() {
    loading.value = true;
    form.value.programming_languages = form.value.programming_languages_string
        .split(",")
        .map((lang) => lang.trim());
    const response = await useFetch("https://wheelwallet.cloud/basic/create", {
        method: "POST",
        body: form.value,
    });
    loading.value = false;
    console.log("Status code of response:", response);
    const data = response.data.value as basicCreateResponse;
    console.log("Data from response:", data);
    cvString.value = data.message;
    console.log("CV string from useState:", cvString.value);
    cvForm.value = form.value;
    navigateTo("/cv-edit");
}
</script>

<template>
    <form
        @submit.prevent="handleSubmit"
        class="flex flex-col gap-5 items-end"
        v-auto-animate
    >
        <div class="flex gap-5 justify-between items-center">
            <h1 class="text-secondary">Full name</h1>
            <input
                autofocus
                v-model="form.full_name"
                type="text"
                class="py-2 px-3 border bg-bg border-secondary"
            />
        </div>
        <div
            class="flex gap-5 justify-between items-center"
            v-if="form.full_name != ''"
        >
            <h1 class="text-secondary">Email</h1>
            <input
                v-model="form.email"
                type="email"
                class="py-2 px-3 border bg-bg border-secondary"
            />
        </div>
        <div
            class="flex gap-5 justify-between items-center"
            v-if="form.email != ''"
        >
            <h1 class="w-40 text-secondary">
                Programming languages (seperated by commas)
            </h1>
            <input
                v-model="form.programming_languages_string"
                type="text"
                class="py-2 px-3 border bg-bg border-secondary"
            />
        </div>
        <div
            class="flex gap-5 justify-between items-center"
            v-if="form.programming_languages_string != ''"
        >
            <h1 class="text-secondary">Education level</h1>
            <input
                v-model="form.education_level"
                type="text"
                class="py-2 px-3 border bg-bg border-secondary"
            />
        </div>
        <button
            class="py-2 px-3 text-white rounded-md bg-primary"
            v-if="form.education_level != ''"
        >
            Submit
        </button>
    </form>
    <Loading v-if="loading" />
</template>

<style scoped></style>
