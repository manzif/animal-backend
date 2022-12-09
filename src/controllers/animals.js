import AnimalHelper from '../helper/animalHelper'

class AnimalLayersManager {
  static async saveAnimalData(req, res) {
    try {
      const createAnimal = await AnimalHelper.createAnimal(req.body)
      const { type, properties, geometry } = createAnimal.dataValues
      return res.status(201).json({
        message: 'Animal data saved successfuly',
        animal: {
          type,
          properties: {
            time: properties.time,
            type: properties.type
          },
          geometry,
        },
      })
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      })
    }
  }

  static async getAnimalLayer(req, res) {
    try {
      const findAnimals = await AnimalHelper.findAllAnimals(req.body.email)
      if (findAnimals) {
        const objectLayer = {
          type: 'FeatureCollection',
          crs: {
            type: 'name',
            properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
          },
          features: findAnimals,
        }
        return res.status(200).json({
          message: 'Layers retrieved successfuly',
          layer: objectLayer,
        })
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      })
    }
  }
}

export default AnimalLayersManager
