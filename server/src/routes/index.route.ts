import { Router } from 'express';
const router = Router();
import userRoute from "./user.route";

router.use('/users', userRoute);

//redirects users to API documentation when they navigate to "/docs"
router.use("/docs", (req, res) => {
    res.redirect("");
})

export default router;