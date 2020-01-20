const axios = require('axios')

function main() {
    axios.post('http://localhost:9000', {data: 'hello there'})
    .catch((err) => {console.error(err)})
    // .then((res) => {
    //     console.log(res)
    // })
}

main()