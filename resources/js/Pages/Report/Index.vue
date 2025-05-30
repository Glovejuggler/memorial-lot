<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Payment from '@/Components/Payment.vue';

const props = defineProps({
    months: Object
})

const getMonthDate = (month) => {
    return new Date(month.year, month.month - 1).toLocaleString('en-US', {month: 'long', year: 'numeric'})
}
</script>

<template>
    <Head title="Reports"/>

    <div class="py-8">
        <div class="max-w-screen-2xl mx-auto px-6 lg:px-8">
            <Payment class="mb-8"/>
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-md dark:text-white border dark:border-gray-700 shadow-sm">
                <span class="font-bold text-lg">Monthly Report</span>
                
                <div class="mt-4">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-100">
                        <thead class="text-xs text-gray-700 dark:text-gray-200 uppercase bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" class="p-3">
                                    Month
                                </th>
                                <th scope="col" class="p-3">
                                    Lots sold
                                </th>
                                <th scope="col" class="p-3">
                                    Sales
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="month in months" @click="$inertia.get(route('reports.show', {year: month.year, month: month.month}))" class="bg-white dark:bg-gray-800 border-b dark:border-gray-700 last:border-none hover:bg-black/10 cursor-pointer">
                                <th scope="row" class="px-2 py-4 font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap">
                                    {{ getMonthDate(month) }}
                                </th>
                                <td class="px-2 py-4">
                                    {{ month.lots_sold }}
                                </td>
                                <td class="px-2 py-4">
                                    {{ Number(month.sales).toLocaleString() }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>