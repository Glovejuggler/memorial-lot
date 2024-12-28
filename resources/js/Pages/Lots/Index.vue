<script setup>
import TextInput from '@/Components/TextInput.vue';
import { Head, router } from '@inertiajs/vue3';
import { ref, watch } from 'vue';
TextInput

const props = defineProps({
    lots: Object,
    filters: Object
})

const searchForm = ref({
    search: props.filters.search
})

watch(
    searchForm,
    (value) => {
        router.get(route('lots.index'), value, {
            preserveState: true,
            preserveScroll: true,
            replace: true
        })
    },
    {
        deep: true,
    }
)
</script>

<template>
    <Head title="Lots"/>

    <div class="py-8">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <TextInput v-model="searchForm.search" type="text" class="lg:w-96 mt-4 lg:mt-0 w-full" placeholder="Search"/>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 mt-4">
                <div class="relative overflow-x-auto rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-100">
                        <thead class="text-xs text-gray-700 dark:text-gray-200 uppercase bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Contract Number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Owner
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Block Number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Lot Number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="lot in lots" class="bg-white dark:bg-gray-800 border-b dark:border-gray-700 last:border-none hover:bg-black/10 cursor-pointer">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap">
                                    {{ lot.contract_number ?? '-' }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ lot.owner ?? '-' }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ lot.block.block_number }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ lot.lot_number }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ lot.price.toAmountFormat() }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>