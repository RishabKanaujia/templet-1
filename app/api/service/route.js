import service from "../database/models/service";

export async function getService(){
    const data = await service.find()
    return data;
    }