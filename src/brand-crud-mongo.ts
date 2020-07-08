import { Brand } from './brand';
import brands from './brand-schema';

export const getBrandList = async (req:any, res:any) => {
    brands.find((err: any, result: any) => {
        if (err) {
            res.send("Error!");
        } else {
            console.log(JSON.stringify(result))
            res.send(result);
        }
    });
};

export const createBrand = async (req:any, res:any) => {
    const request: Brand = req.body;
    console.log(JSON.stringify(request))
    let prod = new brands(request);
    prod.save((err:any, result:any) => {
        if (err) {
            console.log('Error', err)
            res.send("Error!");
        } else {
            console.log(JSON.stringify(result))
            res.send(result);
        }
    });
};

export const updateBrand = async (req:any, res:any) => {
    const brand: Brand = req.body;
    //Update
};

export const deleteBrand = async (req:any, res:any) => {
    const brand: number = req.body['id'];
    //delete
};
