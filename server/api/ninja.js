export default defineEventHandler(async (event) => {

    // // handle query params
    // const { name } = getQuery(event)

    // // handle post data
    // const { age } = await readBody(event)
    
    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_kQ1kRCgTwjFZUB9Bh2pqSFtmI2c1uDdITWKs45hv')

    // return {
    //     message: `Hello, ${name}! Your are ${age} years old.`
    // }

    return data

})