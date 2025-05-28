<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreNewLotRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->id == 1;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'block_id' => 'required|uuid',
            'price' => 'nullable|numeric',
            'lot_number' => ['required', Rule::unique('lots', 'lot_number')->where(function ($query) {
                $query->where('block_id', $this->block_id)->whereNot('id', $this->id);
            })],
            'contract_number' => 'required_with:owner,status,co,date_sold',
            'owner' => 'required_with:contract_number,status,co,date_sold',
            'address' => 'nullable',
            'contact' => 'nullable',
            'type' => 'nullable',
            'status' => ['required_with:owner,contract_number,co,date_sold', Rule::in(['Sold', 'Installment', null])],
            'co' => 'required_with:owner,contract_number,status,date_sold',
            'date_sold' => ['required_with:owner,contract_number,status,co', 'date']
        ];
    }
}
