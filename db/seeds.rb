# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'



Account.destroy_all

user1 = Account.create(account_email: "name@website.com", password: 'password')


video1 = Video.create(title: 'Iceland | Land of Fire and Ice', description: 'Created by Travel Pockets')
file1 = open('https://couchcorn-pro.s3.amazonaws.com/travelpockets_iceland_land_of_fire_and_ice_thumbnail.png')
video1.film.attach(io: file1, filename: 'travelpockets_iceland_land_of_fire_and_ice_thumbnail.png')