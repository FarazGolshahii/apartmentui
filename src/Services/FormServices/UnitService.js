import { GetData } from "../ApiServices";

const Routes = 
{
    person : "BaseInfo/Person"
};

export const GetPersons = () => GetData(Routes.person);
