import React from 'react'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'


const statContent = {
    stats: [
        {
            number: '99.9%',
            label: 'Child Safety Solutions'
        },
        {
            number: '3,912',
            label: 'Happy Customers'
        },
        {
            number: '4.5',
            label: 'Rating Reviews'
        },
    ],
    getStarted: {
        heading: "Get started with our service?",
        descripton: "We understand that protecting your loved ones is of utmost importance",
        img:"/images/illustration-woman.svg",
        cta:{
            cta_href:'#_',
            cta_label:'Learn more',
        }
    }
}

const Stats = () => {
    return(
        <section className='pt-20 pb-10'>
            <div className='container px-4 mx-auto'>
                <div className='lg:flex justify-between items-center space-x-0'>
                    <div className='w-full lg:w-7/12 mb-20 lg:mb-0' >
                        <div className='grid grid-cols-3'>
                            {statContent.stats.map((stats, idx) => (
                                <div className='text-center lg:text-left' key={stats.label}>
                                    <strong className='text-primary text-4xl xl:text-[55px] font-bold block leading-tight'>
                                        {stats.number}
                                    </strong>
                                    <span> { stats.label }</span>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className='w-fill lg:w-5/12' ></div>
                    <div className='bg-light py-10 px-7 lg:px-10 !pr-28 md:!pr-32 lg:!pr-40 rounded-lg relative'>
                        {statContent.getStarted.img && (
                            <img src={statContent.getStarted.img}
                            alt="juliet.com"  className='absolute right-0 lg:right-6 -top-14 w-24'/>

                        )}
                        {statContent.getStarted.heading && (
                            <h3 className='text-heading font-bold text-xl mb-3'>
                                {statContent.getStarted.heading}
                            </h3>
                           

                        )}
                         {statContent.getStarted.descripton && (
                            <p className='text-md mb-5'>
                                {statContent.getStarted.descripton}
                            </p>
                           

                        )}

                            {statContent.getStarted.cta.cta_label && (
                            <Link href={statContent.getStarted.cta.cta_href}
                            className='flex space-x-2 outline-none items-center font-smibold text-primary'>
                                <span>{statContent.getStarted.cta.cta_label}</span>
                                <span className='w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out hover-group:bg-secondry'>
                                    <BiChevronRight className='text-lg' />
                                </span>
                            </Link>
                           

                        )}

                    </div>

                </div>

            </div>

        </section>
    )
}


export default Stats