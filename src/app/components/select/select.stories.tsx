import React, { ReactNode, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ISelectOption, Select } from './Select'

export default {
    title: 'Components/Select',
    component: Select,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
    const [selectedOption, setSelectedOption] = useState<ISelectOption>(null)
    const handleChange = (option: ISelectOption) => {
        setSelectedOption(option)
    }
    return (
        <Select
            onChange={handleChange}
            selectedOption={selectedOption}
            options={args.options}
        />
    )
}

export const Default = Template.bind({})
Default.args = {
    options: [
        { id: '1', name: 'Basic group' },
        { id: '2', name: 'Winnie the Pooh' },
        { id: '3', name: 'Harry Potter' },
        { id: '4', name: 'shakespeare' },
        { id: '5', name: 'PMBOK 1996' },
        { id: '6', name: 'Ulysses' },
        { id: '7', name: 'iBook group 20 Feb 2023' },
    ],
}
