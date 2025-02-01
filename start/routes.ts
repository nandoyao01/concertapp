/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const PaymentsController = () => import('#controllers/payments_controller')
const GticketsController = () => import('#controllers/gtickets_controller')

router.on('/').render('pages/home');

router.post('payment', [PaymentsController, 'store']).as('buyg');
router.get('done', [PaymentsController, 'index']).as('admin');

router.get('/ticket/:id', [PaymentsController, 'show']).as('ticket');

router.get('/generate-ticket/:id', [GticketsController, 'generateTicket'])
