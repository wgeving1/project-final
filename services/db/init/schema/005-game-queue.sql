create table if not exists game_queue
(
    user_handle uuid references users(user_handle),
    game_handle uuid references games(game_handle),
    primary key (user_handle, game_handle)
);    
grant select, insert, update, delete on table game_queue to intensely_app;
grant select on table game_queue to intensely_read;