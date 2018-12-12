insert into games (game_handle, game_name, max_players, min_players) values
    ('4d093215-1f2d-4281-ab47-e65f3f8260b2', 'Tic Tac Toe', 2, 2),
    ('6f364b55-e362-49fe-930b-eb6e8cbdc1b2', 'Chess', 2, 2)
on conflict do nothing;
