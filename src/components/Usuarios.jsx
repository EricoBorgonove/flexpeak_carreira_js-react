import { useEffect, useState } from "react"

const Usuarios = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        let cancel = false;
        (async ()=>{
            const res = await fetch ("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            if (!cancel) setUsers(data)
        })();
        return () => {cancel = true;}
    },[])
    return <pre>{JSON.stringify(users, null, 1)}</pre>
}
export default Usuarios