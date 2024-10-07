import { useEffect, useState } from 'react';

function UserProfile() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetching user data when the component mounts
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => setUserData(data));

        // Cleanup if necessary (e.g., aborting fetch)
        return () => {
            console.log('Cleanup on unmount');
        };
    }, []);

    return <div>{userData ? userData.name : 'Loading...'}</div>;
}
export default UserProfile