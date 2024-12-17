<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import Modal from '@/Components/Modal.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    block: Object,
    errors: Object,
    lots: Object,
})

const createLotModal = ref(false)

const newLot = useForm({
    block_id: props.block.id,
    lot_number: '',
    price: '',
    owner: '',
})

const submitNewLot = () => {
    newLot.post(route('lots.store'), {
        preserveState: (page) => Object.keys(page.props.errors).length > 0,
        preserveScroll: true,
    })
}
</script>

<template>
    <Head :title="block.name"/>

    <div class="py-8">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-md dark:text-white">
                <p class="text-3xl font-bold">{{ block.name }}</p>
                <p>Control number: {{ block.control_number }}</p>
                <p>Block number: {{ block.block_number }}</p>
            </div>

            <div class="py-4">
                <span class="dark:text-white text-lg font-bold mr-4">Lots</span>
                <button @click="createLotModal = true" class="bg-blue-500 px-4 text-sm rounded-md text-white hover:bg-blue-700 active:bg-blue-800 ease-in-out duration-200">Add new</button>
            </div>

            <div v-if="lots.length" class="grid lg:grid-cols-4 grid-cols-1 mt-4 gap-4">
                <div class="w-full lg:aspect-video rounded-md bg-white dark:bg-gray-800 p-4 dark:text-white flex flex-col cursor-pointer dark:hover:bg-gray-700 ease-in-out duration-200" v-for="lot in lots">
                    <span>Name: {{ lot.price }}</span>
                </div>
            </div>
        </div>
    </div>

    <!-- New Lot Modal -->
    <Modal :show="createLotModal" :closeable="false">
        <div class="p-4 dark:text-white">
            <InputLabel for="lot_number" value="Lot number"/>
            <TextInput @keyup.enter="submitNewLot" id="lot_number" type="text" class="mt-1 block w-full" v-model="newLot.lot_number"/>
            <span v-if="errors.lot_number" class="text-sm text-red-500">{{ errors.name }}</span>
            
            <InputLabel class="mt-4" for="price" value="Price"/>
            <TextInput @keyup.enter="submitNewLot" id="price" type="number" class="mt-1 block w-full" v-model="newLot.price"/>
            <span v-if="errors.price" class="text-sm text-red-500 mt-0">{{ errors.price }}</span>

            <InputLabel class="mt-4" for="owner" value="Owner"/>
            <TextInput @keyup.enter="submitNewLot" id="owner" type="text" class="mt-1 block w-full" v-model="newLot.owner"/>
            <span v-if="errors.owner" class="text-sm text-red-500 mt-0">{{ errors.owner }}</span>

            <div class="mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6">
                <button @click="createLotModal = false" type="button" class="dark:text-white hover:underline md:mt-0 mt-4">Cancel</button>
                <button @click="submitNewLot" :disabled="newLot.processing" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20">{{ newLot.processing ? 'Processing' : 'Submit' }}</button>
            </div>
        </div>
    </Modal>
</template>