const {Router} =require('express');
const HomeworkController = require('../../controller/homework-controll');


const router = Router();
const homeworkCtrl = new HomeworkController();

router.get('/', homeworkCtrl.getAll);
router.post('/', homeworkCtrl.create);
router.get('/:id', homeworkCtrl.getOne);
router.put('/:id', homeworkCtrl.update);
router.delete('/:id', homeworkCtrl.delete);

module.exports = router;