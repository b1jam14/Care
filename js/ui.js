import { formatDateKey } from "./api.js";

function getStatusClass(value) {
    if (value === 3) return "green";
    if (value === 2) return "orange";
    if (value === 1) return "red";
    return "grey";
}

export function renderTable({ allDates, dataMap }) {
    const tbody = document.getElementById("care-tbody");
    tbody.innerHTML = "";

    allDates.forEach(date => {
        const key = formatDateKey(date);
        const dayData = dataMap[key];

        const row = document.createElement("tr");

        row.innerHTML = `
            <td><span class="status ${getStatusClass(dayData?.sport)}"></span></td>
            <td><span class="status ${getStatusClass(dayData?.study)}"></span></td>
            <td><span class="status ${getStatusClass(dayData?.food)}"></span></td>
            <td><span class="status ${getStatusClass(dayData?.health)}"></span></td>
        `;

        tbody.appendChild(row);
    });
}