import React, {Component} from "react"
import News from "./component/News"
export class Test extends Component {
    render(){
        return(
            <News pageCount={this.props.resultSize}  newsCat={this.props.newsCatTest} newsCountry="nz" />
        )
    }
}

export default Test