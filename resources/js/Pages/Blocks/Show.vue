<script setup>
import { Head, router, useForm } from '@inertiajs/vue3';
import { ref, watch } from 'vue';
import Modal from '@/Components/Modal.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import Select from '@/Components/Select.vue';

const props = defineProps({
    block: Object,
    errors: Object,
    lots: Object,
    filters: Object,
    occupied: Number,
    available: Number,
    tallies: Object,
    lot_types: Object,
})

const createLotModal = ref(false)
const editBlockModal = ref(false)
const deleteBlockModal = ref(false)

const editLotModal = ref(false)
const deleteLotModal = ref(false)

const editBlockForm = useForm({
    name: props.block.name,
    block_number: props.block.block_number
})

const newLot = useForm({
    block_id: props.block.id,
    type: '',
    lot_number: '',
    contract_number: '',
    price: '',
    status: '',
    owner: '',
    address: '',
    contact: '',
})

const editLotForm = useForm({
    block_id: props.block.id,
    type: '',
    lot_number: '',
    contract_number: '',
    price: '',
    status: '',
    owner: '',
    address: '',
    contact: '',
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
    editLotForm.type = lot.type
    editLotForm.lot_number = lot.lot_number
    editLotForm.contract_number = lot.contract_number
    editLotForm.price = lot.price
    editLotForm.status = lot.status
    editLotForm.owner = lot.owner
    editLotForm.block_id = props.block.id
    editLotForm.address = lot.address
    editLotForm.contact = lot.contact

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

// Search lot
const searchForm = ref({
    search: props.filters.search,
    type: props.filters.type ?? '',
})

watch(
    searchForm,
    (value) => {
        router.get(route('blocks.show', props.block), value, {
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
    <Head :title="block.name"/>

    <div class="py-8">
        <div class="max-w-screen-2xl mx-auto px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-md dark:text-white border dark:border-gray-700 shadow-sm">
                <div class="lg:grid grid-cols-3 gap-2">
                    <div>
                        <p class="text-3xl font-bold mb-4">{{ block.name }}</p>
                        <p>Block number: {{ block.block_number }}</p>
                    </div>
                    
                    <div class="mt-4 lg:mt-0">
                        <p v-for="tally in tallies.status">{{ `${tally.status ?? 'Available'} Lots: ${tally.count}` }}</p>
                    </div>
                    
                    <div class="mt-4 lg:mt-0">
                        <table class="table table-fixed text-left text-sm">
                            <thead>
                                <tr class="text-xs font-bold">
                                    <th class="pr-4">Type/Category</th>
                                    <th class="pr-4">Available</th>
                                    <th class="pr-4">Sold</th>
                                    <th class="pr-4">Installment</th>
                                    <th class="pr-4">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="tally in tallies.type">
                                    <td class="pr-4 py-1">{{ tally.type ?? 'Uncategorized' }}</td>
                                    <td class="pr-4 py-1">{{ tally.count - tally.sold_lots - tally.installment_lots }}</td>
                                    <td class="pr-4 py-1">{{ tally.sold_lots }}</td>
                                    <td class="pr-4 py-1">{{ tally.installment_lots }}</td>
                                    <td class="pr-4 py-1">{{ tally.count }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="flex mt-4 space-x-2">
                    <button @click="editBlockModal = true" class="rounded-md text-white px-4 text-sm bg-green-500 hover:bg-green-700 active:bg-green-900 ease-in-out duration-200">Edit</button>
                    <button @click="deleteBlockModal = true" class="rounded-md text-white px-4 text-sm bg-red-500 hover:bg-red-700 active:bg-red-900 ease-in-out duration-200">Delete</button>
                </div>
            </div>

            <div class="py-4 flex justify-between items-center">
                <div>
                    <span class="dark:text-white text-lg font-bold mr-4">Lots</span>
                    <button @click="createLotModal = true" class="bg-blue-500 px-4 text-sm rounded-md text-white hover:bg-blue-700 active:bg-blue-800 ease-in-out duration-200">Add new</button>
                </div>
                <div>
                    <Select v-model="searchForm.type">
                        <option value="">All</option>
                        <option value="available">Available</option>
                        <option value="sold">Sold</option>
                        <option value="installment">Installment</option>
                    </Select>
                    <TextInput v-model="searchForm.search" type="text" class="lg:w-96 lg:mt-0 w-full" placeholder="Search"/>
                </div>
            </div>

            <div v-if="lots.length" class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
                <div class="relative overflow-x-auto rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-100 overflow-x-auto">
                        <thead class="text-xs text-gray-700 dark:text-gray-200 uppercase bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" class="p-3">
                                    Lot Number
                                </th>
                                <th scope="col" class="p-3">
                                    Type/Category
                                </th>
                                <th scope="col" class="p-3">
                                    Status
                                </th>
                                <th scope="col" class="p-3">
                                    Contract Number
                                </th>
                                <th scope="col" class="p-3">
                                    Owner
                                </th>
                                <th scope="col" class="p-3">
                                    Address
                                </th>
                                <th scope="col" class="p-3">
                                    Contact no.
                                </th>
                                <th scope="col" class="p-3">
                                    Price
                                </th>
                                <th scope="col" class="p-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="lot in lots" class="bg-white dark:bg-gray-800 border-b dark:border-gray-700 last:border-none hover:bg-black/10 cursor-pointer">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap">
                                    {{ lot.lot_number }}
                                </th>
                                <td class="px-3 py-4">
                                    {{ lot.type ?? 'Uncategorized' }}
                                </td>
                                <td class="px-3 py-4">
                                    <span class="text-xs rounded-lg text-white px-2" :class="{'bg-blue-500': !lot.status, 'bg-yellow-500': lot.status == 'Installment', 'bg-green-500': lot.status == 'Sold'}">{{ lot.status ?? 'Available' }}</span>
                                </td>
                                <td class="px-3 py-4">
                                    {{ lot.contract_number ?? '-' }}
                                </td>
                                <td class="px-3 py-4">
                                    {{ lot.owner ?? '-' }}
                                </td>
                                <td class="px-3 py-4">
                                    {{ lot.address ?? '-' }}
                                </td>
                                <td class="px-3 py-4">
                                    {{ lot.contact ?? '-' }}
                                </td>
                                <td class="px-3 py-4">
                                    {{ (Number) (lot.price).toAmountFormat() }}
                                </td>
                                <td class="px-3 py-4">
                                    <div class="space-x-1">
                                        <i @click="editLot(lot)" class="bx bx-edit w-6 h-6 rounded-full bg-green-500 hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 inline-flex justify-center items-center"></i>
                                        <i @click="deleteLot(lot)" class="bx bx-trash w-6 h-6 rounded-full bg-red-500 hover:bg-red-700 active:bg-red-900 ease-in-out duration-200 inline-flex justify-center items-center"></i>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div v-else class="flex justify-center mt-12 dark:text-gray-400 text-gray-700">
                <span>No data.</span>
            </div>
        </div>
    </div>

    <!-- New Lot Modal -->
    <Modal :show="createLotModal" :closeable="false">
        <div class="p-4 dark:text-white">
            <InputLabel for="type" value="Type/Category"/>
            <TextInput list="lot_types" @keyup.enter="submitNewLot" id="type" type="text" class="mt-1 block w-full" v-model="newLot.type"/>
            <span v-if="errors.type" class="text-sm text-red-500">{{ errors.type }}</span>

            <InputLabel class="mt-4" for="lot_number" value="Lot number"/>
            <TextInput @keyup.enter="submitNewLot" id="lot_number" type="text" class="mt-1 block w-full" v-model="newLot.lot_number"/>
            <span v-if="errors.lot_number" class="text-sm text-red-500">{{ errors.lot_number }}</span>
            
            <InputLabel class="mt-4" for="status" value="Status"/>
            <Select @keyup.enter="submitNewLot" id="status" type="text" class="mt-1 block w-full" v-model="newLot.status">
                <option value="">Available</option>
                <option value="Installment">Installment</option>
                <option value="Sold">Sold</option>
            </Select>
            <span v-if="errors.status" class="text-sm text-red-500">{{ errors.status }}</span>
            
            <InputLabel class="mt-4" for="price" value="Price"/>
            <TextInput @keyup.enter="submitNewLot" id="price" type="number" class="mt-1 block w-full" v-model="newLot.price"/>
            <span v-if="errors.price" class="text-sm text-red-500 mt-0">{{ errors.price }}</span>
            
            <InputLabel class="mt-4" for="contract_number" value="Contract number"/>
            <TextInput @keyup.enter="submitNewLot" id="contract_number" type="text" class="mt-1 block w-full" v-model="newLot.contract_number"/>
            <span v-if="errors.contract_number" class="text-sm text-red-500">{{ errors.contract_number }}</span>

            <InputLabel class="mt-4" for="owner" value="Owner"/>
            <TextInput @keyup.enter="submitNewLot" id="owner" type="text" class="mt-1 block w-full" v-model="newLot.owner"/>
            <span v-if="errors.owner" class="text-sm text-red-500 mt-0">{{ errors.owner }}</span>

            <InputLabel class="mt-4" for="address" value="Address"/>
            <TextInput @keyup.enter="submitNewLot" id="address" type="text" class="mt-1 block w-full" v-model="newLot.address"/>
            <span v-if="errors.address" class="text-sm text-red-500 mt-0">{{ errors.address }}</span>

            <InputLabel class="mt-4" for="contact" value="Contact no."/>
            <TextInput @keyup.enter="submitNewLot" id="contact" type="text" class="mt-1 block w-full" v-model="newLot.contact"/>
            <span v-if="errors.contact" class="text-sm text-red-500 mt-0">{{ errors.contact }}</span>

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
            <InputLabel for="type" value="Type"/>
            <TextInput list="lot_types" @keyup.enter="submitEditLot" id="type" type="text" class="mt-1 block w-full" v-model="editLotForm.type"/>
            <span v-if="errors.type" class="text-sm text-red-500">{{ errors.type }}</span>

            <InputLabel class="mt-4" for="lot_number" value="Lot number"/>
            <TextInput @keyup.enter="submitEditLot" id="lot_number" type="text" class="mt-1 block w-full" v-model="editLotForm.lot_number"/>
            <span v-if="errors.lot_number" class="text-sm text-red-500">{{ errors.lot_number }}</span>
            
            <InputLabel class="mt-4" for="status" value="Status"/>
            <Select @keyup.enter="submitEditLot" id="status" type="number" class="mt-1 block w-full" v-model="editLotForm.status">
                <option :value="null">Available</option>
                <option value="Installment">Installment</option>
                <option value="Sold">Sold</option>
            </Select>
            <span v-if="errors.status" class="text-sm text-red-500 mt-0">{{ errors.status }}</span>

            <InputLabel class="mt-4" for="price" value="Price"/>
            <TextInput @keyup.enter="submitEditLot" id="price" type="number" class="mt-1 block w-full" v-model="editLotForm.price"/>
            <span v-if="errors.price" class="text-sm text-red-500 mt-0">{{ errors.price }}</span>
            
            <InputLabel class="mt-4" for="contract_number" value="Contract number"/>
            <TextInput @keyup.enter="submitEditLot" id="contract_number" type="text" class="mt-1 block w-full" v-model="editLotForm.contract_number"/>
            <span v-if="errors.contract_number" class="text-sm text-red-500">{{ errors.contract_number }}</span>

            <InputLabel class="mt-4" for="owner" value="Owner"/>
            <TextInput @keyup.enter="submitEditLot" id="owner" type="text" class="mt-1 block w-full" v-model="editLotForm.owner"/>
            <span v-if="errors.owner" class="text-sm text-red-500 mt-0">{{ errors.owner }}</span>

            <InputLabel class="mt-4" for="address" value="Address"/>
            <TextInput @keyup.enter="submitEditLot" id="address" type="text" class="mt-1 block w-full" v-model="editLotForm.address"/>
            <span v-if="errors.address" class="text-sm text-red-500 mt-0">{{ errors.address }}</span>

            <InputLabel class="mt-4" for="contact" value="Contact no."/>
            <TextInput @keyup.enter="submitEditLot" id="contact" type="text" class="mt-1 block w-full" v-model="editLotForm.contact"/>
            <span v-if="errors.contact" class="text-sm text-red-500 mt-0">{{ errors.contact }}</span>

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

    <!-- Lot Type Suggestions -->
    <datalist id="lot_types">
        <option v-for="type in lot_types" :value="type">{{ type }}</option>
    </datalist>
</template>