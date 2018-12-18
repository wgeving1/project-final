insert into game_status (game_handle, game_id, player_one_handle, player_two_handle, game_date, player_one_status, player_two_status) values
    ('4d093215-1f2d-4281-ab47-e65f3f8260b2', 'bb1469a8-952d-49f9-a255-4a23edabd739', '17832b68-e91e-45f4-9a92-042c69b1b9c5', '06fad102-1a73-41ad-ba62-7bbd4be3278f', now(), 'waiting', 'invited'),
    ('4d093215-1f2d-4281-ab47-e65f3f8260b2', '5348b44e-041b-451f-8433-ed37755fbfd7', '8b5213b1-4c41-499e-a1db-93da54713dbb', '17832b68-e91e-45f4-9a92-042c69b1b9c5', now(), 'waiting', 'invited')
on conflict do nothing;
