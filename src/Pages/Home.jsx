import React from 'react'
import "./home.css"
import { Box, Button, Heading, HStack, Image, Stack, VStack } from '@chakra-ui/react'
import vg from './../assets/images/banner.jpg'
import {CgGoogle,CgYoutube,CgAppleWatch,CgChanel} from 'react-icons/cg'
import { FaGooglePay } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import SamVid from './../assets/videos/samVid.mp4'
import Header from '../components/Header.jsx'


function Home() {
  return (
    <section className='Home'>
                    <Header />

        <div className="container">
            <Stack direction={["column","row"]} 
            height={'100%'} 
            justifyContent={["center","flex-end"]}
            alignItems={"center"}
            spacing={["16","56"]}
            >
                <VStack width={'full'} alignItems={['flex-end']}>
                    <Heading children="Lets Export new ways of learning" size={'2*1'}/>
                    <text  fontFamily='sans-sherif' children="world class technolgies in india"/>
                    <link to='/courses' />
                    <Button bg="yellow"  size="lg">Expore Now </Button> 

                </VStack>
                <Image boxSize={'lg'} src={vg} objectFit={'contain'}/>
                </Stack>

                <Box mt={'10'}>
                    <Heading textAlign={'center'} fontFamily={'sans-serif'} 
                    children="Our partners" background='tomato' color={'white'}/>
                </Box>

                
                <HStack gap={'1.5rem'} width={'full'}  justifyContent={["space-between"]}  m={8}             >
                    <CgGoogle size={'4rem'} />
                    <CgYoutube size={'4rem'}/>
                    <FaSquareFacebook size={'4rem'}/> <CgAppleWatch size={'4rem'} />
                    <FaGooglePay size={'4rem'}/> <CgChanel size={'4rem'} />
                    <CgYoutube size={'4rem'}/>
                </HStack>

        <video autoPlay={true} src={SamVid} controls controlsList='nodownload' />
        </div>
   </section>
  )
}

export default Home