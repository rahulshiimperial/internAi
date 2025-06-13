import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {dummyInterviews} from "@/constants";
import Image from "next/image";
import InterviewCard from "@/components/interviewCard";


const Page = () => {
    return (
        <>
            <section className='card-cta'>
                <div className='flex flex-col gap-6 max-w-lg'>
                    <h2>
                        Get started with Interview AI. Practice your interview skills with AI.
                    </h2>
                    <p className='text-lg'>
                       Practice on real Interview questions. Get the best results.
                    </p>
                    <Button asChild className='btn-primary max-small:w-full' type='submit'>
                     <Link href='/interview'>Start an Interview</Link>
                    </Button>
                </div>
                <Image src='/robot.png' alt='robo dude' width={400} height={400} className='max-sm:hidden' />
            </section>
            <section className='flex flex-col gap-6 mt-8'>
                {dummyInterviews.map((interview, index) => (
                    <InterviewCard {...interview} />
                ))}
                <h2>You haven&apos;t taken any interview yet</h2>
            </section>
            <section className='flex flex-col gap-6 mt-8'>
                <h2>You haven&apos;t taken any interview yet</h2>
            </section>
        </>
    )
}
export default Page
