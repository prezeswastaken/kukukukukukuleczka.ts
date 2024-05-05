<script lang="ts" setup>
import { JobCheckResult } from "~/enums/JobCheckResults";
import type { JobResponse } from "~/types/JobResponse";

const props = defineProps({
    jobResponse: {
        type: Object as PropType<JobResponse>,
        required: true,
    },
});

let colorClass = ref("");
onMounted(() => {
    console.log(props.jobResponse.result);
    switch (props.jobResponse.result) {
        case JobCheckResult.Good:
            colorClass.value = "text-green-500";
            break;
        case JobCheckResult.Maybe:
            colorClass.value = "text-yellow-500";
            break;
        case JobCheckResult.Bad:
            colorClass.value = "text-red-500";
            break;
    }
    console.log(colorClass.value);
});
</script>

<template>
    <div :class="'p-10 rounded-3xl bg-bg ' + colorClass">
        <p>{{ jobResponse.job.company }}</p>
        <p>{{ jobResponse.job.title }}</p>
    </div>
</template>

<style scoped></style>
