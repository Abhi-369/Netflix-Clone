import React from 'react'
import Banner from '../Banner'
import Nav from '../Nav'
import requests from '../Requests';
import Row from '../Row';

const HomeScreen = () => {

    return (
        <div style={{overflow: 'hidden'}}>

            <Nav />

            <Banner />

            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="TV Dramas" fetchUrl={requests.fetchTvDramas} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Thrillers Movies" fetchUrl={requests.fetchThriller} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Shows For Kids" fetchUrl={requests.fetchKids} />

        </div>
    )
}

export default HomeScreen