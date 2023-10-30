import React from 'react'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
const Earn = () => {
  return (
    <>
    <NavBar />
    <div className='flex flex-col px-60 py-8'>
        <div className='flex flex-row'>
            <div className='text-3xl'>Earn</div>
            <div></div>
        </div>
        <div className='flex flex-col'>
            <div className='text-l text-gray-400'>Stake $ZOMI and $ZLP to earn rewards.</div>
            <div className='text-l text-gray-400'>For detailed stats:</div>
        </div>
        <div className='my-4 grid grid-cols-2 gap-8 '>
            <div className='flex flex-col'>
                <div className='pl-2 py-2 text-xl border border-gray-300 rounded-sm'>$ZOMI</div>
                <div className='border-x border-gray-300'>
                    <div className='flex flex-col border-b border-gray-300 gap-3'>
                        <div className='flex flex-row justify-between pt-2'>
                            <div className='text-gray-400 pl-4'>Price</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='text-gray-400 pl-4'>Waller</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between pb-2'>
                            <div className='text-gray-400 pl-4'>Staked</div>
                            <div className='pr-4'>$34</div>
                        </div>
                    </div>
                </div>
                <div className='border-x border-gray-300'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-row justify-between pt-2'>
                            <div className='text-gray-400 pl-4'>APR</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='text-gray-400 pl-4'>Rewards</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='text-gray-400 pl-4'>Multiplier Points APR</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between pb-2'>
                            <div className='text-gray-400 pl-4'>Boost Percentage</div>
                            <div className='pr-4'>$34</div>
                        </div>
                    </div>
                </div>
                <div className='border-x border-t border-gray-300'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-row justify-between pt-2'>
                            <div className='text-gray-400 pl-4'>Total Staked</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between pb-2'>
                            <div className='text-gray-400 pl-4'>Total Supply</div>
                            <div className='pr-4'>$34</div>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-300 px-1 pb-2'>
                    <button class=" flex ml-2 mt-2 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded items-center justify-center"> 
                    Buy $ZOMI
                    </button>
                </div>    
            </div>
            
            <div className='flex flex-col'>
                <div className='pl-2 py-2 text-xl border border-gray-300 rounded-sm'>Total Rewards</div>
                <div className='flex flex-col border-x border-gray-300 gap-3'>
                    <div className='flex flex-row justify-between pt-2'>
                        <div className='text-gray-400 pl-4'>ETH (WETH)</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-gray-400 pl-4'>$ZOMI</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-gray-400 pl-4'>Escrowed $ZOMI</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-gray-400 pl-4'>Multiplier Points</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between pb-2'>
                        <div className='text-gray-400 pl-4'>Staked Multiplier Points</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between pb-2'>
                        <div className='text-gray-400 pl-4'>Total</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-black pl-4'>/</div>
                        <div className='pr-4 text-black'>/</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-black pl-4'>/</div>
                        <div className='pr-4 text-black'>/</div>
                    </div>
                    <div className='flex flex-row justify-between pb-2'>
                        <div className='text-black pl-4'>/</div>
                        <div className='pr-4 text-black'>/</div>
                    </div>
                </div>
                <div className='border border-gray-300 pb-2'>
                    <button class=" flex ml-2 mt-2 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded items-center justify-center"> 
                    Connect Wallet
                    </button>
                </div>    
            </div>

            <div className='flex flex-col'>
                <div className='pl-2 py-2 text-xl border border-gray-300 rounded-sm'>$ZLP (Ethereum)</div>
                <div className='border-x border-gray-300'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-row justify-between pt-2'>
                            <div className='text-gray-400 pl-4'>Price</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='text-gray-400 pl-4'>Waller</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between pb-2'>
                            <div className='text-gray-400 pl-4'>Staked</div>
                            <div className='pr-4'>$34</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-col border border-gray-300 gap-3'>
                        <div className='flex flex-row justify-between pt-2'>
                            <div className='text-gray-400 pl-4'>APR</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between pb-2'>
                            <div className='text-gray-400 pl-4'>Rewards</div>
                            <div className='pr-4'>$34</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-col border-x border-gray-300 gap-3'>
                        <div className='flex flex-row justify-between pt-2'>
                            <div className='text-gray-400 pl-4'>Total Staked</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between pb-2'>
                            <div className='text-gray-400 pl-4'>Total Supply</div>
                            <div className='pr-4'>$34</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row border border-gray-300 pb-2'>
                    <button class=" flex ml-2 mt-2 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded items-center justify-center"> 
                    Buy $ZLP
                    </button>
                    <button class=" flex ml-2 mt-2 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded items-center justify-center"> 
                    Sell $ZLP
                    </button>
                </div>    
            </div>

            <div className='flex flex-col'>
                <div className='pl-2 py-2 text-xl border border-gray-300 rounded-sm'>Escrowed $ZOMI</div>
                <div className='border-x border-b border-gray-300'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-row justify-between pt-2'>
                            <div className='text-gray-400 pl-4'>Price</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='text-gray-400 pl-4'>Waller</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between pb-2'>
                            <div className='text-gray-400 pl-4'>Staked</div>
                            <div className='pr-4'>$34</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-col border-x border-gray-300 gap-3'>
                        <div className='flex flex-row justify-between pt-2'>
                            <div className='text-gray-400 pl-4'>APR</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between pb-2'>
                            <div className='text-gray-400 pl-4'>Rewards</div>
                            <div className='pr-4'>$34</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-col border-x border-t border-gray-300 gap-3'>
                        <div className='flex flex-row justify-between pt-2'>
                            <div className='text-gray-400 pl-4'>Total Staked</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between pb-2'>
                            <div className='text-gray-400 pl-4'>Total Supply</div>
                            <div className='pr-4'>$34</div>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-300 pb-2'>
                    <button class=" flex ml-2 mt-2 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded items-center justify-center"> 
                    Connect Wallet
                    </button>
                </div>    
            </div>

        </div>
    </div>

    <div className='flex flex-col px-60 py-8'>
        <div className='flex flex-row'>
            <div className='text-3xl'>Vest</div>
            <div></div>
        </div>
        <div className='flex flex-col'>
            <div className='text-l text-gray-400'>Convert esZOMI tokens to $ZOMI tokens.</div>
            <div className='text-l text-gray-400'>Please read the vesting details before using the vaults.</div>
        </div>
        <div className='my-4 grid grid-cols-2 gap-8 '>
        <div className='flex flex-col'>
                <div className='pl-2 py-2 text-xl border border-gray-300 rounded-sm'>$ZOMI Vault</div>
                    <div className='flex flex-col border-x border-gray-300 gap-3'>
                        <div className='flex flex-row justify-between pt-2'>
                            <div className='text-gray-400 pl-4'>Staked Tokens</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='text-gray-400 pl-4'>Reserved for Vesting</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='text-gray-400 pl-4'>Vesting Status</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between pb-2'>
                            <div className='text-gray-400 pl-4'>Claimable</div>
                            <div className='pr-4'>$34</div>
                        </div>
                    </div>
                <div className='border border-gray-300 pb-2'>
                    <button class=" flex ml-2 mt-2 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded items-center justify-center"> 
                    Buy $ZOMI
                    </button>
                </div>    
            </div>
            <div className='flex flex-col'>
                <div className='pl-2 py-2 text-xl border border-gray-300 rounded-sm'>$ZLP Vault</div>
                <div className='border-x border-gray-300'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-row justify-between pt-2'>
                            <div className='text-gray-400 pl-4'>Staked Tokens</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='text-gray-400 pl-4'>Reserved for Vesting</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='text-gray-400 pl-4'>Vesting Status</div>
                            <div className='pr-4'>$34</div>
                        </div>
                        <div className='flex flex-row justify-between pb-2'>
                            <div className='text-gray-400 pl-4'>Claimable</div>
                            <div className='pr-4'>$34</div>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-300 pb-2'>
                    <button class=" flex ml-2 mt-2 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded items-center justify-center"> 
                    Buy $ZOMI
                    </button>
                </div>    
            </div>
        </div>
    </div>

    <Footer />
    </>
  )
}

export default Earn