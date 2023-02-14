import { useState } from "react";
import Variables from "./variables";

interface Criteria {
    type: string;
    text: string
}

export const BackBtn = (props:any) => {
    return (<p className="text-md mb-4 cursor-pointer" onClick={props.back}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" className="inline" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
        &nbsp;Go Back
    </p>)
}
const Format = (props: any) => {

    const { criteria } = props

    let a: JSX.Element = <></>;

    criteria.text.split(' ').map((val: string) => {
        if (val.includes('$')) {
            a = <>{a} <span className="text-indigo-600 hover:underline cursor-pointer" onClick={() => props.onClick(criteria.variable[val])}>{criteria.variable[val]?.default_value || criteria.variable[val]?.values[0]}</span></>
        }
        else a = <>{a} {val}</>
    })
    return <p>{a}</p>
}

const ScanView = (props: any) => {

    const { data: scan } = props

    const [open, setOpen] = useState(false)
    const [variable,setVariable] = useState({})

    const handleOpen = (data:Object) => {
        setOpen(prev => !prev)
        setVariable(data)
    }
 
    return (
        open ? <Variables back={handleOpen} variable={variable}/> : 
        <div>
            <BackBtn back={props.back}/>
            <div className="bg-white rounded shadow md:min-w-[30vw] p-4">
                <h1 className="text-2xl font-medium">{scan.name}</h1>
                <span className={`bg-${scan.color}-100 text-${scan.color}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-${scan.color}-900 dark:text-${scan.color}-300`}>{scan.tag}</span>
                <hr className="mt-5" />
                <ul className="text-gray-500 list-none list-inside dark:text-gray-400 divide-y divide-gray-200">
                    {
                        scan.criteria.map((criteria: Criteria, i: number) => {
                            return (

                                <li key={i} className="p-3 flex font-medium text-black justify-between">
                                    {criteria.type === 'plain_text' ? criteria.text : <Format criteria={criteria} onClick={handleOpen}/>}
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ScanView