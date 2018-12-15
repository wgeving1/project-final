import sql from 'sql-template-strings'
import PGWrapper from '../../common/pg-wrapper'
import { userMapper } from './users'

export async function fetchTicTacToeQueueData() {
  const query = sql`select u.user_handle, u.username from (select * from users u where user_handle in (
    select user_handle from game_queue where game_handle = (
      select game_handle from games where game_name = 'Tic Tac Toe'))full outer join game_status gs on 
      u.user_handle = gs.player_one_handle or u.user_handle = gs.player_two_handle 
      ;`

  const queuedUsers = await PGWrapper.sqlAndMap(query, userMapper)
  return queuedUsers
}
export async function addUserToQueuedData(userHandle) {
  const statement = sql`insert into game_queue (user_handle, game_handle)
                          select ${userHandle}, game_handle from games where game_name = 'Tic Tac Toe';`
  await PGWrapper.sql(statement)
}
