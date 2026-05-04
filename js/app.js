import { messaging } from "./firebase.js";
import { initNotifications } from "./notifications.js";
import { updateTimeProgress } from "./progress.js";
import { renderTable } from "./ui.js";
import {
    initParse,
    fetchCareData,
    generateDateRange,
    buildDataMap
} from "./api.js";



document.addEventListener("DOMContentLoaded", () => {

    initNotifications(messaging);

    updateTimeProgress();

    initParse();

    fetchCareData()
      .then(data => {
        const allDates = generateDateRange();
        const dataMap = buildDataMap(data);
        renderTable({
            allDates,
            dataMap
        });
      })
      .catch(error => {
        console.error(error);
      });

});