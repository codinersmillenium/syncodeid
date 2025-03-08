import { optionsAgent } from "./config.js"
import { createActor, canisterId } from "../../../../../declarations/token/index.js"

const actor = createActor(canisterId, optionsAgent)

export const buyIn = async(value) => {
    return await actor.buyIn(value)
}