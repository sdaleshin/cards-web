import { Input } from '../../basic/input/Input'

export const TranslationInput = ({
    onChange,
    value,
}: {
    onChange: (value: string) => void
    value: string
}) => {
    return (
        <Input value={value} placeholder="word or phrase" onChange={onChange} />
    )
}
