import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Products = () => {

    const [tabIndex, setTabIndex] = useState(0);
    console.log(tabIndex);

    return (
        <div className="border mt-20">
            <h1 className="text-5xl font-extrabold text-[#F7CD2E] text-center">Our Products</h1>
            <p className='text-2xl'>Shop According to you kids age</p>
            <br />
            <Tabs>
                <TabList onSelect={(index) => setTabIndex(index)}>
                    <Tab>Age: 2 to 6</Tab>
                    <Tab>Age: 7 to 10</Tab>
                    <Tab>Age: 11 to higher</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Products;