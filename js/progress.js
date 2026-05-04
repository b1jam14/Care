export function updateTimeProgress() {
    const start = new Date(new Date().getFullYear(), 4, 1);  // 1 mai
    const end = new Date(new Date().getFullYear(), 5, 30);   // 30 juin

    const now = new Date();

    const total = end - start;
    const elapsed = now - start;

    let progress = elapsed / total;

    // clamp entre 0 et 1
    progress = Math.max(0, Math.min(1, progress));

    const percent = Math.floor(progress * 100);

    const bar = document.getElementById("progress-fill");
    const wrapper = document.getElementById("progress-bar-wrapper");

    if (bar) bar.style.width = percent + "%";
    if (wrapper) wrapper.setAttribute("aria-valuenow", percent);
}