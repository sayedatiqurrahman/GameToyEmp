import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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
    useEffect(() => {
        actionHandle()
    }, [data2])
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

    return (
        <div>
            <Tabs>
                <TabList className='flex justify-center border-b border-[#aaa] mb-4'>
                    <Tab onClick={actionHandle}>Action Figures</Tab>
                    <Tab onClick={replicaHandle}>Replica Items</Tab>
                    <Tab onClick={collectibleHandle}>Collectible Statues</Tab>
                    <Tab onClick={plushHandle}>Plush Toys</Tab>
                    <Tab onClick={gamingHandle}>Gaming Accessories</Tab>
                </TabList>
                <div className='min-h-[600px]'>
                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio laudantium cum deleniti quasi molestiae distinctio omnis animi! Voluptate exercitationem doloremque doloribus explicabo cupiditate alias, suscipit, atque reiciendis neque voluptatibus voluptatem dolore eligendi. Alias vel, velit odit inventore voluptatum quod dolore!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio laudantium cum deleniti quasi molestiae distinctio omnis animi! Voluptate exercitationem doloremque doloribus explicabo cupiditate alias, suscipit, atque reiciendis neque voluptatibus voluptatem dolore eligendi. Alias vel, velit odit inventore voluptatum quod dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non neque adipisci voluptates, soluta veniam ipsam quas eum repellendus sequi facilis enim voluptate expedita aliquid doloremque corrupti totam sint delectus aliquam in impedit distinctio velit. Cum neque doloribus sunt? Voluptatibus impedit doloribus exercitationem! Atque aliquam quas corporis, ipsum exercitationem sunt.</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio laudantium cum deleniti quasi molestiae distinctio omnis animi! Voluptate exercitationem doloremque doloribus explicabo cupiditate alias, suscipit, atque reiciendis neque voluptatibus voluptatem dolore eligendi. Alias vel, velit odit inventore voluptatum quod dolore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis velit error pariatur maxime minus ipsam doloribus nostrum repudiandae inventore. Officia dicta ad consequuntur sequi sapiente necessitatibus et ducimus corporis similique reprehenderit amet vel adipisci eius nulla, incidunt numquam! Tempora, rerum assumenda. Aut quisquam eius labore nam architecto quos ducimus sit ullam aperiam totam perspiciatis rerum odit autem natus distinctio doloribus, quasi dolores quo sequi cumque. Nesciunt minus sed autem! Quidem hic vitae, iure laboriosam harum temporibus iusto cupiditate perspiciatis enim. Recusandae voluptatibus facere impedit, quae iste cupiditate laudantium dolores eius, vel eum molestias repellendus autem odit ullam temporibus aliquam exercitationem.</p>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;