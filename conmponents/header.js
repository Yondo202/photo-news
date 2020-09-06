import React, { Component } from 'react'
import Link from 'next/link'
import { GoSearch } from 'react-icons/go'




export class header extends Component {
    render() {
        return (
            <div className="HeaderPAr">
                <div className="logoPar">
                    <Link href="/">
                        <span className="title">UNEEBICH.</span>
                    </Link>
                    <span className="mn">mn</span>
                </div>
                <div className="headerConPar">
                    <div className="menuPar">
                        <Link href="/">
                            <span>Home<div className="line1"></div></span>
                        </Link>
                    </div>
                    <div className="menuPar">
                        <Link href="/cars">
                            <span>Car<div className="line1"></div></span>
                        </Link>
                    </div>
                    
                    <div className="menuPar">
                    {/* <Link key={i} href='/posts/[slug]' as={`/posts/${el.slug}`}> */}
                        <Link href="/house">
                            <span>Apartment<div className="line1"></div></span>
                        </Link>
                    </div>

                    <div className="searchPAr">
                        <input type="text" placeholder="search.." />
                        <GoSearch />
                    </div>

                    <button type="button">Sign In</button>
                </div>
            </div>
        )
    }
}

export default header
