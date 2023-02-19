import { Textarea } from '../../basic/textarea/Textarea'

export const TranslationInput = ({
    onChange,
    value,
}: {
    onChange: (value: string) => void
    value: string
}) => {
    return <Textarea value={value} label="word or phrase" onChange={onChange} />
}
