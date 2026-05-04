export function initParse() {
    Parse.initialize(
        "vjIFxBKNVLsjfP9mSAedLT15c2yDHoCTvL5dUJma", // App ID
        "3bgvp0Aew4Yr2DJeSHPvuQm9YNW7OB3BabT5A8Dx"  // JS Key
    );

    Parse.serverURL = "https://parseapi.back4app.com/";
}

export async function fetchCareData() {
    try {
        const Care = Parse.Object.extend("Care");
        const query = new Parse.Query(Care);

        query.ascending("Date");

        const results = await query.find();

        return results.map(item => ({
            date: item.get("Date"),
            sport: item.get("Sport"),
            study: item.get("Study"),
            food: item.get("Food"),
            health: item.get("Health")
        }));

    } catch (error) {
        console.error("❌ Erreur fetchCareData :", error);
        return [];
    }
}

export function generateDateRange() {
    const year = new Date().getFullYear();

    const start = new Date(year, 4, 2);
    const end = new Date(year, 6, 1);

    const dates = [];
    const current = new Date(start);

    while (current.getTime() <= end.getTime()) {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }

    return dates;
}

export function formatDateKey(date) {
    return date.toISOString().split("T")[0];
}

export function buildDataMap(data) {
    const map = {};

    data.forEach(item => {
        const key = formatDateKey(new Date(item.date));

        map[key] = {
            sport: item.sport,
            study: item.study,
            food: item.food,
            health: item.health
        };
    });

    return map;
}