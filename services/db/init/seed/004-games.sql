insert into games (game_handle, game_name, max_players, min_players) values
 ('c2d6d85c-3c0d-498e-84a4-03b85bb6edbf', 'Tic Tac Toe', 2, 2),
 ('7d5c759e-3671-4641-b7f7-d29c120b80dd', 'Chess', 2, 2)
on conflict do nothing;