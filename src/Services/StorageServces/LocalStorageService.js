
const buildingKey = "building";

export const WriteBuilding = (value) => localStorage.setItem(buildingKey, value);
export const ReadBuidling =  () => localStorage.getItem(buildingKey);