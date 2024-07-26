import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';

export class News extends Component {
    articles = []
    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/everything?q=apple&from=2024-06-26&to=2024-06-26&sortBy=popularity&apiKey=8b89cfba34be42deba51763fe6a5bca9&pageSize=${this.props.pageSize}&page=1`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles, loading:false})
    }
    handlePrev = async ()=>{

        let url = `https://newsapi.org/v2/everything?q=apple&from=2024-06-26&to=2024-06-26&sortBy=popularity&apiKey=8b89cfba34be42deba51763fe6a5bca9&pageSize=${this.props.pageSize}&page=${this.state.page-1}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles, page: this.state.page-1, loading:false})
    }
    handleNext = async ()=>{

        let url = `https://newsapi.org/v2/everything?q=apple&from=2024-06-26&to=2024-06-26&sortBy=popularity&apiKey=8b89cfba34be42deba51763fe6a5bca9&pageSize=${this.props.pageSize}&page=${this.state.page+1}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles,page: this.state.page+1, loading:false})
    }
    render() {
        return (
            <div className="container my-3">
                <h1 className='text-center'>NewsMonkey top headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (<div key={element.url} className="col-md-4">
                            <NewsItem title={element.title} 
                            description={element.description} 
                            imageUrl={element.urlToImage?element.urlToImage:"https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4286x2411+0+387/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F2f%2F8b%2Fa329a0574544be1908a9ebdd8f0b%2Fgettyimages-1781821120.jpg"} 
                            newsUrl={element.url}/>
                        </div>)
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
