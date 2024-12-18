<script setup>
import { Head, useForm, router } from '@inertiajs/vue3';
import { nextTick, ref, watch } from 'vue';
import Modal from '@/Components/Modal.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    blocks: Object,
    filters: Object,
    errors: Object,
})

const createBlockModal = ref(false)
const blockName = ref(null)
const newBlock = useForm({
    name: '',
    control_number: '',
    block_number: '',
})

const searchForm = ref({
    search: props.filters.search,
})

watch(
    searchForm,
    (value) => {
        router.get(route('blocks.index'), value, {
            preserveState: true,
            preserveScroll: true,
            replace: true
        })
    },
    {
        deep: true,
    }
)

const submitNewBlock = () => {
    newBlock.post(route('blocks.store'), {
        preserveState: (page) => Object.keys(page.props.errors).length > 0,
        preserveScroll: true,
    })
}
</script>

<template>
    <Head title="Memorial"/>
    
    <div class="pt-4 pb-8">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="lg:flex justify-between items-center sticky top-0 dark:bg-gray-900 bg-gray-100 py-4">
                <div>
                    <span class="dark:text-white text-lg font-bold mr-4">Blocks</span>
                    <button @click="() => {
                        createBlockModal = true

                        nextTick(() => blockName.focus())
                    }" class="bg-blue-500 px-4 text-sm rounded-md text-white hover:bg-blue-700 active:bg-blue-800 ease-in-out duration-200">Add new</button>
                </div>
                
                <TextInput v-model="searchForm.search" type="text" class="lg:w-96 mt-4 lg:mt-0 w-full" placeholder="Search"/>
            </div>

            <!-- Blocks -->
            <div v-if="blocks.length" class="grid lg:grid-cols-4 grid-cols-1 mt-4 gap-4">
                <div @click="router.get(route('blocks.show', block))" class="w-full lg:aspect-video rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800 p-4 dark:text-white flex flex-col cursor-pointer hover:shadow-md dark:hover:bg-gray-700 ease-in-out duration-200" v-for="block in blocks">
                    <span>Name: {{ block.name }}</span>
                    <span>Control number: {{ block.control_number }}</span>
                    <span>Block number: {{ block.block_number }}</span>
                    <span>Available lots: {{ block.lots_count - block.acquired_lots_count }}</span>
                </div>
            </div>

            <div v-else class="flex justify-center mt-12 dark:text-gray-400 text-gray-700">
                <span>No data.</span>
            </div>
        </div>
    </div>

    <!-- Create Block Modal -->
    <Modal :show="createBlockModal" @close="createBlockModal = false">
        <div class="p-4 dark:text-white">
            <InputLabel for="name" value="Block name"/>
            <TextInput ref="blockName" @keyup.enter="submitNewBlock" id="name" type="text" class="mt-1 block w-full" v-model="newBlock.name"/>
            <span v-if="errors.name" class="text-sm text-red-500">{{ errors.name }}</span>
            
            <InputLabel class="mt-4" for="control_number" value="Control number"/>
            <TextInput @keyup.enter="submitNewBlock" id="control_number" type="text" class="mt-1 block w-full" v-model="newBlock.control_number"/>
            <span v-if="errors.control_number" class="text-sm text-red-500 mt-0">{{ errors.control_number }}</span>
            
            <InputLabel class="mt-4" for="block_number" value="Block number"/>
            <TextInput @keyup.enter="submitNewBlock" id="block_number" type="text" class="mt-1 block w-full" v-model="newBlock.block_number"/>
            <span v-if="errors.block_number" class="text-sm text-red-500 mt-0">{{ errors.block_number }}</span>

            <div class="mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6">
                <button @click="createBlockModal = false" type="button" class="dark:text-white hover:underline md:mt-0 mt-4">Cancel</button>
                <button @click="submitNewBlock" :disabled="newBlock.processing" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20">{{ newBlock.processing ? 'Processing' : 'Submit' }}</button>
            </div>
        </div>
    </Modal>
</template>