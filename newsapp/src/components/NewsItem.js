import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
        <div className="my-3">
        <div className="card mr-auto" style={{width:"100%", height: "100%"}}>
            <img src={imageUrl} className="card-img-top" style={{height:"15rem"}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,70)}...</h5>
                <p className="card-text">{description.slice(0,80)}...</p>
                <a href={newsUrl} rel='noreferrer' target="blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
        </div>
        )
    }
}

export default NewsItem
