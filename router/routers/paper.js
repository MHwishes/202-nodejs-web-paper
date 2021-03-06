const {Router} =require('express');
const PaperController = require('../../controller/paper-controller');


const router = Router();
const paperCtrl = new PaperController();

router.get('/', paperCtrl.getAll);
router.post('/', paperCtrl.create);
router.get('/:id', paperCtrl.getOne);
router.put('/:id', paperCtrl.update);
router.delete('/:id', paperCtrl.delete);

module.exports = router;