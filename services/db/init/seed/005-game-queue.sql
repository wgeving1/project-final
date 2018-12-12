insert into game_queue (user_handle, game_handle) values
    ('037b4897-8a2a-46b6-8ed7-47a555bb40f2', '4d093215-1f2d-4281-ab47-e65f3f8260b2'),
    ('17832b68-e91e-45f4-9a92-042c69b1b9c5', '4d093215-1f2d-4281-ab47-e65f3f8260b2'),
    ('17832b68-e91e-45f4-9a92-042c69b1b9c5', '6f364b55-e362-49fe-930b-eb6e8cbdc1b2')
on conflict do nothing;

