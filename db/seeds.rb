movies = [
  {
    "title" => "Movie",
    "genre" => "Drama",
    "review" => "Awesome!"
  },
  { "title" => "Movie 2",
    "genre" => "Drama 2",
    "review" => "Awesome 2!"
  },
  { "title" => "Movie 3",
    "genre" => "Drama 3",
    "review" => "Awesome! 3"
  }
]

movies.each do |x|
  movie = Movie.create(title: x["title"], genre: x["genre"])
  Review.create(content: x["review"], movie_id: movie.id)
end
