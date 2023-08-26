import { FC } from "react";
import { HiXMark } from "react-icons/hi2";

interface ModalTypeProp {
    isOpenModal: boolean,
    children: React.ReactNode,
    handleCancel: () => void
}

const Modal:FC<ModalTypeProp> = (props) => {
    const {isOpenModal, children, handleCancel} = props
    return (
        <div className='fixed inset-0 z-10'>
            <div className={`fixed inset-0 w-full max-h-full over-flow-x-auto overflow-y-auto transition-opacity east-out duration-400 opacity-100 bg-black z-30
                            ${isOpenModal && "opacity-70"} `}
            >
            </div>
            {children}
            <HiXMark size={"2rem"} color='white' 
                            className='absolute right-10 top-10 z-50 cursor-pointer'
                            onClick={handleCancel}
            />
        </div>
    )
}

export default Modal;