import { messaging } from "./firebase.js";
import { initNotifications } from "./notifications.js";
import { updateTimeProgress } from "./progress.js";
import { renderAllHeatmaps } from "./heatmap.js";
import {
  initParse,
  fetchCareData,
  generateDateRange,
  buildDataMap
} from "./api.js";



document.addEventListener("DOMContentLoaded", () => {

  initParse();
  document.body.classList.add("loading");

  fetchCareData()
    .then(data => {
      const allDates = generateDateRange();
      const dataMap = buildDataMap(data);
      renderAllHeatmaps(dataMap);
    })
    .catch(error => {
      console.error(error);
    });
  
  document.body.classList.remove("loading");

  initNotifications(messaging);

  updateTimeProgress();
});