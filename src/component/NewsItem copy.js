import React, { Component } from 'react'


export class NewsItem extends Component {
    
    
    
    render() {
        let {title, des, imgUrl,goToUrl, articalDate, articalA} = this.props;
        return (
             <div className='col-3 px-3 py-3'>
                <div className="card">
                    <img src={imgUrl} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{des}</p>
                            <a rel="noreferrer" target='_blank' href={goToUrl} className="btn btn-primary">Go somewhere</a>
                        </div>
                        <div className="card-footer text-body-secondary">{articalA} {new Date(articalDate).toGMTString()}</div>

                </div>
            </div>
        )
    }
}

export default NewsItem
