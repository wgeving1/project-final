insert into game_queue (user_handle, game_handle) values
 ('b9cdffec-ad82-4855-8cad-5315c3a06610', 'c2d6d85c-3c0d-498e-84a4-03b85bb6edbf'),
 ('17832b68-e91e-45f4-9a92-042c69b1b9c5', 'c2d6d85c-3c0d-498e-84a4-03b85bb6edbf'),
 ('17832b68-e91e-45f4-9a92-042c69b1b9c5', '7d5c759e-3671-4641-b7f7-d29c120b80dd'),
 ('06fad102-1a73-41ad-ba62-7bbd4be3278f', 'c2d6d85c-3c0d-498e-84a4-03b85bb6edbf')
on conflict do nothing;