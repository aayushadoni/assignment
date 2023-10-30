import React from 'react'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
const Dashboard = () => {
  return (
    <>
    <NavBar />
    <div className='flex flex-col px-44'>
        <div className='flex flex-row'>
            <div className='text-3xl'>Stats</div>
            <div></div>
        </div>
        <div className='flex flex-col'>
            <div className='text-l text-gray-400'>Ethereum Total Stats start from 06 Jan 2022.</div>
            <div className='text-l text-gray-400'>For detailed stats:</div>
        </div>
        <div className='my-4 grid grid-cols-2 gap-8 '>
            <div className='flex flex-col'>
                <div className='pl-2 py-2 text-xl border border-gray-300 rounded-sm'>Overview</div>
                <div className='flex flex-col border border-gray-300 gap-3'>
                    <div className='flex flex-row justify-between pt-2'>
                        <div className='text-gray-400 pl-4'>AUM</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-gray-400 pl-4'>$ZLP Pool</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-gray-400 pl-4'>24h Volume</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-gray-400 pl-4'>Long Positions</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between pb-2'>
                        <div className='text-gray-400 pl-4'>Short Positions</div>
                        <div className='pr-4'>$34</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='pl-2 py-2 text-xl border border-gray-300 rounded-sm'>Overview</div>
                <div className='flex flex-col border border-gray-300 gap-3'>
                    <div className='flex flex-row justify-between pt-2'>
                        <div className='text-gray-400 pl-4'>Total Fees</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-gray-400 pl-4'>Total Volume</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-gray-400 pl-4'>Floor Price Fund</div>
                        <div className='pr-4'>$34</div>
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
            </div>
        </div>
    </div>

    <div className='flex flex-col px-44'>
        <div className='flex flex-row'>
            <div className='text-3xl'>Tokens</div>
            <div></div>
        </div>
        <div className='flex flex-col'>
            <div className='text-l text-gray-400'>Ethereum Total Stats start from 06 Jan 2022.</div>
            <div className='text-l text-gray-400'>For detailed stats:</div>
        </div>
        <div className='my-4 grid grid-cols-2 gap-8 '>
            <div className='flex flex-col'>
                <div className='pl-2 py-2 text-xl border border-gray-300 rounded-sm'>Overview</div>
                <div className='flex flex-col border border-gray-300 gap-3'>
                    <div className='flex flex-row justify-between pt-2'>
                        <div className='text-gray-400 pl-4'>AUM</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-gray-400 pl-4'>$ZLP Pool</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-gray-400 pl-4'>24h Volume</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-gray-400 pl-4'>Long Positions</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between pb-2'>
                        <div className='text-gray-400 pl-4'>Short Positions</div>
                        <div className='pr-4'>$34</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='pl-2 py-2 text-xl border border-gray-300 rounded-sm'>Overview</div>
                <div className='flex flex-col border border-gray-300 gap-3'>
                    <div className='flex flex-row justify-between pt-2'>
                        <div className='text-gray-400 pl-4'>Total Fees</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-gray-400 pl-4'>Total Volume</div>
                        <div className='pr-4'>$34</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='text-gray-400 pl-4'>Floor Price Fund</div>
                        <div className='pr-4'>$34</div>
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
            </div>
        </div>
    </div>

    <Footer />
    </>
  )
}

export default Dashboard