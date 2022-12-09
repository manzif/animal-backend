import model from '../db/models'

const { Animal } = model

class AnimalHelper {
  static async createAnimal(body) {
    try {
      const { type, image, time, latitude, longitude } = body
      const addedUser = await Animal.create({
        type: "Point",
        properties: {
          type,
          time,
          image,
        },
        geometry: [longitude, latitude],
      })
      return addedUser
    } catch (error) {
      throw new Error(error)
    }
  }

  static async findAnimalById(id) {
    const findAnimal = await Animal.findOne({
      where: { id },
    })
    return findAnimal
  }

  static async findAllAnimals() {
    try {
      const findAnimal = await Animal.findAll()
      return findAnimal
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default AnimalHelper
