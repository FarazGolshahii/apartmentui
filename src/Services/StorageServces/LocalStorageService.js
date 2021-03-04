
const buildingKey = "building";

export const WriteBuilding = (value) => localStorage.setItem(buildingKey, value);
export const ReadBuidling =  () =>  1 //localStorage.getItem(buildingKey);