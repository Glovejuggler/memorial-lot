<script setup>
import TextInput from '@/Components/TextInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Select from '@/Components/Select.vue';
import Modal from '@/Components/Modal.vue';
import { Head, router, useForm } from '@inertiajs/vue3';
import { ref, watch } from 'vue';

const props = defineProps({
    blocks: Object,
    lots: Object,
    filters: Object,
    errors: Object,
    lot_types: Object,
})

// Search lot
const searchForm = ref({
    search: props.filters.search,
    status: props.filters.status ?? '',
    type: props.filters.type ?? 'any',
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

// Create lot
const createLotModal = ref(false)
const newLot = useForm({
    block_id: '',
    lot_number: '',
    contract_number: '',
    price: '',
    owner: '',
    address: '',
    contact: '',
    type: '',
})

const submitNewLot = () => {
    newLot.post(route('lots.store'), {
        preserveState: (page) => Object.keys(page.props.errors).length > 0,
        preserveScroll: true,
    })
}


// Edit lot
const editLotModal = ref(false)
const editLotForm = useForm({
    block_id: '',
    lot_number: '',
    contract_number: '',
    price: '',
    owner: '',
    id: '',
    address: '',
    contact: '',
    type: '',
})

const editLot = (lot) => {
    editLotForm.id = lot.id
    editLotForm.lot_number = lot.lot_number
    editLotForm.contract_number = lot.contract_number
    editLotForm.price = lot.price
    editLotForm.owner = lot.owner
    editLotForm.block_id = lot.block_id
    editLotForm.address = lot.address
    editLotForm.contact = lot.contact
    editLotForm.type = lot.type

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

// Delete lot
const deleteLotModal = ref(false)
const deleteLotVar = ref(null)
const deleteLot = (lot) => {
    deleteLotVar.value = lot

    deleteLotModal.value = true
}

// File import
const importFileInput = ref(null)
const fileForm = useForm({
    file: ''
})
const importLots = () => {
    fileForm.post(route('lots.import'), {
        preserveScroll: true,
        preserveState: false,
        onSuccess: () => fileForm.reset('file'),
        onCancel: () => fileForm.reset('file')
    })
}
</script>

<template>
    <Head title="Lots"/>

    <input @input="fileForm.file = $event.target.files[0]" @change="importLots" type="file" hidden name="import" id="import" ref="importFileInput" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">

    <div class="py-8">
        <div class="max-w-screen-2xl mx-auto px-6 lg:px-8">
            <div class="py-4 flex justify-between">
                <div>
                    <span class="dark:text-white text-lg font-bold mr-4">Lots</span>
                    <button @click="createLotModal = true" class="bg-blue-500 px-4 text-sm rounded-md text-white hover:bg-blue-700 active:bg-blue-800 ease-in-out duration-200">Add new</button>
                    <button @click="importFileInput.click()" class="bg-green-500 px-4 text-sm rounded-md text-white hover:bg-green-700 active:bg-green-800 ease-in-out duration-200 ml-4">Import</button>
                    <a :href="route('lots.export')" class="bg-yellow-500 px-4 text-sm rounded-md text-white hover:bg-yellow-700 active:bg-yellow-800 ease-in-out duration-200 ml-4">Export</a>
                </div>
                <div>
                    <Select v-model="searchForm.type">
                        <option value="any">Any</option>
                        <option v-for="type in lot_types" :value="type ?? 'none'">{{ type ?? 'Uncategorized' }}</option>
                    </Select>
                    <Select v-model="searchForm.status">
                        <option value="">All</option>
                        <option value="available">Available</option>
                        <option value="sold">Sold</option>
                        <option value="installment">Installment</option>
                    </Select>
                    <TextInput v-model="searchForm.search" type="text" class="lg:w-96 lg:mt-0 w-full" placeholder="Search"/>
                </div>
            </div>

            <div v-if="lots.length" class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 mt-4">
                <div class="relative overflow-x-auto rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-100">
                        <thead class="text-xs text-gray-700 dark:text-gray-200 uppercase bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" class="p-3">
                                    Block Number
                                </th>
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
                                <th scope="row" class="px-2 py-4 font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap">
                                    {{ lot.block.block_number ?? '-' }}
                                </th>
                                <td class="px-2 py-4">
                                    {{ lot.lot_number }}
                                </td>
                                <td class="px-2 py-4">
                                    {{ lot.type ?? '-' }}
                                </td>
                                <td class="px-2 py-4">
                                    <span class="text-xs rounded-lg text-white px-2" :class="{'bg-blue-500': !lot.status, 'bg-yellow-500': (lot.status)?.toUpperCase() == 'INSTALLMENT', 'bg-green-500': (lot.status)?.toUpperCase() == 'SOLD'}">{{ lot.status ?? 'Available' }}</span>
                                </td>
                                <td class="px-2 py-4">
                                    {{ lot.contract_number ?? '-' }}
                                </td>
                                <td class="px-2 py-4">
                                    {{ lot.owner ?? '-' }}
                                </td>
                                <td class="px-2 py-4">
                                    {{ lot.address ?? '-' }}
                                </td>
                                <td class="px-2 py-4">
                                    {{ lot.contact ?? '-' }}
                                </td>
                                <td class="px-2 py-4">
                                    {{ (Number) (lot.price).toAmountFormat() }}
                                </td>
                                <td class="px-2 py-4">
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
            <InputLabel for="block_number" value="Block number"/>
            <Select @keyup.enter="submitNewLot" id="block_number" class="mt-1 block w-full" v-model="newLot.block_id">
                <option v-for="block in blocks" :value="block.id">{{ `${block.block_number} (${block.name})` }}</option>
            </Select>
            <span v-if="errors.block_id" class="text-sm text-red-500">{{ errors.block_id }}</span>

            <InputLabel class="mt-4" for="type" value="Type/Category"/>
            <TextInput list="lot_types" @keyup.enter="submitNewLot" id="type" class="mt-1 block w-full" v-model="newLot.type"/>
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

    <!-- Edit Lot Modal -->
    <Modal :show="editLotModal" @close="editLotModal = false">
        <div class="p-4 dark:text-white">
            <InputLabel for="block_number" value="Block number"/>
            <Select @keyup.enter="submitEditLot" id="block_number" class="mt-1 block w-full" v-model="editLotForm.block_id">
                <option v-for="block in blocks" :value="block.id">{{ `${block.block_number} (${block.name})` }}</option>
            </Select>
            <span v-if="errors.block_id" class="text-sm text-red-500">{{ errors.block_id }}</span>

            <InputLabel class="mt-4" for="type" value="Type/Category"/>
            <TextInput list="lot_types" @keyup.enter="submitEditLot" id="type" class="mt-1 block w-full" v-model="editLotForm.type"/>
            <span v-if="errors.type" class="text-sm text-red-500">{{ errors.type }}</span>

            <InputLabel class="mt-4" for="lot_number" value="Lot number"/>
            <TextInput @keyup.enter="submitEditLot" id="lot_number" type="text" class="mt-1 block w-full" v-model="editLotForm.lot_number"/>
            <span v-if="errors.lot_number" class="text-sm text-red-500">{{ errors.lot_number }}</span>

            <InputLabel class="mt-4" for="status" value="Status"/>
            <Select @keyup.enter="submitEditLot" id="status" type="text" class="mt-1 block w-full" v-model="editLotForm.status">
                <option value="">Available</option>
                <option value="Installment">Installment</option>
                <option value="Sold">Sold</option>
            </Select>
            <span v-if="errors.status" class="text-sm text-red-500">{{ errors.status }}</span>
            
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
                <p>Delete block number <b>{{ deleteLotVar.block.block_number }}</b> lot number <b>{{ deleteLotVar.lot_number }}</b>?</p>
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

    <!-- Lot Types List -->
    <datalist id="lot_types">
        <option v-for="type in lot_types" :value="type">{{ type }}</option>
    </datalist>
</template>