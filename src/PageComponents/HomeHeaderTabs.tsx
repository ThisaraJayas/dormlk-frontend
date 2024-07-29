import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Flex, Image, Box } from '@chakra-ui/react'
import anexImg from '../assets/homeIcons/real-estate.png'
import sharedImg from '../assets/homeIcons/roommate.png'
import aprtmnetImg from '../assets/homeIcons/apartment.png'
import dblRoomImg from '../assets/homeIcons/room-mate.png'
import houseImg from '../assets/homeIcons/home(2).png'
import studioImg from '../assets/homeIcons/home-office.png'
import hostelImg from '../assets/homeIcons/hostel.png'



export default function HomeHeaderTabs() {
  return (
    <Box style={{ margin: '0 20px', marginTop:'3%' }}>
      <Tabs position='relative' variant='unstyled'>
        <Flex justifyContent='center'>
          <Box overflowX='auto' width='100%'>
            <TabList display='flex' justifyContent='center'>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={anexImg} alt='Icon One' boxSize='64px' mb={1} />
                  <span>Annex</span>
                </Flex>
              </Tab>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={sharedImg} alt='Icon Two' boxSize='64px' mb={1} />
                  <span>Shared</span>
                </Flex>
              </Tab>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={aprtmnetImg} alt='Icon Three' boxSize='64px' mb={1} />
                  <span>Appartment</span>
                </Flex>
              </Tab>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={dblRoomImg} alt='Icon Four' boxSize='64px' mb={1} />
                  <span>Double</span>
                </Flex>
              </Tab>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={houseImg} alt='Icon Five' boxSize='64px' mb={1} />
                  <span>House</span>
                </Flex>
              </Tab>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={studioImg} alt='Icon Six' boxSize='64px' mb={1} />
                  <span>Studio</span>
                </Flex>
              </Tab>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={hostelImg} alt='Icon Seven' boxSize='64px' mb={1} />
                  <span>Hostel</span>
                </Flex>
              </Tab>
            </TabList>
          </Box>
        </Flex>
        <TabIndicator mt='-1.5px' height='2px' bg='green.100' borderRadius='1px' />
        <TabPanels>
          <TabPanel>
            <p>Annex content!</p>
          </TabPanel>
          <TabPanel>
            <p>Shared Room content!</p>
          </TabPanel>
          <TabPanel>
            <p>Appartment content!</p>
          </TabPanel>
          <TabPanel>
            <p>Double Room content!</p>
          </TabPanel>
          <TabPanel>
            <p>House content!</p>
          </TabPanel>
          <TabPanel>
            <p>Studio content!</p>
          </TabPanel>
          <TabPanel>
            <p>Hostel content!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
