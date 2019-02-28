import { fetchTicTacToeQueueData, addUserToQueuedData, acceptInviteUserDB, fetchTicToeGameDataDB } from '../repositories/games'

export async function fetchTicTacToeQueue(userHandle) {
    const queued = await fetchTicTacToeQueueData(userHandle)
    return { queued }
}

export async function addUserToQueue(userHandle) {
    await addUserToQueuedData(userHandle)
    const queued = await fetchTicTacToeQueueData(userHandle)
    return { queued }
}
// export async function inviteUserToGame(userHandle) {
//     await inviteUserToGameData(userHandle)
//     const 
// }

export async function acceptInviteFromUser(current, inviter) {
    await acceptInviteUserDB(current, inviter)
}
export async function fetchTicToeGameData(id) {
    const game = await fetchTicToeGameDataDB(id)
    return { game }
}
