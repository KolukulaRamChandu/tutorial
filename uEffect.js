import {useEffect,useState} from "react"

function Effect() {
    const [userData,setUserData] = useState(null)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            .then(data => setUserData(data))
        return () => {
            console.log("Clean Up on unmount")
        }
    }, [])
    
    return (
        <div>
            <h1>{userData ? userData.name : "Loading..."}</h1>
        </div>
    )

}
export default Effect