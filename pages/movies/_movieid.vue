<template>
    <div>
        <v-parallax :src="`${img_url}${movie.backdrop_path}`">
            <v-row align="center">
                <v-col cols="12">
                    <h1 class="text-h2 font-weight-bold mb-4">{{ movie.original_title }}</h1>
                    <span class="text-subtitle-1">{{ time_convert(movie.runtime) }} |</span>
                    <span class="text-subtitle-1">{{ genres }}</span>
                </v-col>
            </v-row>
        </v-parallax>
        <!-- <v-btn @click="$router.back()" color="error">Back</v-btn> -->
        <v-card>
            <v-card-title>{{ movie.original_title }}</v-card-title>
            <v-img v-if="movie" width="750" height="750" :src="`${img_url}${movie.poster_path}`" />
            <v-card-text>{{ movie.overview }}</v-card-text>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    head() {
        return {
            title: this.movie.title
        }
    },
    data() {
        return {
            movie: '',
            genres: '',
            img_url: 'https://image.tmdb.org/t/p/original'
        }
    },
    async fetch() {
        await this.getMovies();
    },
    methods: {
        async getMovies() {
            // this.loading = true
            const movieid = await this.$route.params.movieid
            if (movieid) {
                const result = await axios.get(`https://api.themoviedb.org/3/movie/${movieid.toString()}?api_key=602d4d46a5923c3d4db6dd4d02ce80fe`)
                console.log(result.data)
                this.movie = result.data
                Object.values(result.data.genres).map((value, index) => {
                    if (result.data.genres.length != index + 1) {
                        this.genres += result.data.genres[index].name + ', '
                    } else {
                        this.genres += result.data.genres[index].name
                    }
                })
            }

            // result.data.results.forEach(movie => {
            //     this.movies.push(movie)
            //     this.loading = false

            // });
        },
        time_convert(num) {
            let hours = Math.floor(num / 60);
            let minutes = num % 60;
            return hours + "h " + minutes + "min";
        }
    },
}
</script>

<style lang="scss" scoped>
</style>