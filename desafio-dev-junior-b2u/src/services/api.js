import axios from 'axios'

// axios.create({
//     baseURL:'http://localhost:2000'
// })

// export default axios

export default axios.create({
    baseURL:'http://localhost:2000',
    timeout:10000,
    headers:{'Content-Type' : 'application/json'}
})