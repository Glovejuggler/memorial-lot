<script setup>
import { Head, router, useForm } from '@inertiajs/vue3';
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
const editBlockModal = ref(false)
const deleteBlockModal = ref(false)

const editLotModal = ref(false)
const deleteLotModal = ref(false)

const editBlockForm = useForm({
    name: props.block.name,
    control_number: props.block.control_number,
    block_number: props.block.block_number
})

const newLot = useForm({
    block_id: props.block.id,
    lot_number: '',
    price: '',
    owner: '',
})

const editLotForm = useForm({
    block_id: props.block.id,
    lot_number: '',
    price: '',
    owner: '',
    id: '',
})

const submitNewLot = () => {
    newLot.post(route('lots.store'), {
        preserveState: (page) => Object.keys(page.props.errors).length > 0,
        preserveScroll: true,
    })
}

const submitEditBlock = () => {
    editBlockForm.put(route('blocks.update', props.block), {
        preserveScroll: true,
        preserveState: (page) => Object.keys(page.props.errors).length > 0
    })
}

const editLot = (lot) => {
    editLotForm.id = lot.id
    editLotForm.lot_number = lot.lot_number
    editLotForm.price = lot.price
    editLotForm.owner = lot.owner
    editLotForm.block_id = props.block.id

    editLotModal.value = true
}

const submitEditLot = () => {
    editLotForm.put(route('lots.update', editLotForm.id), {
        preserveScroll: true,
        preserveState: (page) => Object.keys(page.props.errors).length > 0,
        onSuccess: (page) => {
            if (Object.keys(page.props.errors).length === 1) editLot.reset()
        }
    })
}

const deleteLotVar = ref(null)
const deleteLot = (lot) => {
    deleteLotVar.value = lot

    deleteLotModal.value = true
}
</script>

