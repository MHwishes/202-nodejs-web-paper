const {Router} =require('express');
const SectionController = require('../../controller/section-controller');


const router = Router();
const sectionCtrl = new SectionController();

router.get('/', sectionCtrl.getAll);
router.post('/', sectionCtrl.create);
router.get('/:id', sectionCtrl.getOne);
router.put('/:id', sectionCtrl.update);
router.delete('/:id', sectionCtrl.delete);

module.exports = router;