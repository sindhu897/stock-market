import { BackBtn } from "./view";

const Variables = (props: any) => {

    const { variable } = props

    return (
        <div>
            <BackBtn back={props.back} />
            <div className="bg-white rounded shadow md:min-w-[350px] p-4">
                <h1 className="text-2xl font-medium">Variable Params</h1>
                <hr className="mt-5" />
                {variable.study_type ? <>
                    <h1 className="text-lg font-medium uppercase">{variable.study_type}</h1>
                    <form className="mt-2">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{variable.parameter_name}</label>
                        <input type="text" defaultValue={variable.default_value} placeholder="Period value" className="border shadow-md border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 "/>
                    </form>
                </> :
                <ul className="text-gray-500 list-none list-inside dark:text-gray-400 divide-y divide-gray-200">
                    {variable?.values.sort((a:number,b:number) => a-b)?.map((val: number) => (
                        <li className="p-4 font-medium text-black">{val}</li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}

export default Variables