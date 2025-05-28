<script setup>
import { Head, Link } from '@inertiajs/vue3';

const props = defineProps({
    months: Object
})
</script>

<template>
    <Head title="Reports"/>

    <div class="py-8">
        <div class="max-w-screen-2xl mx-auto px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-md dark:text-white border dark:border-gray-700 shadow-sm">
                <span class="font-bold text-2xl">Months</span>
                
                <div class="mt-4">
                    <Link v-for="month in months" :href="route('reports.show', {year: month.year, month: month.month})">{{ month.label }}</Link>
                </div>
            </div>
        </div>
    </div>
</template>