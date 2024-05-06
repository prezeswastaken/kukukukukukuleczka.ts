<script lang="ts" setup>
import type { PdfResponse } from "~/types/PdfResponse";

const cvString = useState("cvString") as Ref<string>;
const lines = cvString.value.split("\n");
const cvForm = useState("cvForm") as Ref<{
    years_of_experience: number;
    programming_languages: string[];
    soft_skills: string[];
    languages: string[];
}>;

let pdfLink = ref<string | null>(null);

onMounted(async () => {
    console.log(cvForm.value);
    const pdfResponse = await $fetch<PdfResponse>(
        "https://wheelwallet.cloud/pdf",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: { cv_string: cvString.value },
        },
    );
    pdfLink.value = pdfResponse.pdf_link;
});

const checkJobRequest = {
    years_of_experience: cvForm.value.years_of_experience,
    technologies: cvForm.value.programming_languages,
    soft_skills: cvForm.value.soft_skills,
    languages: cvForm.value.languages,
};
const { data: jobs } = await useFetch("https://wheelwallet.cloud/check-job", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: checkJobRequest,
});

console.log(jobs.value);
</script>

<template>
    <div class="flex flex-col justify-center items-center" v-auto-animate>
        <h1 class="mb-5 text-7xl font-bold uppercase text-secondary">
            twoje CV
        </h1>
        <div class="p-5 w-1/2 rounded-3xl bg-bg">
            <p v-for="line in lines">{{ line }}</p>
        </div>
        <NuxtLink
            v-if="pdfLink"
            :to="pdfLink"
            target="_blank"
            class="p-3 text-3xl duration-300 hover:text-teal-500 text-secondary bg-bg"
        >
            Link to PDF</NuxtLink
        >
        <div class="flex flex-col gap-3 mt-10">
            <JobResult
                v-for="job in jobs"
                :key="job.job.company"
                :jobResponse="job"
            />
        </div>
    </div>
</template>

<style scoped></style>
