create table if not exists games
(
    game_handle uuid primary key default gen_random_uuid(),
    game_name text not null,
    max_players numeric,
    min_players numeric
);
grant select, insert, update, delete on table games to intensely_app;
grant select on table games to intensely_read;