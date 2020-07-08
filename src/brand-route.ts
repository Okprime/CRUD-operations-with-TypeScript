import express from 'express';
import bodyParser from 'body-parser';
import * as brandCRUD from './brand-crud-mongo';

const route = express.Router();

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: false }));

route.get('/brand', brandCRUD.getBrandList);

route.post('/', brandCRUD.createBrand);

route.post('/updatebrand', brandCRUD.updateBrand);

route.post('/deletebrand', brandCRUD.deleteBrand);

export default route;

