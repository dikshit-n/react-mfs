import React from "react"
import AccountDummy from 'account/Dummy'
import useStore from "../store"

const Home = () => {
    const { count, inc } = useStore()

    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            React Host Home
            <AccountDummy count={count} inc={inc} />
        </div>
    )
}

export default Home