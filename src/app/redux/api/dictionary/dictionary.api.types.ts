export type DictionaryApiResponse = DictionaryTranslation[]

export type DictionaryTranslation = {
    word: string
    phonetics: DictionaryPhonetics[]
    meanings: DictionaryMeanings[]
    license: DictionaryLicense
    sourceUrls: string[]
}

export type DictionaryPhonetics = {
    text?: string
    audio: string
    sourceUrl: string
    license: DictionaryLicense
}

export type DictionaryLicense = {
    name: string
    url: string
}

export type DictionaryMeanings = {
    partOfSpeech: string
    definitions: DictionaryDefinition[]
    synonyms: string[]
    antonyms: string[]
}

export type DictionaryDefinition = {
    definition: string
    synonyms: string[]
    antonyms: string[]
    example: string
}
