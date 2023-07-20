import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
// import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

    const [newsInfo, setNewInfo] = useState([]);
    const [loader, setLoader] = useState(false);
    const [page, setPage] = useState(1);
    const [tr, setTr] = useState(0);






    const newsApi = async (newsCat, page) => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.newsCountry}&category=${props.newsCat}&apiKey=${props.apikeynew}&page=${page}&pageSize=${props.pageCount}`;
        // let url = 'https://jsonplaceholder.typicode.com/albums';

        console.log(props.newsCat, 'function => ');
        console.log(page, 'function page => ');

        setLoader(true);// loader 

        let fetchUrl = await fetch(url),
            urlResult = await fetchUrl.json();
        setNewInfo(urlResult.articles);
        setTr(urlResult.totalResults);
        setLoader(false);
        console.log(setNewInfo(urlResult.articles));
        console.log('----------------------------');
    }

    useEffect(() => {
        newsApi();
    }, [props.newsCat])



    const nextPageClick = async (prevProps) => {
        setPage(page + 1);
        newsApi(props.newsCat, page + 1);
    }

    const backPageClick = async () => {
        // this.setState({ page: this.state.page - 1 })
        setPage(page - 1);
        newsApi(props.newsCat, page - 1);

    }
    // render() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='d-flex my-3 align-items-center justify-content-between'>
                        <h1>Top News about {props.newsCat}</h1>

                        <div className='d-flex align-items-center'>
                            <span>{page} / {Math.ceil(tr / props.pageCount)}</span>


                            <button type="button" disabled={(page <= 1)} onClick={backPageClick} className="btn btn-dark  mx-4">Back</button>
                            <button type="button" disabled={page + 1 > Math.ceil(tr / props.pageCount)} onClick=
                                {nextPageClick} className="btn btn-dark">Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {loader && <Loading />}
            </div>


            <div className='container'>
                <div className='row'>
                    {newsInfo.map((ele, i) => {
                        return <NewsItem key={i} title={ele.title ? ele.title : ''} des={ele.description ? ele.description : ''} goToUrl={ele.url ? ele.url : ''} imgUrl={ele.urlToImage ? ele.urlToImage : 'https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png'} articalDate={ele.publishedAt} articalA={ele.author ? ele.author : 'author'} />
                    })}

                    {/* {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })} */}
                </div>
            </div>


        </div>
    )
    // }
}

// export default News
