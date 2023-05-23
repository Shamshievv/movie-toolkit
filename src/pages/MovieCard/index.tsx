import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {IMovie} from "../../types/interfaces";
import {useState} from "react";
import {useAppSelector} from "../../Hooks/useAppSelector";
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Page from "../nextPage/page";
interface ICard {
  el:IMovie
}
export default function MovieCard({el}:ICard) {
    const [page,setPage] = useState(1)
    const {movie,loader,error} = useAppSelector(state => state.movieSlice)
    const [active,setActive] = useState(100)
    function handleClick () {
        if (active === 100){
            setActive(1200)
        }
        else{
            setActive(100)
        }
    }

    return (
       <div>
           {loader &&  <Stack spacing={1}>
                Загрузка
               <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
               Загрузка
               <Skeleton variant="circular" width={40} height={40} />
               <Skeleton variant="rectangular" width={210} height={60} />
               <Skeleton variant="rounded" width={210} height={60} />
           </Stack>}
           <Card style={{margin:"20px 0"}} sx={{ maxWidth: 345 }}>
               <CardActionArea>
                   <CardMedia
                       component="img"
                       height="300"
                       image={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`}
                       alt=""
                   />
                   <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                           {el.title}
                       </Typography>
                       <Typography variant="body2" color="text.secondary">


                           {
                               el.overview.length === 0 ? "Нету данных" : el.overview.slice(0,active)
                           }

                           {
                               active === 100   ? <p style={{cursor:"cell"}} onClick={handleClick}>Читать дальше </p>
                                   : <p style={{cursor:"ew-resize"}} onClick={handleClick}>Закрыть</p>
                           }

                       </Typography>
                   </CardContent>
               </CardActionArea>
           </Card>
           {loader &&  <Stack spacing={1}>
            Загрузка
               <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
               Загрузка
               <Skeleton variant="circular" width={40} height={40} />
               <Skeleton variant="rectangular" width={210} height={60} />
               <Skeleton variant="rounded" width={210} height={60} />
           </Stack>}

       </div>
    );
}
