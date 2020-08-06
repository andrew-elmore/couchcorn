# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'



Account.destroy_all
Video.destroy_all
Category.destroy_all

user1 = Account.create(account_email: "name@website.com", password: 'password')
user1 = Account.create(account_email: "qqq", password: 'qqqqqq')

cat1 = Category.create(name: "Travel")
cat2 = Category.create(name: "Fireworks")


video1 = Video.create!(title: 'Iceland | Land of Fire and Ice', description: 'Created by Travel Pockets')
film1 = open('https://couchcorn-seed.s3.amazonaws.com/travelpockets_iceland_land_of_fire_and_ice.mp4')
video1.film.attach(io: film1, filename: 'travelpockets_iceland_land_of_fire_and_ice.mp4')
thumb1 = open('https://couchcorn-seed.s3.amazonaws.com/travelpockets_iceland_land_of_fire_and_ice_thumbnail.png')
video1.thumbnail.attach(io: thumb1, filename: 'travelpockets_iceland_land_of_fire_and_ice_thumbnail.png')

video2 = Video.create!(title: '9th May', description: 'Created by Alex Soloviev')
film2 = open('https://couchcorn-seed.s3.amazonaws.com/alex-soloviev-9th-may.mp4')
video2.film.attach(io: film2, filename: 'alex-soloviev-9th-may.mp4')
thumb2 = open('https://couchcorn-seed.s3.amazonaws.com/alex-soloviev-9th-may-thumbnail.png')
video2.thumbnail.attach(io: thumb2, filename: 'alex-soloviev-9th-may-thumbnail.png')

video3 = Video.create!(title: 'French Polynesia', description: 'Created by Matt Devir')
film3 = open('https://couchcorn-seed.s3.amazonaws.com/french_polynesia--matt_devir.mp4')
video3.film.attach(io: film3, filename: 'french_polynesia--matt_devir.mp4')
thumb3 = open('https://couchcorn-seed.s3.amazonaws.com/french_polynesia--matt_devir.png')
video3.thumbnail.attach(io: thumb3, filename: 'french_polynesia--matt_devir.png')

catas1 = CatAssignment.create(video_id: video1.id, category_id: cat1.id)
catas2 = CatAssignment.create(video_id: video2.id, category_id: cat2.id)
catas3 = CatAssignment.create(video_id: video3.id, category_id: cat1.id)