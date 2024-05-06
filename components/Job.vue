<script lang="ts" setup>
import type { Job } from "~/types/Job";

defineProps({
    job: Object as PropType<Job>,
});
</script>

<template>
    <div class="flex flex-col p-10 mt-5 rounded-3xl bg-bg">
        <h1 class="text-2xl font-bold">{{ job?.title }}</h1>
        <p>{{ job?.company }}</p>
        <p>Stanowisko: {{ job?.title }}</p>
        <p>Wymagane lata doświadczenia: {{ job?.years_of_experience }}</p>
        <p>Wymagane technologie: {{ job?.technologies.join(", ") }}</p>
        <p>Wymagane języki: {{ job?.languages.join(", ") }}</p>
        <p>
            Wymagany poziom umiejętności miękkich (od 1 do 3):
            {{ job?.soft_skiills }}
        </p>
    </div>
</template>

<style scoped></style>
