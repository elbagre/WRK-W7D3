# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.destroy_all
t1 = Todo.create(title: "Clean Room", body: "Pick up clothes")
t2 = Todo.create(title: "Get off my ship", body: "YOU'VE BEEN HERE TOO LONG!")
t3 = Todo.create(title: "Beer Time", body: "*sobs*")
t4 = Todo.create(title: "Sleep", body: "What is sleep!!?")
t5 = Todo.create(title: "GET WITH IT", body: "Fannieee")
