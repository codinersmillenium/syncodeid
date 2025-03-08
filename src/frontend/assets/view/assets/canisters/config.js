import { HttpAgent } from "@dfinity/agent"
import { getIdentity } from "../plugins/auth_icp.js"

const identity = await getIdentity()
const localAgent = await HttpAgent.create({
    host: "http://127.0.0.1:4349",
    identity: identity
})

export const optionsAgent = {
    agent: localAgent
}
