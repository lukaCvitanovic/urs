const axios = require('axios')

function main() {
    axios.post('http://localhost:9000/server', {data: 'hello there'})
    .catch((err) => {console.error(err)})
    // .then((res) => {
    //     console.log(res)
    // })
}

main()