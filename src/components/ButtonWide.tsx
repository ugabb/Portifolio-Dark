import React from 'react'

type Props = {
    text: string;
    icon: React.ReactNode;
}

const ButtonWide = ({ text, icon }: Props) => {
    return (
        <div className='flex flex-wrap justify-center items-center p-3 gap-1 rounded-xl bg-[#1e1d1f] hover:border-2 hover:border-blue-400 h-[140px] w-full md:w-[250px] xl:w-[350px]'>
            <p className='text-lg text-gray-400 hover:text-white '>{text}</p>
            {icon}
        </div>
    )
}

export default ButtonWide