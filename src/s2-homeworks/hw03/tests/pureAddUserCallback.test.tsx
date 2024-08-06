import React from 'react'
import { pureAddUserCallback, UserType } from '../HW3'

let initialState: UserType[] = []
const setName = (a: React.SetStateAction<UserType[]>) => {
    if (typeof a === 'function') {
        initialState = (a as (prevState: UserType[]) => UserType[])(initialState)
    } else {
        initialState = a
    }
}

beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    pureAddUserCallback('name', setName, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
