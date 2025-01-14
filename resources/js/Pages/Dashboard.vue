<script setup>
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    blocks: Number,
    lots_sold: Number,
    lots_available: Number,
})
</script>

<template>
    <Head title="Dashboard" />

    <div class="py-12">
        <div class="max-w-screen-2xl mx-auto sm:px-6 lg:px-8">
            <div class="grid grid-cols-4 gap-4">
                <div class="bg-white dark:bg-gray-800 dark:text-white rounded-md p-4 flex justify-between items-center">
                    <span>Blocks</span>
                    <span class="font-bold text-2xl">{{ blocks }}</span>
                </div>
                <div class="bg-white dark:bg-gray-800 dark:text-white rounded-md p-4 flex justify-between items-center">
                    <span>Lots sold</span>
                    <span class="font-bold text-2xl">{{ lots_sold }}</span>
                </div>
                <div class="bg-white dark:bg-gray-800 dark:text-white rounded-md p-4 flex justify-between items-center">
                    <span>Lots available</span>
                    <span class="font-bold text-2xl">{{ lots_available }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
