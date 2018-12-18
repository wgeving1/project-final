import { fetchTicTacToeQueueData, addUserToQueuedData } from '../repositories/games'

export async function fetchTicTacToeQueue(userHandle) {
    const queued = await fetchTicTacToeQueueData(userHandle)
    return { queued }
}

export async function addUserToQueue(userHandle) {
    await addUserToQueuedData(userHandle)
    const queued = await fetchTicTacToeQueueData()
    return { queued }
}
