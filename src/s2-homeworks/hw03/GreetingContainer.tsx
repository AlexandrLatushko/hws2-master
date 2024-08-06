import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // 
    addUserCallback: (name: string)=>void // 
}

export const pureAddUser = (
    name: string, 
    setError: React.Dispatch<React.SetStateAction<string>>, 
    setName: React.Dispatch<React.SetStateAction<string>>, 
    addUserCallback: (name: string) => void) => {
        if(name.trim() === '') {
        setError('error')
        }else {addUserCallback(name.trim())
                setName('')
        } // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: React.Dispatch<React.SetStateAction<string>>) => { 
    if(name.trim() === ''){
        setError('error')
                                  // если имя пустое - показать ошибку
}
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { 
    if(e.key === 'Enter'){
        addUser()
    }
    
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users,addUserCallback}) => {
    
    const [name, setName] = useState<string>('') // 
    const [error, setError] = useState<string>('') // 

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // 
        setName(e.currentTarget.value) // 
        error && setError('')
    }

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = totalUsers > 0 ? users[totalUsers - 1].name : ''  // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
