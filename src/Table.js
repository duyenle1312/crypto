import React from "react";

export default function Table() {
	return (
		<section class="justify-center w-1/2">
    <div class="flex flex-col justify-center h-full">
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Metabot Issues Token</h2>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-blue-700 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Round</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Release Date</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Number of Token</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Price</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">Seed Round</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">27-30/11/2021</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">5,000,000,000</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-blue-500">0.00001</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">Private Sale</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">2-12/12/2021</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">10,000,000,000</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-blue-500">0.000015</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">Pre-sale</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">13-23/12/2021</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">15,000,000,000</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-blue-500">0.000017</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">Public Sale</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">25/12/2021</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">3,000,000,000</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-blue-500">0.00002</div>
                                </td>
                            </tr>                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>

	);
}