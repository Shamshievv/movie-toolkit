import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../Hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {getTopRated} from "../../store/Reducers/ActionCreators";
import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import {Link} from "react-router-dom";
const TopRated = () => {
    const [active,setActive] = useState(100)
    function handleClick () {
        if (active === 100){
            setActive(1200)
        }
        else{
            setActive(100)
        }
    }

    const {movie,loader,error} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()
    const [page,setPage] = useState(1)
     const {language} = useAppSelector(state => state.ActorMovieSlice)
    useEffect(() => {
        dispatch(getTopRated(page,language))
        setPage(page)
        pages()
    },[page,language])


    function pages(){
        if (page === 0){
            return setPage(1)
        }
    }
    pages()
    // console.log(movie)
    return (
        <div className="rated">

            {loader &&  <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
            }
          <div className="container">
              <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                  {
                     movie.map((el)=>(
                             <div>
                                 <Card style={{margin:"20px 0",background:"gray"}} sx={{ maxWidth: 345 }}>
                                     <CardActionArea>
                                         <Link to={`/detail/${el.id}`}>

                                         <CardMedia
                                             component="img"
                                             height="300"
                                             image={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`}
                                             alt=""
                                         />
                                         </Link>

                                         <CardContent>
                                             <Typography  gutterBottom variant="h5" component="div">
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
                                 </Stack>
                                 }

                             </div>


                     ))
                  }
              </div>
          </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <button style={{
                    width:"100px",
                    height:"30px",
                    background:"0",
                    border:"3px solid black",
                    cursor:"pointer",
                    margin:"0 20px",
                    color:"wheat",
                    fontSize:"20px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                }} onClick={() => setPage(page + 1)}>+</button>

                <p>
                    Page :
                    <span style={{color:"red"}}>
                      {page}
                    </span>
                </p>

                <button  style={{
                    width:"100px",
                    height:"30px",
                    background:"black",
                    border:"none",
                    cursor:"pointer",
                    margin:"0 20px",
                    color:"wheat",
                    fontSize:"20px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                }} onClick={() => setPage(page - 1)}>-</button>
            </div>
        </div>
    );
};

export default TopRated;