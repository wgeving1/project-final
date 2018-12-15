import { fetchTicTacToeQueueData, addUserToQueuedData } from '../repositories/games'

export async function fetchTicTacToeQueue() {
    const queued = await fetchTicTacToeQueueData()
    return { queued }
}

export async function addUserToQueue(userHandle) {
    await addUserToQueuedData(userHandle)
    const queued = await fetchTicTacToeQueueData()
    return { queued }
}
export async function inviteUserToGame(userHandle) {
    await 
}