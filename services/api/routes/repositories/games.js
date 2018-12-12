import sql from 'sql-template-strings'
import PGWrapper from '../../common/pg-wrapper'

export async function fetchTicTacToeQueueData() {
  const query = sql`select * from game_queue where game_handle = (
      select game_handle from games where game_name = 'Tic Tac Toe');`

  const queuedUsers = await PGWrapper.sqlAndMap(query, (row) => ({
    userHandle: row.user_handle
  }))

  return queuedUsers
}
