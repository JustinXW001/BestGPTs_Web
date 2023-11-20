"use client";

import { Gpts } from "@/app/types/gpts";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";

interface Props {
  gpts: Gpts[];
  loading: boolean;
}

export default ({ gpts, loading }: Props) => {
  return (
    <section className= "relative">

      <div className= "mx-auto max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            
        <div className= "mx-auto mb-20 flex max-w-3xl flex-col text-center md:mb-20 lg:mb-22">
          <h2 className= "text-3xl font-bold md:text-5xl">Best GPTs For You</h2>
        </div>
            
            <div >
              {!loading ? (
                <div className= "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12">
                  {gpts.map((item: Gpts, idx: number) => {
                    return (
                      <div className= "relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4">
                        <Link href={`${item.visit_url}`} target="_blank" key={idx}>
                          <div className= "absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                            <img src={item.avatar_url} alt="" className= "relative z-10 inline-block h-8" />
                            <div className ="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div> 
                          </div>
                          
                            
                            <div className= "flex flex-col">
                                <h6 className= "text-base font-bold">{item.author_name}</h6>
                                <p className= "text-sm text-[#747373]">{item.name}</p>
                            </div>

                            <div className= "mt-6">
                              <p className= "text-sm text-[#2f2a2a]">{item.description}</p>
                            </div>
                          
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="mx-auto text-center">Loading data...</div>
              )}
            </div>
            
            
          


      </div>
    </section>
  );
};
