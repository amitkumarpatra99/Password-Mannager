import { text } from '@fortawesome/fontawesome-svg-core'
import { useEffect } from 'react'
import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mannager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
        else {
            JSON.stringify;
        }

    }, [])


    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("/icons/hide.png")) {
            ref.current.src = "/icons/visible.png"
            passwordRef.current.type = "password";
        }
        else {
            passwordRef.current.type = "text";
            ref.current.src = "/icons/hide.png"
        }

    }

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            setform({ site: "", username: "", password: "" })


            toast('Password Saved  ☑️', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toast('Invalid Input ❌', {
                theme: "dark",
            });
        }
    }

    const deletePassword = (id) => {
        let c = confirm(" Do You Want To delete the Password")
        if (c) {

            toast('Password Deleted  ☑️', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        }

    }


    const editPassword = (id) => {
        setform(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))

    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast('✔️ Copied To Clipbord', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
        navigator.clipboard.writeText(text)
    }

    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />

            <div className="p-2 md:mycontainer md:px-0">
                <h1 className=' font-bold text-4xl text-center '>
                    Password
                    <span className=' text-black]'> Keeper </span>
                    <img width={30} className='inline  mx-2' src="/icons/security.png" alt="" />
                </h1>
                <p className=' font-serif p-1 text-lg justify-center text-center'> Your Own Password Saver</p>


                <div className="text-black flex flex-col p-4  gap-8 items-start">

                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className=' rounded-full border-2 border-[#003161] w-3/4 text-black p-4 py-2 ' type="text" name="site" id="site" />

                    <div className="flex flex-col w-3/4 md:flex-row  justify-center items-start gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border-2 border-[#003161] w-full  text-black p-4 py-2 ' type="text" name="username" id="username" />

                        <div className="relative ">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border-2 border-[#003161] w-full text-black p-4 py-2 ' type="Password" name="password" id="password" />
                            <span className='absolute right-[5px]  top-[2px] cursor-pointer' onClick={showPassword} >
                                <img ref={ref} className='w-6 mr-2 py-2 ' src="/icons/visible.png" alt="eye" /> </span>
                        </div>

                    </div>
                    <button onClick={savePassword} className='  flex w-fit justify-center items-center gap-2  rounded-full py-2 px-8 border border-black hover:bg-[#89D2DC] font-semibold'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        SAVE </button>
                </div>

                <div className="passwords">
                    <h2 className='text-2xl py-2 font-bold'> Your Password</h2>
                    {passwordArray.length === 0 && <div> No Password to Show </div>}
                    {passwordArray.length != 0 && < table className="table-auto w-full rounded-[20px] overflow-hidden mb-10">
                        <thead className='bg-[#133E87] text-white'>
                            <tr>
                                <th className='py-2 px-16'>Site </th>
                                <th className='py-2 px-16'> UserName</th>
                                <th className='py-2 px-16'>Password</th>
                                <th className='py-2 px-16'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-[#608BC1] text-white '>
                            {passwordArray.map((item, index) => {

                                return <tr key={index}>
                                    <td className='flex p-2 text-centern gap-2'><a href={item.site} target='_blank' >{item.site}</a>

                                        <div className='flex items-center justify-center'>


                                            <div className='  size-2 flex items-center cursor-pointer  gap-2' onClick={() => { copyText(item.site) }}>
                                                <span className="  material-symbols-outlined">
                                                    content_copy
                                                </span>
                                            </div>
                                        </div>

                                    </td>

                                    <td className='  py-2  text-center' >
                                        <div className='flex items-center justify-center  gap-2'>
                                            <span > {item.username}</span>

                                            <div className='  size-2 items-center  flex  cursor-pointer  ' onClick={() => { copyText(item.username) }}>
                                                <span className=" material-symbols-outlined">
                                                    content_copy
                                                </span>
                                            </div>
                                        </div>
                                    </td>


                                    <td className=' justify-center  py-2 text-center'>
                                        <div className='flex items-center justify-center m-2 gap-2'>
                                            <span>{item.password}</span>

                                            <div className=' size-1 flex items-center  cursor-pointer  ' onClick={() => { copyText(item.password) }}>
                                                <span className="  material-symbols-outlined">
                                                    content_copy
                                                </span>
                                            </div>
                                        </div>

                                    </td>

                                    <td className=' justify-center  py-2 text-center'>
                                        <span onClick={() => { editPassword(item.id) }} className="material-symbols-outlined cursor-pointer mx-1">
                                            edit
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }} >
                                            <lord-icon
                                                src="https://cdn.lordicon.com/drxwpfop.json"
                                                trigger="morph"
                                                state="morph-trash-in"
                                                colors="primary:#121331,secondary:#848484"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>

                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table >
                    }

                </div >

                {passwordArray.length === 0 && <div> No Password to Show </div>}
            </div >


        </>

    )
}

export default Mannager
