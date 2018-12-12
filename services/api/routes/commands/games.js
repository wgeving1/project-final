import { fetchTicTacToeQueueData } from '../repositories/games'

export async function fetchTicTacToeQueue() {
    const queued = await fetchTicTacToeQueueData()
    return { queued }
}