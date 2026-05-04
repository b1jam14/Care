import { generateDateRange, formatDateKey } from "./api.js";

function getClass(value) {
    if (value === 3) return "c3";
    if (value === 2) return "c2";
    if (value === 1) return "c1";
    return "c0";
}

function renderHeatmap(containerId, dataMap, key) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    const dates = generateDateRange();

    dates.forEach((dateKey, index) => {

        const d = dataMap[dateKey];
        const value = d ? d[key] : 0;

        const cell = document.createElement("div");
        cell.className = `cell ${getClass(value)}`;

        container.appendChild(cell);

        // 👇 animation progressive (wave effect)
        setTimeout(() => {
            cell.classList.add("show");
        }, Math.random() * 200);
    });
}

export function renderAllHeatmaps(dataMap) {

    renderHeatmap("heatmap-sport", dataMap, "sport");

    setTimeout(() => {
        renderHeatmap("heatmap-study", dataMap, "study");
    }, 200);

    setTimeout(() => {
        renderHeatmap("heatmap-food", dataMap, "food");
    }, 400);

    setTimeout(() => {
        renderHeatmap("heatmap-health", dataMap, "health");
    }, 600);
}