import { optionsAgent } from "./config.js";
import { createActor, canisterId } from "../../../../../declarations/contest/index.js";

const actor = createActor(canisterId, optionsAgent);

// get
export const getAllContests = async (filter) => {    
    return await actor.getAllContests({[filter]: null});
}

export const getContest = async (id) => {    
    return await actor.getContest(id);
}

export const getContestTerm = async (id) => {    
    return await actor.getContestTermsByParent(id);
}

// create
export const createContests = async (data) => {    
    return await actor.createContest(data)
}

export const createContestsTerm = async (data) => {    
    return await actor.createContestTerm(data)
}