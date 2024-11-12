import React from 'react'
// import useStore from 'react_host/store';

const AccountDummy = ({ count, inc }) => {
    
    // const { count, inc } = useStore();

    return (
        <div className=" mt-20 border border-blue-700 p-2 rounded-2xl">
            <h1>Dummy Component From Account</h1>
            <h2>{count}</h2>
            <button onClick={inc} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add One (from account's component)</button>
        </div>
    )
}

export default AccountDummy
