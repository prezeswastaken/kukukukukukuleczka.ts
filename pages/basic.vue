<script lang="ts" setup>
import { Technology } from "~/enums/ProgrammingLanguage";
import { Language } from "~/enums/Language";
import type { basicCreateResponse } from "~/types/basicCreateResponse";
import type { BasicForm } from "~/types/basicForm";

const cvString = useState("cvString", () => "");
const cvForm = useState("cvForm", () => ({
    full_name: "",
    email: "",
    programming_languages: [""],
    education_level: "",
    languages: [""],
    years_of_experience: -1,
    soft_skills: 0,
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
    programming_languages: [],
    education_level: "",
    languages: [],
    years_of_experience: -1,
    soft_skills: 0,
});

async function handleSubmit() {
    loading.value = true;
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
            <h1 class="text-secondary">Imię i nazwisko</h1>
            <input
                v-model="form.full_name"
                type="text"
                class="py-2 px-3 border bg-bg border-secondary"
                autofocus
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
            <h1 class="text-secondary">Poziom edukacji</h1>
            <input
                v-model="form.education_level"
                type="text"
                class="py-2 px-3 border bg-bg border-secondary"
            />
        </div>
        <div
            class="flex gap-5 justify-between items-center"
            v-if="form.education_level != ''"
        >
            <h1 class="text-secondary">Znane technologie</h1>
            <select
                v-model="form.programming_languages"
                type="text"
                class="py-2 px-3 border bg-bg border-secondary"
                multiple
            >
                PENES
                <option
                    v-for="technology in Object.values(Technology)"
                    :key="technology"
                    :value="technology"
                >
                    {{ technology }}
                </option>
            </select>
        </div>
        <div
            class="flex gap-5 justify-between items-center"
            v-if="form.programming_languages.length >= 1"
        >
            <h1 class="text-secondary">Znane języki</h1>
            <select
                v-model="form.languages"
                type="text"
                class="py-2 px-3 border bg-bg border-secondary"
                multiple
            >
                PENES
                <option
                    v-for="language in Object.values(Language)"
                    :key="language"
                    :value="language"
                >
                    {{ language }}
                </option>
            </select>
        </div>
        <div
            class="flex gap-5 justify-between items-center"
            v-if="form.languages.length >= 1"
        >
            <h1 class="text-secondary">Lata doświadczenie</h1>
            <input
                v-model="form.years_of_experience"
                type="number"
                class="py-2 px-3 border bg-bg border-secondary"
            />
        </div>
        <div
            class="flex gap-5 justify-between items-center"
            v-if="form.years_of_experience != -1"
        >
            <h1 class="text-secondary">
                Oceń swoje umiejętności miękkie (w skali od 1 do 3)
            </h1>
            <input
                v-model="form.soft_skills"
                type="number"
                class="py-2 px-3 border bg-bg border-secondary"
            />
        </div>
        <button
            class="py-2 px-3 text-white rounded-md bg-primary"
            v-if="form.soft_skills != 0"
        >
            Submit
        </button>
    </form>
    <Loading v-if="loading" />
</template>

<style scoped></style>
