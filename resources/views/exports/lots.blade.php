<table>
    <thead>
        <tr>
            <th>Blk</th>
            <th>Lot</th>
            <th>Type</th>
            <th>Status</th>
            <th>CN</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($lots as $lot)
            <tr>
                <td>{{ $lot->block->block_number }}</td>
                <td>{{ $lot->lot_number }}</td>
                <td>{{ $lot->type }}</td>
                <td>{{ $lot->status }}</td>
                <td>{{ $lot->contract_number }}</td>
                <td>{{ $lot->owner }}</td>
                <td>{{ $lot->address }}</td>
                <td>{{ $lot->contact }}</td>
                <td>{{ $lot->price }}</td>
            </tr>
        @endforeach
    </tbody>
</table>