const axios = require('axios')
const lgtv = require('./test.js')

function main() {
    axios.post('http://1b229ccf.ngrok.io/server', {data: 'dev', action: 'init'})
    .then((res) => {
        console.log(res)
        if (res.data != undefined && res.data === 'action') {
            lgtv.main()
        }
    })
    .catch((err) => {console.error(err)})
}

main()