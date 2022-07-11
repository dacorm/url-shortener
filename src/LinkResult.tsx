import React, {useEffect, useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios, {AxiosResponse} from "axios";


interface LinkResultProps {
    inputValue: string;
}


const LinkResult = ({ inputValue }: LinkResultProps) => {

    const [link, setLink] = useState('');
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    let links: any[] = [];


    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setLink(res.data.result.full_short_link2);
        } catch (err) {
            console.warn(err)
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        if (inputValue.length) {
            fetchData();

        }
    }, [inputValue])

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
            setLink('');
        }, 1000)

        return () => clearTimeout(timer);
    }, [copied])


    console.log('array --', links)
    if (loading) {
        return <p className='noData'>Loading...</p>
    }

    return (
        <>
        {link &&
        <div className='result'>
            <p>{link}</p>
            <CopyToClipboard
                onCopy={() => setCopied(true)}
                text={link}
            >
                <button className={copied ? 'copied' : ''}>{copied ? 'Copied to clipboard' : 'Copy to clipboard'}</button>
            </CopyToClipboard>
        </div>}
        </>
    )
}

export default  LinkResult