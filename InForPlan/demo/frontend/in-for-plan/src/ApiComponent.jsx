import React, {Component} from "react";
import axios from "axios";

class ApiComponent extends Component {    
    constructor(props) {
        super(props)
        this.state = {
            message: ""
        }
    }

    componentDidMount() {
        this.getApi();
    }

    getApi = () => {
        axios.get("http://localhost:8080/api")
            .then(res => {
                console.log(res);
                this.setState({
                    message: res.data.message
                })
            })
            .catch(res => console.log(res))
    }

    render() {
        return(
            <div>
                API 페이지 <br></br>
                { this.state.message }
                {/* 받아온 메세지를 출력한다 */}
            </div>
        )
    }
}

export default ApiComponent