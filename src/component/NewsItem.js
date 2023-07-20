import React from 'react'

export default function NewsItem(props) {
  return (
//    let {title, des, imgUrl,goToUrl, articalDate, articalA} = this.props;
        
             <div className='col-4 px-3 py-3'>
                <div className="card">
                    <img src={props.imgUrl} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.des}</p>
                            <a rel="noreferrer" target='_blank' href={props.goToUrl} className="btn btn-primary">Go somewhere</a>
                        </div>
                        <div className="card-footer text-body-secondary">{props.articalA} {new Date(props.articalDate).toGMTString()}</div>

                </div>
            </div>
  )
 
}