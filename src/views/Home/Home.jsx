import { Link } from 'react-router-dom'

export default function Home() {
    return (
<div>
<h1>Acme Inc. Employee Directory</h1>
<h3>Please create a profile so that you can complete the new employee registration!</h3>
<h4>Just answer a few of our questions and you will be updated into our employee database</h4>
<Link to='/signup'>Create an Account</Link> 
<br/>
<Link to='/login'>My Account</Link>
</div>
    )
}
