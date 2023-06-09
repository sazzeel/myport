import { Router } from "express";
import messages from "../customs/messages";

const router = Router();

export type Route = {
    path: string;
    route: Router;
};

const routes: Route[] =[
    
];

routes.forEach((route) => {
    router.use(route.path, route.route);

});

router.get('/', (req,res)=>{
    res.send({
        success: true,
        message: messages ['welcomeMessage'],
        data:[],
    })
})

export default router; 


