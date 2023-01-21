import { Router } from 'express'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeSignUpController } from '../../main/factories/controllers/login/signup/signup-controller-factory'

export default (router: Router): void => {
  router.post('/car', adaptRoute(makeSignUpController()))
  router.delete('/car/:id', adaptRoute(makeSignUpController()))
  router.patch('/car/:id', adaptRoute(makeSignUpController()))
}
