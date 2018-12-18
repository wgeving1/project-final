CREATE TYPE player_status AS ENUM ('queued', 'waiting', 'invited', 'accepted', 'playing', 'denied', 'ended');
create table if not exists game_status
(
    game_handle uuid references games(game_handle),
    game_id uuid primary key default gen_random_uuid(),
    player_one_handle uuid references users(user_handle),
    player_two_handle uuid references users(user_handle),
    game_date timestamptz not null,
    player_one_status player_status not null,
    player_two_status player_status not null
);    
grant select, insert, update, delete on table game_status to intensely_app;
grant select on table game_status to intensely_read;

-- constraint on table so player 1 vs player 2 for one row is the opposite for player 1 vs player 2 of another