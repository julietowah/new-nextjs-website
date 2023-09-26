import React from 'react'
import Link from 'next/link';
import image from 'next/image';
import Image from 'next/image';

const heroContent = {
    text: {
        subheading : "Lorem Ipsum is",
        heading: "What is Lorem Ipsum?",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    images: {
        img1: "/images/hero-img-1-min.jpg",
        img2: "/images/hero-img-2-min.jpg",
        img3: "/images/hero-img-3-min.jpg",
        img4: "/images/hero-img-4-min.jpg",
        img5: "/images/hero-img-5-min.jpg",
    }
}

const Hero = () => {
    return (
        <section className='py-20'>
            <div className='container px-4 max-auto'>
                <div className='lg:flex justify-between items-center'>
                    <div className='lg:w-5/12 mb-10 lg:m-0'>
                        {heroContent.text.subheading && (<span className="inline-block py-0.5 pl-3 text-heading front-semibold relative mb-7 before:content-[''] before:left-0 before:top-0 before:z-[-1]">
                            {heroContent.text.subheading}</span>)}

                            {heroContent.text.heading && (<h1 className="text-4xl lg:text-5xl front-bold text-heading mb-7">
                            {heroContent.text.heading}
                        </h1>) }
                        {heroContent.text.description && (<p className='leading-relaxed text-body mb-10'>
                            {heroContent.text.description}

                        </p>) }
                        <div className='flex space-x-3'>
                            <Link href="#_" className='py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:top-1'> Get started </Link>

                            <Link href="#_" className='py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#179792] hover:shadow-lg inline-block relative top-0 hover:top-1'> How it works </Link>
                        </div>
                    </div>
                    <div className='lg:w-6/12 space-y-2'>
                        <div className='flex space-x-2 items-stretch'>
                            <div className='w-8/12'>
                                {heroContent.images.img1 && ( <Image src={heroContent.images.img1} width={397} height={406} alt="juliet.com" className="object-cover h-full w-full rounded-2xl"/>)}
                            </div>
                            <div className='w-4/12 self-end space-y-2'>
                                <div className='grid grid-cols-2 gap-2'>
                                    {heroContent.images.img2 && (
                                    <div> 
                                        <Image src={heroContent.images.img2} width={437} height={437} alt="juliet.com" className="object-cover h-full w-full rounded-2xl" />
                                    </div>
                                    )} 
                                    <div className='bg-yellowLight rounded-2xl rounded-tr-[200px]'></div>

                                </div>
                                {heroContent.images.img3 && (
                                    <div>
                                        <Image src={heroContent.images.img3} width={374} height={392} alt='juliet.com'className='object-cover h-full w-full rounded-2xl' />

                                    </div>
                                )}

                            </div>

                        </div>
                        <div className='flex space-x-2'>
                            <div className='w-4/12'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div className='bg-greenLight rounded-2xl rounded-bl-[200px]'></div>
                                    {heroContent.images.img4 && (
                                        <div>
                                        <Image src = {heroContent.images.img4}
                                        width={394} height={394} alt='juliet.com'
                                        />
                                        </div>
                                    )}
                                </div>

                            </div>
                            <div className='w-5/12'>
                            {heroContent.images.img5 && (
                                <Image src={heroContent.images.img5} width={446} height={495} alt="juliet.com" className='object-cover h-full w-full rounded-2xl'/>
                            )}
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default Hero