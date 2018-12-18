insert into game_status (game_handle, game_id, player_one_handle, player_two_handle, game_date, player_one_status, player_two_status) values
 ('c2d6d85c-3c0d-498e-84a4-03b85bb6edbf', 'f14150ed-250a-4d50-a389-1e7e3c4264e0', '037b4897-8a2a-46b6-8ed7-47a555bb40f2', '06fad102-1a73-41ad-ba62-7bbd4be3278f', now(), 'waiting', 'invited'),
 ('c2d6d85c-3c0d-498e-84a4-03b85bb6edbf', 'b081bd87-5123-412a-97e4-e2fd27a16a31', '17832b68-e91e-45f4-9a92-042c69b1b9c5', '037b4897-8a2a-46b6-8ed7-47a555bb40f2', now(), 'waiting', 'invited')
on conflict do nothing;
