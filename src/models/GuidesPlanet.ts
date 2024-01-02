import { Schema, model, models } from 'mongoose'

const GuidePlanetSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: [true, 'Name is required.'],
    },
    orderFromSun: {
        type: Number
    }
})

const GuidePlanet = models.GuidePlanet || model('GuidePlanet', GuidePlanetSchema)

export default GuidePlanet