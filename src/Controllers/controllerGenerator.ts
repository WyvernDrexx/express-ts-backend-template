
import { ENDPOINTS } from 'custom-constants'
import { Controllers } from 'types'

function controllerGenerator(modelName: typeof ENDPOINTS[number]) {
  const controllers: Controllers = {
    get(req, res) {
      res.json({
        message: `GET on [${modelName.toUpperCase()}] uid:${req.params.uid}`,
        isNull: req.ctx.isNull
      })
    },
    add(req, res) {
      res.json({
        message: `ADD on [${modelName.toUpperCase()}]`,
        isNull: req.ctx.isNull
      })
    },
    update(req, res) {
      res.json({
        message: `UPDATE on [${modelName.toUpperCase()}] uid:${req.params.uid}`,
        isNull: req.ctx.isNull
      })
    },
    delete(req, res) {
      res.json({
        message: `DELETE on [${modelName.toUpperCase()}] uid:${req.params.uid}`,
        isNull: req.ctx.isNull
      })
    }
  }

  return controllers
}

export { controllerGenerator }
