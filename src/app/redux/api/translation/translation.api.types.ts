import { CreateChatCompletionResponse } from 'openai'

export type TranslationForDictionaryDTO = {
    word: string
    data: CreateChatCompletionResponse
}
