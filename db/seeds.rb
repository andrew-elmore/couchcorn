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
user2 = Account.create(account_email: "qqq", password: 'qqqqqq')

cat_travel = Category.create(name: "Adventure")
cat_city = Category.create(name: "City")
cat_usa_city = Category.create(name: "American Cities")
cat_islands = Category.create(name: "Islands")


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

video4 = Video.create!(title:'Hot Town', description: 'Created by Colby Moore')
film4 = open('https://couchcorn-seed.s3.amazonaws.com/colby_moore--hot_town.mp4')
video4.film.attach(io: film4, filename: 'colby_moore--hot_town.mp4')
thumb4 = open('https://couchcorn-seed.s3.amazonaws.com/colby_moore--hot_town.png')
video4.thumbnail.attach(io: thumb4, filename: 'colby_moore--hot_town.png')

video5 = Video.create!(title:'Never Sleep', description: 'Created by Colby Moore')
film5 = open('https://couchcorn-seed.s3.amazonaws.com/colby_moore--never_sleep.mp4')
video5.film.attach(io: film5, filename: 'colby_moore--never_sleep.mp4')
thumb5 = open('https://couchcorn-seed.s3.amazonaws.com/colby_moore--never_sleep.png')
video5.thumbnail.attach(io: thumb5, filename: 'colby_moore--never_sleep.png')

video6 = Video.create!(title: 'The London Feeling', description: 'Created by Davide Quatela')
film6 = open('https://couchcorn-seed.s3.amazonaws.com/davide_quatela--the_london_feeling.png')
video6.film.attach(io: film6, filename: 'davide_quatela--the_london_feeling.png')
thumb6 = open('https://couchcorn-seed.s3.amazonaws.com/davide_quatela--the_london_feeling.png')
video6.thumbnail.attach(io: thumb6, filename: 'davide_quatela--the_london_feeling.png')

video7 = Video.create!(title: 'Las Vegas', description: 'Created by Philip Bloom and Tom Poederbach')
film7 = open('https://couchcorn-seed.s3.amazonaws.com/tom_poederbach--las_vegas_blvd_copy_for_vimeo_by_philip_bloom.mp4')
video7.film.attach(io: film7, filename: 'tom_poederbach--las_vegas_blvd_copy_for_vimeo_by_philip_bloom.mp4')
thumb7 = open('https://couchcorn-seed.s3.amazonaws.com/tom_poederbach--las_vegas_blvd_copy_for_vimeo_by_philip_bloom.png')
video7.thumbnail.attach(io: thumb7, filename: 'tom_poederbach--las_vegas_blvd_copy_for_vimeo_by_philip_bloom.png')

video8 = Video.create!(title: 'Breathing Barcelona', description: 'Created by Davide Quatela')
film8 = open('https://couchcorn-seed.s3.amazonaws.com/davide_quatela--breathing_barcelona.mp4')
video8.film.attach(io: film8, filename: 'davide_quatela--breathing_barcelona.mp4')
thumb8 = open('https://couchcorn-seed.s3.amazonaws.com/davide_quatela--breathing_barcelona.png')
video8.thumbnail.attach(io: thumb8, filename: 'davide_quatela--breathing_barcelona.png')

video9 = Video.create!(title: 'Seattle Ferry Ride', description: 'Created by Brody Davis')
film9 = open('https://couchcorn-seed.s3.amazonaws.com/brody__davis--seattle_ferry_ride_timelapse.mp4')
video9.film.attach(io: film9, filename: 'brody__davis--seattle_ferry_ride_timelapse.mp4')
thumb9 = open('https://couchcorn-seed.s3.amazonaws.com/brody__davis--seattle_ferry_ride_timelapse.png')
video9.thumbnail.attach(io: thumb9, filename: 'brody__davis--seattle_ferry_ride_timelapse.png')

video10 = Video.create!(title: 'Crimean Caves', description: 'Created by Eugene Bryohin')
film10 = open('https://couchcorn-seed.s3.amazonaws.com/journey_through_the_crimean_caves_eugene_bryohin.mp4')
video10.film.attach(io: film10, filename: 'journey_through_the_crimean_caves_eugene_bryohin.mp4')
thumb10 = open('https://couchcorn-seed.s3.amazonaws.com/journey_through_the_crimean_caves_eugene_bryohin.png')
video10.thumbnail.attach(io: thumb10, filename: 'journey_through_the_crimean_caves_eugene_bryohin.png')

video11 = Video.create!(title: 'Boneyard', description: 'Created by Andrew Arthur Breese')
film11 = open('https://couchcorn-seed.s3.amazonaws.com/andrew-arthur-breese_boneyard-raw-broll.mp4')
video11.film.attach(io: film11, filename: 'andrew-arthur-breese_boneyard-raw-broll.mp4')
thumb11 = open('https://couchcorn-seed.s3.amazonaws.com/andrew-arthur-breese_boneyard-raw-broll.png')
video11.thumbnail.attach(io: thumb11, filename: 'andrew-arthur-breese_boneyard-raw-broll.png')

catas2city = CatAssignment.create(video_id: video2.id, category_id: cat_city.id)
catas4city = CatAssignment.create(video_id: video4.id, category_id: cat_city.id)
catas5city = CatAssignment.create(video_id: video5.id, category_id: cat_city.id)
catas6city = CatAssignment.create(video_id: video6.id, category_id: cat_city.id)
catas7city = CatAssignment.create(video_id: video7.id, category_id: cat_city.id)
catas8city = CatAssignment.create(video_id: video8.id, category_id: cat_city.id)

catas1travel = CatAssignment.create(video_id: video1.id, category_id: cat_travel.id)
catas3travel = CatAssignment.create(video_id: video3.id, category_id: cat_travel.id)
catas6travel = CatAssignment.create(video_id: video6.id, category_id: cat_travel.id)
catas9travel = CatAssignment.create(video_id: video9.id, category_id: cat_travel.id)
catas10travel = CatAssignment.create(video_id: video10.id, category_id: cat_travel.id)
catas11travel = CatAssignment.create(video_id: video11.id, category_id: cat_travel.id)

catas4usa = CatAssignment.create(video_id: video4.id, category_id: cat_usa_city.id)
catas5usa = CatAssignment.create(video_id: video5.id, category_id: cat_usa_city.id)
catas7usa = CatAssignment.create(video_id: video7.id, category_id: cat_usa_city.id)
catas9usa = CatAssignment.create(video_id: video9.id, category_id: cat_usa_city.id)

cat1island = CatAssignment.create(video_id: video1.id, category_id: cat_islands.id) 
cat3island = CatAssignment.create(video_id: video3.id, category_id: cat_islands.id) 