<template>
    <Head :title="block.name"/>

    <div class="py-8">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-md dark:text-white border dark:border-gray-700 shadow-sm">
                <p class="text-3xl font-bold mb-4">{{ block.name }}</p>
                <p class="text-sm">Control number: {{ block.control_number }}</p>
                <p class="text-sm">Block number: {{ block.block_number }}</p>

                <div class="flex mt-4 space-x-2">
                    <button @click="editBlockModal = true" class="rounded-md text-white px-4 text-sm bg-green-500 hover:bg-green-700 active:bg-green-900 ease-in-out duration-200">Edit</button>
                    <button @click="deleteBlockModal = true" class="rounded-md text-white px-4 text-sm bg-red-500 hover:bg-red-700 active:bg-red-900 ease-in-out duration-200">Delete</button>
                </div>
            </div>

            <div class="py-4">
                <span class="dark:text-white text-lg font-bold mr-4">Lots</span>
                <button @click="createLotModal = true" class="bg-blue-500 px-4 text-sm rounded-md text-white hover:bg-blue-700 active:bg-blue-800 ease-in-out duration-200">Add new</button>
            </div>

            <div v-if="lots.length" class="grid lg:grid-cols-4 grid-cols-1 gap-4">
                <div class="relative w-full lg:aspect-video rounded-md bg-white dark:bg-gray-800 p-4 dark:text-white flex flex-col cursor-pointer ease-in-out duration-200 border" :class="lot.owner ? 'border-blue-500' : 'border-green-500'" v-for="lot in lots">
                    <span>Lot number: {{ lot.lot_number }}</span>
                    <span>Price: {{ (Number) (lot.price).toAmountFormat() }}</span>
                    <span v-if="lot.owner">Owner: {{ lot.owner }}</span>

                    <div class="absolute bottom-4 right-4 space-x-2 flex text-white">
                        <i @click="editLot(lot)" class="rounded-full bg-green-500 hover:bg-green-700 active:bg-green-900 duration-200 ease-in-out h-10 w-10 bx bx-edit inline-flex justify-center items-center"></i>
                        <i @click="deleteLot(lot)" class="rounded-full bg-red-500 hover:bg-red-700 active:bg-red-900 duration-200 ease-in-out h-10 w-10 bx bx-trash inline-flex justify-center items-center"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- New Lot Modal -->
    <Modal :show="createLotModal" :closeable="false">
        <div class="p-4 dark:text-white">
            <InputLabel for="lot_number" value="Lot number"/>
            <TextInput @keyup.enter="submitNewLot" id="lot_number" type="text" class="mt-1 block w-full" v-model="newLot.lot_number"/>
            <span v-if="errors.lot_number" class="text-sm text-red-500">{{ errors.lot_number }}</span>
            
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

    <!-- Edit Block Modal -->
    <Modal :show="editBlockModal" @close="editBlockModal = false">
        <div class="p-4 dark:text-white">
            <InputLabel for="name" value="Block name"/>
            <TextInput @keyup.enter="submitEditBlock" id="name" type="text" class="mt-1 block w-full" v-model="editBlockForm.name"/>
            <span v-if="errors.name" class="text-sm text-red-500">{{ errors.name }}</span>
            
            <InputLabel class="mt-4" for="control_number" value="Control number"/>
            <TextInput @keyup.enter="submitEditBlock" id="control_number" type="text" class="mt-1 block w-full" v-model="editBlockForm.control_number"/>
            <span v-if="errors.control_number" class="text-sm text-red-500 mt-0">{{ errors.control_number }}</span>
            
            <InputLabel class="mt-4" for="block_number" value="Block number"/>
            <TextInput @keyup.enter="submitEditBlock" id="block_number" type="text" class="mt-1 block w-full" v-model="editBlockForm.block_number"/>
            <span v-if="errors.block_number" class="text-sm text-red-500 mt-0">{{ errors.block_number }}</span>

            <div class="mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6">
                <button @click="editBlockModal = false" type="button" class="dark:text-white hover:underline md:mt-0 mt-4">Cancel</button>
                <button @click="submitEditBlock" :disabled="editBlockForm.processing" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20">{{ editBlockForm.processing ? 'Processing' : 'Submit' }}</button>
            </div>
        </div>
    </Modal>

    <!-- Delete Block Modal -->
    <Modal :show="deleteBlockModal" @close="deleteBlockModal = false">
        <div class="p-4 dark:text-white">
            <div class="flex justify-center items-center flex-col">
                <i class="bx bx-info-circle text-7xl text-red-500"></i>
                <p>Delete the block <b>{{ block.name }}</b>?</p>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-6">
                <button @click="router.delete(route('blocks.destroy', block))" class="text-white bg-red-500 hover:bg-red-700 active:bg-red-900 rounded-md py-1 ease-in-out duration-200">Delete</button>
                <button @click="deleteBlockModal = false" class="border dark:border-gray-100 border-black hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-800 py-1 rounded-md ease-in-out duration-200">Cancel</button>
            </div>
        </div>
    </Modal>

    <!-- Edit Lot Modal -->
    <Modal :show="editLotModal" @close="editLotModal = false">
        <div class="p-4 dark:text-white">
            <InputLabel for="lot_number" value="Lot number"/>
            <TextInput @keyup.enter="submitEditLot" id="lot_number" type="text" class="mt-1 block w-full" v-model="editLotForm.lot_number"/>
            <span v-if="errors.lot_number" class="text-sm text-red-500">{{ errors.lot_number }}</span>
            
            <InputLabel class="mt-4" for="price" value="Price"/>
            <TextInput @keyup.enter="submitEditLot" id="price" type="number" class="mt-1 block w-full" v-model="editLotForm.price"/>
            <span v-if="errors.price" class="text-sm text-red-500 mt-0">{{ errors.price }}</span>

            <InputLabel class="mt-4" for="owner" value="Owner"/>
            <TextInput @keyup.enter="submitEditLot" id="owner" type="text" class="mt-1 block w-full" v-model="editLotForm.owner"/>
            <span v-if="errors.owner" class="text-sm text-red-500 mt-0">{{ errors.owner }}</span>

            <div class="mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6">
                <button @click="editLotModal = false" type="button" class="dark:text-white hover:underline md:mt-0 mt-4">Cancel</button>
                <button @click="submitEditLot" :disabled="editLotForm.processing" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20">{{ editLotForm.processing ? 'Processing' : 'Submit' }}</button>
            </div>
        </div>
    </Modal>

    <!-- Delete Lot Modal -->
    <Modal :show="deleteLotModal" @close="deleteLotModal = false">
        <div class="p-4 dark:text-white">
            <div class="flex justify-center items-center flex-col">
                <i class="bx bx-info-circle text-7xl text-red-500"></i>
                <p>Delete lot number <b>{{ deleteLotVar.lot_number }}</b>?</p>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-6">
                <button @click="router.delete(route('lots.destroy', deleteLotVar), {
                    onSuccess: () => {
                        deleteLotVar = null
                        deleteLotModal = false
                    }
                })" class="text-white bg-red-500 hover:bg-red-700 active:bg-red-900 rounded-md py-1 ease-in-out duration-200">Delete</button>
                <button @click="deleteLotModal = false" class="border dark:border-gray-100 border-black hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-800 py-1 rounded-md ease-in-out duration-200">Cancel</button>
            </div>
        </div>
    </Modal>
</template>