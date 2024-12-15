<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import Modal from '@/Components/Modal.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

const createBlockModal = ref(false)
const newBlock = useForm({
    name: '',
    control_number: '',
    block_number: '',
})

const submitNewBlock = () => {
    newBlock.post(route('blocks.store'), {
        onSuccess: () => {
            createBlockModal = props.errors ? true : false
        },
        preserveState: false,
        preserveScroll: true,
    })
}

const props = defineProps({
    blocks: Object,
    errors: Object,
})
</script>

<template>
    <Head title="Memorial"/>
    
    <div class="py-8">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <span class="dark:text-white text-lg font-bold mr-4">Blocks</span>
            <button @click="createBlockModal = true" class="bg-blue-500 px-4 text-sm rounded-md text-white hover:bg-blue-700 active:bg-blue-800 ease-in-out duration-200">Add new</button>

            <!-- Blocks -->
            <div class="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 mt-8 gap-4">
                <div class="w-full aspect-square rounded-md bg-white dark:bg-gray-800 p-2 dark:text-white flex flex-col" v-for="block in blocks">
                    <span>Name: {{ block.name ?? '--' }}</span>
                    <span>Control number: {{ block.control_number }}</span>
                    <span>Block number: {{ block.block_number }}</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Create Block Modal -->
    <Modal :show="createBlockModal" closeable="false">
        <div class="p-4 dark:text-white">
            <InputLabel for="name" value="Block name"/>
            <TextInput @keyup.enter="submitNewBlock" id="name" type="text" class="mt-1 block w-full" v-model="newBlock.name"/>
            <span v-if="errors.name" class="text-sm text-red-500">{{ errors.name }}</span>
            
            <InputLabel class="mt-4" for="control_number" value="Control number"/>
            <TextInput @keyup.enter="submitNewBlock" id="control_number" type="text" class="mt-1 block w-full" v-model="newBlock.control_number"/>
            <span v-if="errors.control_number" class="text-sm text-red-500 mt-0">{{ errors.control_number }}</span>
            
            <InputLabel class="mt-4" for="block_number" value="Block number"/>
            <TextInput @keyup.enter="submitNewBlock" id="block_number" type="text" class="mt-1 block w-full" v-model="newBlock.block_number"/>
            <span v-if="errors.block_number" class="text-sm text-red-500 mt-0">{{ errors.block_number }}</span>

            <div class="mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6">
                <button @click="createBlockModal = false" type="button" class="dark:text-white hover:underline md:mt-0 mt-4">Cancel</button>
                <button @click="submitNewBlock" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200">Submit</button>
            </div>
        </div>
    </Modal>
</template>