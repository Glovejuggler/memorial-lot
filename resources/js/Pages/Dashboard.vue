<script setup>
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    blocks: Number,
})
</script>

<template>
    <Head title="Dashboard" />

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="grid grid-cols-4 gap-4">
                <div class="bg-white dark:bg-gray-800 dark:text-white rounded-md p-4 flex justify-between items-center">
                    <span>Blocks</span>
                    <span class="font-bold text-2xl">{{ blocks }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
