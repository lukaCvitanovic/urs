const axios = require('axios')

function main() {
    axios.post('http://1b229ccf.ngrok.io/server', {data: 'mobile', action: 'action'})
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {console.error(err)})
}

main()