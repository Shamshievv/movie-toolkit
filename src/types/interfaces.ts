export interface IMovie {
    title:string
    poster_path:string
    overview:string
    id:number
}
export interface IDetail {
    title:string
    id:number
    poster_path:string
    backdrop_path:string
    release_date:string
    vote_average:number
    description:string
    genres:[
        {
            name:string
            id:number
        }
    ]
    runtime:number
    original_title:string
    overview:string
}
export interface IActors{
    profile_path:string
    id:number
    original_name:string
    character:string
}
export interface IInformation{
    place_of_birth:string
    biography:string
    birthday:string
    profile_path:string
    also_known_as:[key:string]
    name:string
    known_for_department:string
    gender:number
    text:string
    id:number
}
export interface IActorMovies{
    id:number
    poster_path:string
    title:string

}