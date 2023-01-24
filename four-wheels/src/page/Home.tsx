import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Nav from '../components/Nav'

function Home() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_URL}/adverts`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className="">
            <Nav />
            <div>
                <div className="flex justify-center flex-wrap">
                    {data.map((value: any, i) => {
                        return <div key={i} className="">
                            <Card id={value.id} model={value?.model} brand={value?.brand} description={value?.description} name={value?.name} email={value?.email} phone={value?.phone} fabrication={value?.fabrication} createdAt={value?.createdAt} price={value.price} ></Card>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
