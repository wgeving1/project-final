drop table if exists plans;
drop table if exists passhash;
drop table if exists users;

drop database if exists intensely;
drop database if exists intensely_integration;
drop role if exists intensely_app;
drop role if exists intensely_read;

create role intensely_app login password 'intenselydev' valid until 'infinity';
create role intensely_read login password 'intenselydev' valid until 'infinity';
create database intensely;
create database intensely_integration;
