
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import './Featured.css'
import CoinCard from './CoinCard'

const Featured = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // console.log(data)

    if (!data) return null

    return (
        <div className='featured'>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Tether</h2>
                    <p>See all available assets: Cryptocurrencies</p>
                    <button className='btn'>See More Coins</button>
                </div>

                {/* Right */}

                <div className='right'>
                    {data.map(data => (
                        <CoinCard key={data.id} data={data} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Featured