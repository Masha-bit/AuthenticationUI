"use client"
import React, { useState } from 'react'
import NavList from './component/NavList'
import { BiHome, BiPlus } from 'react-icons/bi'
import BioProfiler from './component/BioProfiler'
import Profiler from './component/Profiler'

export default function page() {

  
  const [firstName, setFirstName] = useState('Christopher')
  const [lastName, setLastName] = useState('Masha')
  const [country, setCountry] = useState('Nigeria')
  const [city, setCity] = useState('Lagos')
  const [bio, setBio] = useState('Frontend Developer')
  const [email, setEmail] = useState('mashachristopherifechukwude@gmail.com')
  const [phone, setPhone] = useState('9044314428')
  const [post, setPost] = useState('ERT2345')
  const [taxId, setTaxId] = useState('ASA5645756')
  
  

  const handlefirstName = (e) => {
    e = e.charAt(0).toUpperCase() + e.slice(1).trim()
    setFirstName(e)
  }
  const handlelastName = (e) => {
    e = e.charAt(0).toUpperCase() + e.slice(1).trim()
    setLastName(e)
  }
  const handleCountry = (e) => {
    e = e.charAt(0).toUpperCase() + e.slice(1).trim()
    setCountry(e)
  }
  const handleCity = (e) => {
    e = e.charAt(0).toUpperCase() + e.slice(1).trim()
    setCity(e)
  }
  const handleEmail = (e) => {
    e=e.toLowerCase().trim()
    setEmail(e)
  }
  const handlePhone = (e) => {
    // create a validation here that only setPhone when e is an integer from the input field
    // console.log('phone', parseInt(e))
    if (!isNaN(parseInt(e))){
      e=e.toString() &&
      setPhone(e)
    }
    null
  }
  const handlePost = (e) => {
    setPost(e)
  }
  const handleTaxId = (e) => {
    setTaxId(e)
  }
  const handleBio = (e) => {
    e = e.charAt(0).toUpperCase() + e.slice(1).trim()
    setBio(e)
  }

  return (
    <main className='h-[100vh] w-[100vw] bg-white font-nunito flex items-center justify-center relative'>
      {/* sidenav */}
      <div className='h-[100vh] w-[20%]  flex flex-col items-center p-3  relative'>
        
        <div className='h-[auto] w-[90%] flex flex-row text-[#2b2b2bdb] my-5'>
          <div className='h-[50px] w-[50px] rounded-full bg-[#1c1360] mr-2'></div>
          <div>
            <h1 className='font-bold'>Fillo Team</h1>
            <p className='text-[12px]'>hellofillo.com</p>
          </div>
        </div>

        <div className='my-5 w-[90%]'>
        <NavList title={'MENU'} item={[
        {
        name:'Home',
        icon:<BiHome/>
        },
        {
        name:'Create Contract',
        icon:<BiHome/>
        },
        {
        name:'Contracts',
        icon:<BiHome/>
        },
        {
        name:'Payment',
        icon:<BiHome/>
        },
        {
        name:'Com Document',
        icon:<BiHome/>
        },
        {
        name:'Invoice Receipts',
        icon:<BiHome/>,
        special: 8
        },
        {
        name:'Team Settings',
        icon:<BiHome/>
        },
      
        ]}/>
        <NavList title={'ORGANISATION'} item={[
        {
        name:'Apps & Perks',
        icon:<BiHome/>
        },
        {
        name:'Tax Forms',
        icon:<BiHome/>,
        special: 'New'
        },
        {
        name:'Organisation Settings',
        icon:<BiHome/>
        },
        ]}/>
        </div>

        <div className='h-[50px] w-[130px] bg-[#3926cb] rounded-full mx-[auto] flex items-center justify-center text-white text-[12px] absolute bottom-0 shadow-2xl mb-[2rem] hover:cursor-pointer'>
          Create Contract
          <span><BiPlus/></span>
        </div>
      </div>

      <div className='h-[100vh] w-[80%] rounded-2xl bg-[#e2e1e1] p-[1rem] relative'>
        <h1 className='font-[600] text-[20px]'>Account Setting</h1>
        <div className='h-[80%] w-[97%] rounded-2xl mt-5 bg-white absolute right-0 flex items-center'>

          <aside className='h-[100%] w-[20%] p-1'>
        <NavList title={''} item={[
        {
        name:'My Profile',
        icon:'',
        active: true,
        },
        {
        name:'Security',
        icon:''
        },
        {
        name:'Teams',
        icon:''
        },
        {
        name:'Team Member',
        icon:''
        },
        {
        name:'Notifications',
        icon:''
        },
        {
        name:'Billing',
        icon:''
        },
        {
        name:'Data Export',
        icon:''
        },
    ]}/>
        <NavList item={
          [
            {
              name: 'Delete Account',
              icon: '',
              important: true,
            }
          ]
        }/>
          </aside>
          <aside className='h-[90%] border-r-[1px]'></aside>

          <aside className='h-[100%] w-[80%] p-[2rem]'>
          <h1 className='font-bold text-[#000] text-[16px]'>My Profile</h1>
            

            <BioProfiler name={`${lastName} ${firstName}`}
            role={`${bio}`}
            address={`${country}, ${city}`}/>

            <Profiler title={'Personal Information'} detail={[
              {
                name: 'First Name',
                value: (firstName),
                onChange: ((e) => handlefirstName(e.target.value))
              },
              {
                name: 'Last Name',
                value: (lastName),
                onChange: ((e) => handlelastName(e.target.value))
              },
              {
                name: 'Email address',
                value: email,
                onChange: ((e) => handleEmail(e.target.value))

              },
              {
                name: 'Phone',
                value: (`+234${phone.slice(0,2)} ${phone.slice(2,5)} ${phone.slice(5)}`),
                onChange: ((e) => handlePhone(e.target.value))
              },
              {
                name: 'Bio',
                value: (bio),
                onChange: ((e) => handleBio(e.target.value))
              },

            ]}/>

            <Profiler title={'Address'} detail={[
              {
                name: 'Country',
                value: (country),
                onChange: ((e) => handleCountry(e.target.value))
              },
              {
                name: 'City/State',
                value: (city),
                onChange: ((e) => handleCity(e.target.value))
              },
              {
                name: 'Postal Code',
                value: (`${post.slice(0,3)} ${post.slice(3)}`),
                onChange: ((e) => handlePost(e.target.value))
              },
              {
                name: 'TAX ID',
                value: (taxId),
                onChange: ((e) => handleTaxId(e.target.value))
              }
            ]}/>
          </aside>

        </div>
      </div>
     

    </main>
  )
}
