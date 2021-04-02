import { computeHeadingLevel } from '@testing-library/dom';
import React from 'react'
import { getSchedule } from "./services";
 
class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }
 
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums").then(a => a.json()).then(b => this.setState({ arr: b }))
    }
 
    render() {
        return (
            <>
                <table>
                    {
                        this.state.arr.map(n => <tr><td>{n.userId}</td><td>{n.title}</td></tr>)
                    }
                </table>
            </>
        );
    }
}
 
// const Schedule = () => (
//     <div>
//         <ul>
//             <li>4/5 Bengal Tigers</li>
//             <li>4/8 Hyderabad Sunrisers</li>
//             <li>4/14 Chennai Superkings</li>
 
//         </ul>
//     </div>
// )
 
export default Schedule