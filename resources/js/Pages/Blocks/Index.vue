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

const props = defineProps({
    blocks: Object,
})
</script>

<template>
    <Head title="Lots"/>
    
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <i @click="createBlockModal = true" class="bx bx-plus inline-flex h-8 w-8 justify-center items-center dark:text-white hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer rounded-full"></i>
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            </div>
        </div>
    </div>

    <!-- Create Block Modal -->
    <Modal :show="createBlockModal" closeable="false">
        <div class="p-4 dark:text-white">
            <InputLabel for="name" value="Block name"/>
            <TextInput id="name" type="text" class="mt-1 mb-4 block w-full" v-model="newBlock.name"/>

            <InputLabel for="control_number" value="Control number"/>
            <TextInput id="control_number" type="text" class="mt-1 mb-4 block w-full" v-model="newBlock.control_number"/>

            <InputLabel for="block_number" value="Block number"/>
            <TextInput id="block_number" type="text" class="mt-1 block w-full" v-model="newBlock.block_number"/>

            
        </div>
    </Modal>
</template>