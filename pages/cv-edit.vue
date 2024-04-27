<script lang="ts" setup>
const cvString = useState("cvString") as Ref<string>;
const lines = cvString.value.split("\n");
const cvForm = useState("cvForm");
onMounted(() => {
    console.log(cvForm.value);
});
</script>

<template>
    <h1 class="mb-5 text-7xl font-bold uppercase text-secondary">twoje CV</h1>
    <div class="p-5 w-1/2 rounded-3xl bg-bg">
        <p v-for="line in lines">{{ line }}</p>
    </div>
    <button
        class="p-5 py-2 px-3 mt-3 rounded-3xl duration-300 hover:text-teal-500 bg-primary text-secondary bg-bg"
        @click="console.log('generating pdf...')"
    >
        WYGENERUJ PLIK PDF I OCEŃ OFERTY PRACY
    </button>
</template>

<style scoped></style>
