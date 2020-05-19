import axios from 'axios';

function getAllFunds() {
    return axios.get('http://localhost:8000/funds').then((res) => {
        let {data} = res 
        if (data){
            console.log(data)
            return data
        } else {
            return console.log("an error has occurred!")
        }
    }).catch((err) => {
        return err
    })
}

function getFundPerformance(fund) {
    let url = 'http://localhost:8000/funds/' + fund + '/performance' 
    return axios.get(url, {params: {
        _limit: 10
       }}).then((res) => {
        let {data} = res 
        if (data){
            console.log(data)
            return data[0]
        } else {
            return console.log("an error has occurred!")
        }
    }).catch((err) => {
        return err
    })
}

function getStats() {
    let url = 'http://localhost:8000/funds/stats' 
    return axios.get(url).then((res) => {
        let {data} = res 
        if (data){
            console.log(data)
            return data
        } else {
            return console.log("an error has occurred!")
        }
    }).catch((err) => {
        return err
    })
}

export {getAllFunds, getFundPerformance, getStats}