<script lang="ts" setup>
import type { Job } from "~/types/Job";

const { data: jobs } = useFetch<Job[]>("https://wheelwallet.cloud/jobs");
console.log(jobs);
</script>

<template>
    <Job v-for="job in jobs" :job="job" />
</template>

<style scoped></style>
