import sql from 'sql-template-strings'
import PGWrapper from '../../common/pg-wrapper'
import userMapper from './users'
export const queuedMapper = (row) => ({
  userHandle: row.user_handle, 
  username: row.username,
  gameId: row.game_id, 
  status: row.status
})

export async function fetchTicTacToeQueueData(userHandle) {
  const query = sql`WITH users_queued AS (
    select * from users u where user_handle in (
    select user_handle from game_queue where game_handle = (
    select game_handle from games where game_name = 'Tic Tac Toe'
    )
    )
    ) select uq.username, uq.user_handle, gs.game_id,
    CASE
    WHEN ${userHandle} = gs.player_one_handle THEN gs.player_one_status
    WHEN ${userHandle} = gs.player_two_handle THEN gs.player_two_status
    ELSE 'queued'
    END AS status
    from users_queued uq
    left outer join game_status gs on
    (gs.player_one_handle = ${userHandle} and gs.player_two_handle = uq.user_handle)
    or (gs.player_one_handle = uq.user_handle and gs.player_two_handle = ${userHandle});`
      
  const queuedUsers = await PGWrapper.sqlAndMap(query, queuedMapper)
  return queuedUsers
}
export async function addUserToQueuedData(userHandle) {
  const statement = sql`insert into game_queue (user_handle, game_handle)
                          select ${userHandle}, game_handle from games where game_name = 'Tic Tac Toe';`
  await PGWrapper.sql(statement)
}
// export async function inviteUserToGameData(userHandle) {
//   const query = sql`;`
// }

// export async function acceptInviteUserDB(current, inviter) {
//   const statement = sql`update game_status set player_two_status = 'accepted',
//                         player_one_status = 'invited'
//                         where player_one_handle = ${inviter}
//                         and player_two_handle = ${current}
//                         and player_two_status = 'invited';`
//   const 
// }
// export async function fetchTicToeGameDataDB(id) {
//   const query = sql`select * from users where user_handle in (
//                       select player_one_handle, player_two_handle
//                       from game_status where game_id = ${id})';`
//   const results = await PGWrapper.sqlandMap(query, userMapper)
//   return results
// }