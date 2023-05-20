import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCard from './ToyCard';
const ShopByCategory = () => {
    const [data2, setData2] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://server-liard-nine.vercel.app/shopByCategory')
            .then(res => res.json()).then(data => {
                setData2(data)
                setData(data)
            })
    }, [])
    console.log(data);

    const actionHandle = () => {
        const filter = data2.filter(toys => toys.subCategory === "Action Figures")
        setData(filter)
        console.log(filter)
    }
    const replicaHandle = () => {
        const filter = data2.filter(toys => toys.subCategory === "Replica Items")
        setData(filter)
        console.log(filter)
    }
    const collectibleHandle = () => {
        const filter = data2.filter(toys => toys.subCategory === "Collectible Statues")
        setData(filter)
        console.log(filter)
    }
    const plushHandle = () => {
        const filter = data2.filter(toys => toys.subCategory === "Plush Toys")
        setData(filter)
        console.log(filter)
    }
    const gamingHandle = () => {
        const filter = data2.filter(toys => toys.subCategory === "Gaming Accessories")
        setData(filter)
        console.log(filter)
    }
    useEffect(() => {
        gamingHandle()
    }, [data2])

    return (
        <div>
            <Tabs>
                <TabList className='flex justify-center border-b border-[#aaa] mb-4'>
                    <Tab onClick={gamingHandle}>Gaming Accessories</Tab>
                    <Tab onClick={replicaHandle}>Replica Items</Tab>
                    <Tab onClick={actionHandle}>Action Figures</Tab>
                    <Tab onClick={collectibleHandle}>Collectible Statues</Tab>
                    <Tab onClick={plushHandle}>Plush Toys</Tab>
                </TabList>
                <div className='min-h-[600px]'>

                    <TabPanel>
                        <div className='grid  lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 items-center mx-auto'>

                            {
                                data.map(toy => <ShopCard key={toy._id} toy={toy} />)
                            }
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className='grid  lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 items-center mx-auto'>
                            {
                                data.map(toy => <ShopCard key={toy._id} toy={toy} />)
                            }
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className='grid  lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 items-center mx-auto'>
                            {
                                data.map(toy => <ShopCard key={toy._id} toy={toy} />)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid  lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 items-center mx-auto'>
                            {
                                data.map(toy => <ShopCard key={toy._id} toy={toy} />)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid  lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 items-center mx-auto'>
                            {
                                data.map(toy => <ShopCard key={toy._id} toy={toy} />)
                            }
                        </div>
                    </TabPanel>


                </div>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;