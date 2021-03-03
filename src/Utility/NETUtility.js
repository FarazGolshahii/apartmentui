export const NetDatetime = (datetime) =>
{
    return datetime && datetime.length >= 10 ? datetime.substr(0,10) : "";
}