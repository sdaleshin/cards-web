export type FreeDictionaryApiResponse = FreeDictionaryTranslation[]

export type FreeDictionaryTranslation = {
    word: string
    phonetics: FreeDictionaryPhonetics[]
    meanings: FreeDictionaryMeaning[]
    license: FreeDictionaryLicense
    sourceUrls: string[]
}

export type FreeDictionaryPhonetics = {
    text?: string
    audio: string
    sourceUrl: string
    license: FreeDictionaryLicense
}

export type FreeDictionaryLicense = {
    name: string
    url: string
}

export type FreeDictionaryMeaning = {
    partOfSpeech: string
    definitions: FreeDictionaryDefinition[]
    synonyms: string[]
    antonyms: string[]
}

export type FreeDictionaryDefinition = {
    definition: string
    synonyms: string[]
    antonyms: string[]
    example: string
}
