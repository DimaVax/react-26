export const getCast = async (id) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODk3ZWQzOGFiNjdhOTY1ZTExZTY4NDYwMzFlYzg1MCIsIm5iZiI6MTc1NzE1NDg2NS41ODUsInN1YiI6IjY4YmMwZTMxMGU5MTJhMzhlNjA2OTc0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h9663ewHtHYYPwD0qIlL_7qCdKozyouksYtihF2JLOA`,
        },
      }
    );
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};
